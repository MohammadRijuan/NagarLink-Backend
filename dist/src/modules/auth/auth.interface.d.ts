import { Role } from "../../../generated/prisma/enums";
export interface ILoginUserPayload {
    email: string;
    password: string;
}
export interface IRegisterUserPayload {
    name: string;
    email: string;
    password: string;
    phone?: string;
    division?: String;
    district?: String;
    address?: String;
    postalCode?: String;
}
export interface IVerifyEmailPayload {
    email: string;
    otp: string;
}
export interface IRequestUser {
    userId: string;
    name: string;
    email: string;
    role: Role;
}
export interface IGoogleLoginPayload {
    idToken: string;
}
export interface IForgotPasswordPayload {
    email: string;
}
export interface IResetPasswordPayload {
    email: string;
    otp: string;
    newPassword: string;
}
//# sourceMappingURL=auth.interface.d.ts.map