import { ICreateDepartment, IUpdateDepartment } from "./department.interface";
declare const createDepartmentService: (payload: ICreateDepartment) => Promise<{
    id: string;
    name: string;
}>;
declare const getAllDepartmentService: () => Promise<({
    categories: {
        id: string;
        name: string;
    }[];
} & {
    id: string;
    name: string;
})[]>;
declare const getDepartmentByIdService: (departmentId: string) => Promise<{
    id: string;
    name: string;
}>;
declare const updateDepartmentByIdService: (payload: IUpdateDepartment, departmentId: string) => Promise<{
    id: string;
    name: string;
}>;
declare const deleteDepartmentByIdService: (departmentId: string) => Promise<{
    id: string;
    name: string;
}>;
export declare const departmentServices: {
    createDepartmentService: typeof createDepartmentService;
    getAllDepartmentService: typeof getAllDepartmentService;
    getDepartmentByIdService: typeof getDepartmentByIdService;
    updateDepartmentByIdService: typeof updateDepartmentByIdService;
    deleteDepartmentByIdService: typeof deleteDepartmentByIdService;
};
export {};
//# sourceMappingURL=department.service.d.ts.map