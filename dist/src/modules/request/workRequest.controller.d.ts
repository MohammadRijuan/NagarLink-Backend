import { Request, Response } from "express";
export declare const workRequestControllers: {
    createWorkRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllWorkRequests: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getWorkRequestById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateWorkRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateWorkRequestStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteWorkRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=workRequest.controller.d.ts.map