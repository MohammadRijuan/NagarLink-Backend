import { Role } from "../../../generated/prisma/enums";
import { IQuery } from "../../interfaces";
declare const getAllStaffService: (query: IQuery) => Promise<{
    data: ({
        staffCategories: ({
            category: {
                id: string;
                name: string;
                departmentId: string;
            };
        } & {
            id: string;
            staffId: string;
            categoryId: string;
        })[];
    } & {
        id: string;
        name: string;
        email: string;
        needPasswordChange: boolean;
        emailVerified: boolean;
        googleId: string | null;
        authProvider: import("../../../generated/prisma/enums").AuthProvider;
        phone: string | null;
        role: Role;
        division: string | null;
        district: string | null;
        address: string | null;
        postalCode: string | null;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    })[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
declare const getStaffByIdService: (id: string) => Promise<{
    staffCategories: ({
        category: {
            department: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            name: string;
            departmentId: string;
        };
    } & {
        id: string;
        staffId: string;
        categoryId: string;
    })[];
} & {
    id: string;
    name: string;
    email: string;
    needPasswordChange: boolean;
    emailVerified: boolean;
    googleId: string | null;
    authProvider: import("../../../generated/prisma/enums").AuthProvider;
    phone: string | null;
    role: Role;
    division: string | null;
    district: string | null;
    address: string | null;
    postalCode: string | null;
    isActive: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deleteStaffService: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    needPasswordChange: boolean;
    emailVerified: boolean;
    googleId: string | null;
    authProvider: import("../../../generated/prisma/enums").AuthProvider;
    phone: string | null;
    role: Role;
    division: string | null;
    district: string | null;
    address: string | null;
    postalCode: string | null;
    isActive: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const staffServices: {
    getAllStaffService: typeof getAllStaffService;
    getStaffByIdService: typeof getStaffByIdService;
    deleteStaffService: typeof deleteStaffService;
};
export {};
//# sourceMappingURL=staffManagement.service.d.ts.map