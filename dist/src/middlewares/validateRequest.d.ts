import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
type RequestSchemas = {
    body?: ZodType;
    params?: ZodType;
};
export declare const validateRequest: (schemas: RequestSchemas) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=validateRequest.d.ts.map