import { IQuery } from "../../interfaces";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { ICreateDepartment, IUpdateDepartment } from "./department.interface";
import httpStatus from "http-status";

const createDepartmentService = async (payload: ICreateDepartment) => {
  const name = payload.name.trim();

  // Check duplicate department name
  const existingDepartment = await prisma.department.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });

  if (existingDepartment) {
    throw new AppError(httpStatus.CONFLICT, "Department already exists");
  }
  const department = await prisma.department.create({
    data: {
      name,
    },
  });

  return department;
};
const getAllDepartmentService = async () => {
  const Departments = await prisma.department.findMany({
    include:{
      categories:{
        select:{
          id:true,
          name:true,
          departmentId:false
        }
      }
      
    }
  }
  );

  return Departments;
};

const getDepartmentByIdService = async (departmentId: string) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId,
    },
  });

  if (!department) {
    throw new AppError(httpStatus.NOT_FOUND, "Department does not exist");
  }

  return department;
};

const updateDepartmentByIdService = async (
  payload: IUpdateDepartment,
  departmentId: string,
) => {
  const isDepartment = await prisma.department.findUnique({
    where: {
      id: departmentId,
    },
  });

  if (!isDepartment) {
    throw new AppError(httpStatus.NOT_FOUND, "Department does not exist");
  }

  const newName = payload.name.trim();

  // Same name
  if (isDepartment.name.toLowerCase() === newName.toLowerCase()) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Department name is already up to date",
    );
  }

  const existingDepartment = await prisma.department.findFirst({
    where: {
      name: {
        equals: newName,
        mode: "insensitive",
      },
      NOT: {
        id: departmentId,
      },
    },
  });

  if (existingDepartment) {
    throw new AppError(
      httpStatus.CONFLICT,
      "This department name already exists",
    );
  }

  const updatedDepartment = await prisma.department.update({
    where: {
      id: departmentId,
    },
    data: {
      name: payload.name?.trim(),
    },
  });

  return updatedDepartment;
};

const deleteDepartmentByIdService = async (departmentId: string) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId,
    },
  });

  if (!department) {
    throw new AppError(httpStatus.NOT_FOUND, "Department does not exist");
  }

  const deletedDepartment = await prisma.department.delete({
    where: {
      id: departmentId,
    },
  });

  return deletedDepartment;
};

export const departmentServices = {
  createDepartmentService,
  getAllDepartmentService,
  getDepartmentByIdService,
  updateDepartmentByIdService,
  deleteDepartmentByIdService,
};
