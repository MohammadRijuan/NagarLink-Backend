import { ICreateCategory, IUpdateCategory } from "./category.interface";
declare const createCategoryService: (payload: ICreateCategory) => Promise<{
    department: {
        id: string;
        name: string;
    };
} & {
    id: string;
    name: string;
}>;
declare const getAllCategoriesService: () => Promise<({
    department: {
        id: string;
        name: string;
    };
} & {
    id: string;
    name: string;
})[]>;
declare const getCategoriesByDepartmentService: (departmentId: string) => Promise<{
    categories: {
        id: string;
        name: string;
    }[];
} & {
    id: string;
    name: string;
}>;
declare const getCategoryByIdService: (categoryId: string) => Promise<{
    department: {
        id: string;
        name: string;
    };
} & {
    id: string;
    name: string;
}>;
declare const updateCategoryService: (categoryId: string, payload: IUpdateCategory) => Promise<{
    department: {
        id: string;
        name: string;
    };
} & {
    id: string;
    name: string;
}>;
declare const deleteCategoryService: (categoryId: string) => Promise<{
    id: string;
    name: string;
    departmentId: string;
}>;
export declare const categoryServices: {
    createCategoryService: typeof createCategoryService;
    getAllCategoriesService: typeof getAllCategoriesService;
    getCategoriesByDepartmentService: typeof getCategoriesByDepartmentService;
    getCategoryByIdService: typeof getCategoryByIdService;
    updateCategoryService: typeof updateCategoryService;
    deleteCategoryService: typeof deleteCategoryService;
};
export {};
//# sourceMappingURL=category.service.d.ts.map