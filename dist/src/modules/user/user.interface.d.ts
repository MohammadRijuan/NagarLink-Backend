import { Role } from "../../../generated/prisma/enums";
export type IUpdateUser = {
    name?: string;
    phone?: string;
    profilePhoto?: string;
    role?: Role;
    isActive?: boolean;
    needPasswordChange?: boolean;
};
//# sourceMappingURL=user.interface.d.ts.map