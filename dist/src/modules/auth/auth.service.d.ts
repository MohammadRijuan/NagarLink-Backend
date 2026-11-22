import { IForgotPasswordPayload, ILoginUserPayload, IRegisterUserPayload, IRequestUser, IResetPasswordPayload, IVerifyEmailPayload } from "./auth.interface";
import { Role } from "../../../generated/prisma/enums";
declare const registerUserService: (payload: IRegisterUserPayload) => Promise<void>;
declare const verifyUserEmailService: (payload: IVerifyEmailPayload) => Promise<{
    user: {
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
        staffLocation: {
            id: string;
            division: string;
            address: string;
            staffId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    };
    accessToken: string;
    refreshToken: string;
}>;
declare const loginUserService: (payload: ILoginUserPayload) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
declare const getMyProfileService: (user: IRequestUser) => Promise<{
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
declare const refreshTokenService: (token: string) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
declare const forgotPasswordService: (payload: IForgotPasswordPayload) => Promise<void>;
declare const resetPasswordService: (payload: IResetPasswordPayload) => Promise<void>;
declare const googleLoginService: () => Promise<void>;
export declare const authServices: {
    registerUserService: typeof registerUserService;
    loginUserService: typeof loginUserService;
    getMyProfileService: typeof getMyProfileService;
    googleLoginService: typeof googleLoginService;
    refreshTokenService: typeof refreshTokenService;
    resetPasswordService: typeof resetPasswordService;
    forgotPasswordService: typeof forgotPasswordService;
    verifyUserEmailService: typeof verifyUserEmailService;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map