import { InvitationStatus, Role, WorkStatus } from "../../../generated/prisma/enums";
import { StaffInvitationWhereInput } from "../../../generated/prisma/models";
import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";
import { RequestUser } from "../../middlewares/checkAuth";
import { AppError } from "../../utils/AppError";
import {
  projectStaffInvitationDetail,
  projectWorkRequestContact,
} from "../../utils/contactPrivacy";
import {
  ICreateStaffInvitation,
  IRespondToInvitation,
} from "./staffInvitation.interface";
import httpStatus from "http-status";

const createStaffInvitationService = async (
  payload: ICreateStaffInvitation,
  user: RequestUser,
) => {
  // 1. Check manager/admin permission
  if (user.role !== Role.MANAGER && user.role !== Role.ADMIN) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to send invitations",
    );
  }

  // 2. Check WorkRequest
  const workRequest = await prisma.workRequest.findUnique({
    where: { id: payload.requestId },
  });

  if (!workRequest) {
    throw new AppError(httpStatus.NOT_FOUND, "Work request not found");
  }

  if (
    workRequest.status !== WorkStatus.PENDING &&
    workRequest.status !== WorkStatus.REQUESTED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This work request cannot receive invitations",
    );
  }

  // 3. Check staff
  const staff = await prisma.user.findFirst({
    where: {
      id: payload.staffId,
      role: Role.STAFF,
    },
  });

  if (!staff) {
    throw new AppError(httpStatus.NOT_FOUND, "Staff not found");
  }

  // 4. Check staff category assignment in the request's department
  const staffCategory = await prisma.staffCategory.findFirst({
    where: {
      staffId: payload.staffId,
      category: {
        departmentId: workRequest.departmentId,
      },
    },
  });

  if (!staffCategory) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Staff is not assigned to this department's categories",
    );
  }

  // 5. Check duplicate invitation
  const existingInvitation = await prisma.staffInvitation.findUnique({
    where: {
      requestId_staffId: {
        requestId: payload.requestId,
        staffId: payload.staffId,
      },
    },
  });

  if (existingInvitation) {
    throw new AppError(
      httpStatus.CONFLICT,
      "This staff member has already been invited",
    );
  }

  // 6. Create invitation
  const result = await prisma.staffInvitation.create({
    data: {
      requestId: payload.requestId,
      staffId: payload.staffId,
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
          division: true,
          district: true,
          address: true,
          postalCode: true,
          staffCategories: {
            include: {
              category: {
                include: {
                  department: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      request: true,
    },
  });

  // 7. Update WorkRequest status
  if (workRequest.status === WorkStatus.PENDING) {
    await prisma.workRequest.update({
      where: { id: payload.requestId },
      data: {
        status: WorkStatus.REQUESTED,
      },
    });
  }

  const formattedResult = {
    ...result,
    staff: {
      ...result.staff,
      department: result.staff.staffCategories[0]?.category.department.name,
      categories: result.staff.staffCategories.map(
        (item) => item.category.name,
      ),
    },
  };

  delete (formattedResult.staff as any).staffCategories;

  return {
    ...formattedResult,
    request: projectWorkRequestContact(formattedResult.request, user),
  };
};

const getAllStaffInvitationsService = async (
  query: IQuery,
  user: RequestUser,
) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: StaffInvitationWhereInput[] = [];

  if (query.status) {
    andConditions.push({
      status: query.status as InvitationStatus,
    });
  }

  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          staff: {
            name: {
              contains: query.searchTerm,
              mode: "insensitive",
            },
          },
        },
        {
          staff: {
            email: {
              contains: query.searchTerm,
              mode: "insensitive",
            },
          },
        },
        {
          request: {
            title: {
              contains: query.searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    });
  }

  const invitations = await prisma.staffInvitation.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: { [sortBy]: sortOrder },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      request: {
        select: {
          id: true,
          title: true,
          description:true,
          status: true,
        },
      },
    },
  });

  const total = await prisma.staffInvitation.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: invitations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getMyInvitationsService = async (
  query: IQuery,
  user: RequestUser,
) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: StaffInvitationWhereInput[] = [];

  // Only show invitations belonging to the logged-in staff
  andConditions.push({
    staffId: user.userId,
  });

  if (query.status) {
    andConditions.push({
      status: query.status as InvitationStatus,
    });
  }

  if (query.searchTerm) {
    andConditions.push({
      request: {
        title: {
          contains: query.searchTerm,
          mode: "insensitive",
        },
      },
    });
  }

  const invitations = await prisma.staffInvitation.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      request: {
        select: {
          id: true,
          title: true,
          description: true,
          division: true,
          city: true,
          address: true,
          postalCode: true,
          status: true,
          department: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const total = await prisma.staffInvitation.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: invitations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getStaffInvitationByIdService = async (
  id: string,
  user: RequestUser,
) => {
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id,
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
          division: true,
          district: true,
          address: true,
          postalCode: true,
        },
      },
      request: {
        omit: {
          phone: true,
        },
        include: {
          department: true,
          citizen: {
            select:{
              id:true,
              name:true,
              email:true
            }
          },
        },
      },
    },
  });

  if (!invitation) {
    throw new AppError(httpStatus.NOT_FOUND, "Staff invitation not found");
  }

  // Staff can only view their own invitation
  if (user.role === Role.STAFF && invitation.staffId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to view this invitation",
    );
  }

  return projectStaffInvitationDetail(invitation);
};

const respondToInvitationService = async (
  id: string,
  payload: IRespondToInvitation,
  user: RequestUser,
) => {
  // 1. Find invitation
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id,
    },
  });

  if (!invitation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Staff invitation not found",
    );
  }

  // 2. Check ownership
  if (invitation.staffId !== user.userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to respond to this invitation",
    );
  }

  // 3. Check invitation status
  if (invitation.status !== InvitationStatus.REQUESTED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already responded to this invitation",
    );
  }

  // 4. Validate response status
  if (
    payload.status !== InvitationStatus.ACCEPTED &&
    payload.status !== InvitationStatus.REJECTED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Invalid invitation response",
    );
  }

  // 5. Update invitation
  const result = await prisma.staffInvitation.update({
    where: {
      id,
    },
    data: {
      status: payload.status,
      responseNote: payload.responseNote!,
    },
    include: {
      request: {
        select: {
          id: true,
          title: true,
          status: true,
        },
      },
    },
  });

  return result;
};

const deleteStaffInvitationService = async (
  id: string,
  user: RequestUser,
) => {
  // 1. Find invitation
  const invitation = await prisma.staffInvitation.findUnique({
    where: {
      id,
    },
  });

  if (!invitation) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Staff invitation not found",
    );
  }

  // 2. Only Admin or Manager can delete
  if (user.role !== Role.ADMIN && user.role !== Role.MANAGER) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You are not allowed to delete this invitation",
    );
  }

  // 3. Delete invitation
  const result = await prisma.staffInvitation.delete({
    where: {
      id,
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      request: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  return result;
};

export const staffInvitationServices = {
  createStaffInvitationService,
  getAllStaffInvitationsService,
  getMyInvitationsService,
  getStaffInvitationByIdService,
  respondToInvitationService,
  deleteStaffInvitationService,
};
