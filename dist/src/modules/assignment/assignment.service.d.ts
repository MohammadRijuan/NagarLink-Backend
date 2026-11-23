import { RequestUser } from "../../middlewares/checkAuth";
declare const getAssignmentContactsService: (requestId: string, user: RequestUser) => Promise<{
    assignmentId: string;
    requestId: string;
    requestTitle: string;
    citizen: {
        name: string;
        email: string;
        phone: string;
    };
    staff: {
        name: string;
        email: string;
        phone: string | null;
    };
}>;
export declare const assignmentServices: {
    getAssignmentContactsService: typeof getAssignmentContactsService;
};
export {};
//# sourceMappingURL=assignment.service.d.ts.map