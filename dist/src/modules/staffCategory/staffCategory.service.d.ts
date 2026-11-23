import { IAssignCategories } from "./staffCategory.interface";
declare const assignCategoriesToStaffService: (staffId: string, payload: IAssignCategories) => Promise<{
    staffId: string;
    departments: {
        id: string;
        name: string;
        categories: {
            id: string;
            name: string;
        }[];
    }[];
}>;
declare const getStaffCategoriesService: (staffId: string) => Promise<{
    staffId: string;
    departments: {
        id: string;
        name: string;
        categories: {
            id: string;
            name: string;
        }[];
    }[];
}>;
declare const removeStaffCategoryService: (staffId: string, categoryId: string) => Promise<{
    staffId: string;
    departments: {
        id: string;
        name: string;
        categories: {
            id: string;
            name: string;
        }[];
    }[];
}>;
export declare const staffCategoryServices: {
    assignCategoriesToStaffService: typeof assignCategoriesToStaffService;
    getStaffCategoriesService: typeof getStaffCategoriesService;
    removeStaffCategoryService: typeof removeStaffCategoryService;
};
export {};
//# sourceMappingURL=staffCategory.service.d.ts.map