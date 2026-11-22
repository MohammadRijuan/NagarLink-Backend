import httpStatus from "http-status";
import { ICreateCategory, IUpdateCategory } from "./category.interface";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";

// Create Category
const createCategoryService = async (payload: ICreateCategory) => {
  const categoryName = payload.name.trim().toLowerCase();

  const isExistCategory = await prisma.category.findFirst({
    where: {
      name: categoryName,
      departmentId: payload.departmentId,
    },
  });

  if (isExistCategory) {
    throw new AppError(
      httpStatus.CONFLICT,
      "Category already exists in this department",
    );
  }

  const category = await prisma.category.create({
    data: {
      name: categoryName,
      departmentId: payload.departmentId,
    },
    omit: {
      departmentId: true,
    },
    include: {
      department: true,
    },
  });

  return category;
};

// Get All Categories
const getAllCategoriesService = async () => {
  const categories = await prisma.category.findMany({
    omit: {
      departmentId: true,
    },
    include: {
      department: true,
    },
  });

  return categories;
};

const getCategoriesByDepartmentService = async (departmentId: string) => {
  const department = await prisma.department.findUnique({
    where: {
      id: departmentId,
    },
    include: {
      categories: {
        omit: {
          departmentId: true,
        },
      },
    },
  });

  if (!department) {
    throw new AppError(httpStatus.NOT_FOUND, "Department does not exist");
  }

  return department;
};
// Get Single Category
const getCategoryByIdService = async (categoryId: string) => {
  const isCategory = await prisma.category.findFirst({
    where: {
      id: categoryId,
    },
    omit: {
      departmentId: true,
    },
    include: {
      department: true,
    },
  });

  if (!isCategory) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not exist");
  }
  return isCategory;
};

// Update Category
const updateCategoryService = async (
  categoryId: string,
  payload: IUpdateCategory,
) => {
  const categoryName = payload.name.trim().toLowerCase();

  const isExistCategory = await prisma.category.findFirst({
    where: {
      id : categoryId,
    },
  });

  if (!isExistCategory) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Category does not exists ",
    );
  }

  if(isExistCategory.name.toLowerCase() === categoryName){
    throw new AppError(httpStatus.CONFLICT,"Your current category is same as updated one")
  }

  const updatedCategory = await prisma.category.update({
    where:{
      id:categoryId
    },
    data:{
      name:payload.name,
      departmentId:payload?.departmentId
    },
    omit:{
      departmentId:true
    },
    include:{
      department:true
    }
  })

  return updatedCategory

};

// Delete Category
const deleteCategoryService = async (categoryId: string) => {
  const isExistCategory = await prisma.category.findFirst({
    where: {
      id : categoryId,
    },
  });

  if (!isExistCategory) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Category does not exists ",
    );
  }

  const deletedCategory = await prisma.category.delete({
    where:{
      id:categoryId
    },
  })

  return deletedCategory


};

export const categoryServices = {
  createCategoryService,
  getAllCategoriesService,
  getCategoriesByDepartmentService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
};
