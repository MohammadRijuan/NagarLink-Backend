import { QuotationStatus } from "../../../generated/prisma/enums";
export interface ICreateQuotation {
    proposedFee: number;
    requestId: string;
}
export interface IUpdateQuotation {
    proposedFee?: number;
    status?: QuotationStatus;
}
export default interface ISelectQuotationPayload {
    quotationId: string;
}
//# sourceMappingURL=quotation.interface.d.ts.map