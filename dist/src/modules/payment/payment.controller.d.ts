import { Request, Response } from "express";
export declare const paymentControllers: {
    createPayment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    paymentSuccess: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    paymentFailure: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    paymentCancel: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    paymentIpn: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    approveReviewedPayment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPaymentById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map