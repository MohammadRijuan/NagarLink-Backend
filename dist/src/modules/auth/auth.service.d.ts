import { IRegisterUserPayload, IVerifyEmailPayload } from "./auth.interface";
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
declare const loginUserService: () => Promise<void>;
declare const getMyProfileService: () => Promise<void>;
declare const refreshTokenService: () => Promise<void>;
declare const forgotPasswordService: () => Promise<void>;
declare const resetPasswordService: () => Promise<void>;
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