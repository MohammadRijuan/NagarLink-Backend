import { Request, Response } from "express";
export declare const quotationControllers: {
    createQuotation: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllQuotations: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getQuotationById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateQuotation: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateQuotationStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteQuotation: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    selectQuotation: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=quotation.controller.d.ts.map