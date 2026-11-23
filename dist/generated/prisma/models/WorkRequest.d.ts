import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model WorkRequest
 *
 */
export type WorkRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkRequestPayload>;
export type AggregateWorkRequest = {
    _count: WorkRequestCountAggregateOutputType | null;
    _avg: WorkRequestAvgAggregateOutputType | null;
    _sum: WorkRequestSumAggregateOutputType | null;
    _min: WorkRequestMinAggregateOutputType | null;
    _max: WorkRequestMaxAggregateOutputType | null;
};
export type WorkRequestAvgAggregateOutputType = {
    approvedFee: runtime.Decimal | null;
};
export type WorkRequestSumAggregateOutputType = {
    approvedFee: runtime.Decimal | null;
};
export type WorkRequestMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    division: string | null;
    city: string | null;
    address: string | null;
    postalCode: string | null;
    phone: string | null;
    approvedFee: runtime.Decimal | null;
    status: $Enums.WorkStatus | null;
    rejectionReason: string | null;
    citizenId: string | null;
    departmentId: string | null;
    selectedQuotationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WorkRequestMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    division: string | null;
    city: string | null;
    address: string | null;
    postalCode: string | null;
    phone: string | null;
    approvedFee: runtime.Decimal | null;
    status: $Enums.WorkStatus | null;
    rejectionReason: string | null;
    citizenId: string | null;
    departmentId: string | null;
    selectedQuotationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WorkRequestCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    division: number;
    city: number;
    address: number;
    postalCode: number;
    phone: number;
    approvedFee: number;
    status: number;
    rejectionReason: number;
    citizenId: number;
    departmentId: number;
    selectedQuotationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WorkRequestAvgAggregateInputType = {
    approvedFee?: true;
};
export type WorkRequestSumAggregateInputType = {
    approvedFee?: true;
};
export type WorkRequestMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    division?: true;
    city?: true;
    address?: true;
    postalCode?: true;
    phone?: true;
    approvedFee?: true;
    status?: true;
    rejectionReason?: true;
    citizenId?: true;
    departmentId?: true;
    selectedQuotationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WorkRequestMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    division?: true;
    city?: true;
    address?: true;
    postalCode?: true;
    phone?: true;
    approvedFee?: true;
    status?: true;
    rejectionReason?: true;
    citizenId?: true;
    departmentId?: true;
    selectedQuotationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WorkRequestCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    division?: true;
    city?: true;
    address?: true;
    postalCode?: true;
    phone?: true;
    approvedFee?: true;
    status?: true;
    rejectionReason?: true;
    citizenId?: true;
    departmentId?: true;
    selectedQuotationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WorkRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorkRequest to aggregate.
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkRequests to fetch.
     */
    orderBy?: Prisma.WorkRequestOrderByWithRelationInput | Prisma.WorkRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WorkRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WorkRequests
    **/
    _count?: true | WorkRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: WorkRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: WorkRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WorkRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WorkRequestMaxAggregateInputType;
};
export type GetWorkRequestAggregateType<T extends WorkRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkRequest[P]> : Prisma.GetScalarType<T[P], AggregateWorkRequest[P]>;
};
export type WorkRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkRequestWhereInput;
    orderBy?: Prisma.WorkRequestOrderByWithAggregationInput | Prisma.WorkRequestOrderByWithAggregationInput[];
    by: Prisma.WorkRequestScalarFieldEnum[] | Prisma.WorkRequestScalarFieldEnum;
    having?: Prisma.WorkRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkRequestCountAggregateInputType | true;
    _avg?: WorkRequestAvgAggregateInputType;
    _sum?: WorkRequestSumAggregateInputType;
    _min?: WorkRequestMinAggregateInputType;
    _max?: WorkRequestMaxAggregateInputType;
};
export type WorkRequestGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee: runtime.Decimal | null;
    status: $Enums.WorkStatus;
    rejectionReason: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WorkRequestCountAggregateOutputType | null;
    _avg: WorkRequestAvgAggregateOutputType | null;
    _sum: WorkRequestSumAggregateOutputType | null;
    _min: WorkRequestMinAggregateOutputType | null;
    _max: WorkRequestMaxAggregateOutputType | null;
};
export type GetWorkRequestGroupByPayload<T extends WorkRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkRequestGroupByOutputType[P]>;
}>>;
export type WorkRequestWhereInput = {
    AND?: Prisma.WorkRequestWhereInput | Prisma.WorkRequestWhereInput[];
    OR?: Prisma.WorkRequestWhereInput[];
    NOT?: Prisma.WorkRequestWhereInput | Prisma.WorkRequestWhereInput[];
    id?: Prisma.StringFilter<"WorkRequest"> | string;
    title?: Prisma.StringFilter<"WorkRequest"> | string;
    description?: Prisma.StringFilter<"WorkRequest"> | string;
    division?: Prisma.StringFilter<"WorkRequest"> | string;
    city?: Prisma.StringFilter<"WorkRequest"> | string;
    address?: Prisma.StringFilter<"WorkRequest"> | string;
    postalCode?: Prisma.StringFilter<"WorkRequest"> | string;
    phone?: Prisma.StringFilter<"WorkRequest"> | string;
    approvedFee?: Prisma.DecimalNullableFilter<"WorkRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFilter<"WorkRequest"> | $Enums.WorkStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WorkRequest"> | string | null;
    citizenId?: Prisma.StringFilter<"WorkRequest"> | string;
    departmentId?: Prisma.StringFilter<"WorkRequest"> | string;
    selectedQuotationId?: Prisma.StringNullableFilter<"WorkRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
    citizen?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    selectedQuotation?: Prisma.XOR<Prisma.QuotationNullableScalarRelationFilter, Prisma.QuotationWhereInput> | null;
    quotations?: Prisma.QuotationListRelationFilter;
    staffInvitations?: Prisma.StaffInvitationListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    assignment?: Prisma.XOR<Prisma.AssignmentNullableScalarRelationFilter, Prisma.AssignmentWhereInput> | null;
};
export type WorkRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    approvedFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    selectedQuotationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    citizen?: Prisma.UserOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    selectedQuotation?: Prisma.QuotationOrderByWithRelationInput;
    quotations?: Prisma.QuotationOrderByRelationAggregateInput;
    staffInvitations?: Prisma.StaffInvitationOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    assignment?: Prisma.AssignmentOrderByWithRelationInput;
};
export type WorkRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    selectedQuotationId?: string;
    AND?: Prisma.WorkRequestWhereInput | Prisma.WorkRequestWhereInput[];
    OR?: Prisma.WorkRequestWhereInput[];
    NOT?: Prisma.WorkRequestWhereInput | Prisma.WorkRequestWhereInput[];
    title?: Prisma.StringFilter<"WorkRequest"> | string;
    description?: Prisma.StringFilter<"WorkRequest"> | string;
    division?: Prisma.StringFilter<"WorkRequest"> | string;
    city?: Prisma.StringFilter<"WorkRequest"> | string;
    address?: Prisma.StringFilter<"WorkRequest"> | string;
    postalCode?: Prisma.StringFilter<"WorkRequest"> | string;
    phone?: Prisma.StringFilter<"WorkRequest"> | string;
    approvedFee?: Prisma.DecimalNullableFilter<"WorkRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFilter<"WorkRequest"> | $Enums.WorkStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WorkRequest"> | string | null;
    citizenId?: Prisma.StringFilter<"WorkRequest"> | string;
    departmentId?: Prisma.StringFilter<"WorkRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
    citizen?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    selectedQuotation?: Prisma.XOR<Prisma.QuotationNullableScalarRelationFilter, Prisma.QuotationWhereInput> | null;
    quotations?: Prisma.QuotationListRelationFilter;
    staffInvitations?: Prisma.StaffInvitationListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    assignment?: Prisma.XOR<Prisma.AssignmentNullableScalarRelationFilter, Prisma.AssignmentWhereInput> | null;
}, "id" | "selectedQuotationId">;
export type WorkRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    approvedFee?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    selectedQuotationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WorkRequestCountOrderByAggregateInput;
    _avg?: Prisma.WorkRequestAvgOrderByAggregateInput;
    _max?: Prisma.WorkRequestMaxOrderByAggregateInput;
    _min?: Prisma.WorkRequestMinOrderByAggregateInput;
    _sum?: Prisma.WorkRequestSumOrderByAggregateInput;
};
export type WorkRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkRequestScalarWhereWithAggregatesInput | Prisma.WorkRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkRequestScalarWhereWithAggregatesInput | Prisma.WorkRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    title?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    description?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    division?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    city?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    address?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    postalCode?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    approvedFee?: Prisma.DecimalNullableWithAggregatesFilter<"WorkRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusWithAggregatesFilter<"WorkRequest"> | $Enums.WorkStatus;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"WorkRequest"> | string | null;
    citizenId?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    departmentId?: Prisma.StringWithAggregatesFilter<"WorkRequest"> | string;
    selectedQuotationId?: Prisma.StringNullableWithAggregatesFilter<"WorkRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WorkRequest"> | Date | string;
};
export type WorkRequestCreateInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WorkRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkRequestScalarRelationFilter = {
    is?: Prisma.WorkRequestWhereInput;
    isNot?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestListRelationFilter = {
    every?: Prisma.WorkRequestWhereInput;
    some?: Prisma.WorkRequestWhereInput;
    none?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkRequestNullableScalarRelationFilter = {
    is?: Prisma.WorkRequestWhereInput | null;
    isNot?: Prisma.WorkRequestWhereInput | null;
};
export type WorkRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    approvedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    selectedQuotationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorkRequestAvgOrderByAggregateInput = {
    approvedFee?: Prisma.SortOrder;
};
export type WorkRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    approvedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    selectedQuotationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorkRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    approvedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    selectedQuotationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorkRequestSumOrderByAggregateInput = {
    approvedFee?: Prisma.SortOrder;
};
export type WorkRequestCreateNestedOneWithoutAssignmentInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutAssignmentInput, Prisma.WorkRequestUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutAssignmentInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutAssignmentInput, Prisma.WorkRequestUncheckedCreateWithoutAssignmentInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutAssignmentInput;
    upsert?: Prisma.WorkRequestUpsertWithoutAssignmentInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutAssignmentInput, Prisma.WorkRequestUpdateWithoutAssignmentInput>, Prisma.WorkRequestUncheckedUpdateWithoutAssignmentInput>;
};
export type WorkRequestCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput> | Prisma.WorkRequestCreateWithoutDepartmentInput[] | Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput | Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.WorkRequestCreateManyDepartmentInputEnvelope;
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
};
export type WorkRequestUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput> | Prisma.WorkRequestCreateWithoutDepartmentInput[] | Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput | Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.WorkRequestCreateManyDepartmentInputEnvelope;
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
};
export type WorkRequestUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput> | Prisma.WorkRequestCreateWithoutDepartmentInput[] | Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput | Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.WorkRequestUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.WorkRequestUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.WorkRequestCreateManyDepartmentInputEnvelope;
    set?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    disconnect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    delete?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    update?: Prisma.WorkRequestUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.WorkRequestUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.WorkRequestUpdateManyWithWhereWithoutDepartmentInput | Prisma.WorkRequestUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
};
export type WorkRequestUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput> | Prisma.WorkRequestCreateWithoutDepartmentInput[] | Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput | Prisma.WorkRequestCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.WorkRequestUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.WorkRequestUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.WorkRequestCreateManyDepartmentInputEnvelope;
    set?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    disconnect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    delete?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    update?: Prisma.WorkRequestUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.WorkRequestUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.WorkRequestUpdateManyWithWhereWithoutDepartmentInput | Prisma.WorkRequestUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
};
export type WorkRequestCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutPaymentsInput, Prisma.WorkRequestUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutPaymentsInput, Prisma.WorkRequestUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.WorkRequestUpsertWithoutPaymentsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutPaymentsInput, Prisma.WorkRequestUpdateWithoutPaymentsInput>, Prisma.WorkRequestUncheckedUpdateWithoutPaymentsInput>;
};
export type WorkRequestCreateNestedOneWithoutQuotationsInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutQuotationsInput, Prisma.WorkRequestUncheckedCreateWithoutQuotationsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutQuotationsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestCreateNestedOneWithoutSelectedQuotationInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutSelectedQuotationInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestUncheckedCreateNestedOneWithoutSelectedQuotationInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutSelectedQuotationInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestUpdateOneRequiredWithoutQuotationsNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutQuotationsInput, Prisma.WorkRequestUncheckedCreateWithoutQuotationsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutQuotationsInput;
    upsert?: Prisma.WorkRequestUpsertWithoutQuotationsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutQuotationsInput, Prisma.WorkRequestUpdateWithoutQuotationsInput>, Prisma.WorkRequestUncheckedUpdateWithoutQuotationsInput>;
};
export type WorkRequestUpdateOneWithoutSelectedQuotationNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutSelectedQuotationInput;
    upsert?: Prisma.WorkRequestUpsertWithoutSelectedQuotationInput;
    disconnect?: Prisma.WorkRequestWhereInput | boolean;
    delete?: Prisma.WorkRequestWhereInput | boolean;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutSelectedQuotationInput, Prisma.WorkRequestUpdateWithoutSelectedQuotationInput>, Prisma.WorkRequestUncheckedUpdateWithoutSelectedQuotationInput>;
};
export type WorkRequestUncheckedUpdateOneWithoutSelectedQuotationNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutSelectedQuotationInput;
    upsert?: Prisma.WorkRequestUpsertWithoutSelectedQuotationInput;
    disconnect?: Prisma.WorkRequestWhereInput | boolean;
    delete?: Prisma.WorkRequestWhereInput | boolean;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutSelectedQuotationInput, Prisma.WorkRequestUpdateWithoutSelectedQuotationInput>, Prisma.WorkRequestUncheckedUpdateWithoutSelectedQuotationInput>;
};
export type WorkRequestCreateNestedOneWithoutStaffInvitationsInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedCreateWithoutStaffInvitationsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutStaffInvitationsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
};
export type WorkRequestUpdateOneRequiredWithoutStaffInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedCreateWithoutStaffInvitationsInput>;
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutStaffInvitationsInput;
    upsert?: Prisma.WorkRequestUpsertWithoutStaffInvitationsInput;
    connect?: Prisma.WorkRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkRequestUpdateToOneWithWhereWithoutStaffInvitationsInput, Prisma.WorkRequestUpdateWithoutStaffInvitationsInput>, Prisma.WorkRequestUncheckedUpdateWithoutStaffInvitationsInput>;
};
export type WorkRequestCreateNestedManyWithoutCitizenInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput> | Prisma.WorkRequestCreateWithoutCitizenInput[] | Prisma.WorkRequestUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutCitizenInput | Prisma.WorkRequestCreateOrConnectWithoutCitizenInput[];
    createMany?: Prisma.WorkRequestCreateManyCitizenInputEnvelope;
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
};
export type WorkRequestUncheckedCreateNestedManyWithoutCitizenInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput> | Prisma.WorkRequestCreateWithoutCitizenInput[] | Prisma.WorkRequestUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutCitizenInput | Prisma.WorkRequestCreateOrConnectWithoutCitizenInput[];
    createMany?: Prisma.WorkRequestCreateManyCitizenInputEnvelope;
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
};
export type WorkRequestUpdateManyWithoutCitizenNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput> | Prisma.WorkRequestCreateWithoutCitizenInput[] | Prisma.WorkRequestUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutCitizenInput | Prisma.WorkRequestCreateOrConnectWithoutCitizenInput[];
    upsert?: Prisma.WorkRequestUpsertWithWhereUniqueWithoutCitizenInput | Prisma.WorkRequestUpsertWithWhereUniqueWithoutCitizenInput[];
    createMany?: Prisma.WorkRequestCreateManyCitizenInputEnvelope;
    set?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    disconnect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    delete?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    update?: Prisma.WorkRequestUpdateWithWhereUniqueWithoutCitizenInput | Prisma.WorkRequestUpdateWithWhereUniqueWithoutCitizenInput[];
    updateMany?: Prisma.WorkRequestUpdateManyWithWhereWithoutCitizenInput | Prisma.WorkRequestUpdateManyWithWhereWithoutCitizenInput[];
    deleteMany?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
};
export type WorkRequestUncheckedUpdateManyWithoutCitizenNestedInput = {
    create?: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput> | Prisma.WorkRequestCreateWithoutCitizenInput[] | Prisma.WorkRequestUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.WorkRequestCreateOrConnectWithoutCitizenInput | Prisma.WorkRequestCreateOrConnectWithoutCitizenInput[];
    upsert?: Prisma.WorkRequestUpsertWithWhereUniqueWithoutCitizenInput | Prisma.WorkRequestUpsertWithWhereUniqueWithoutCitizenInput[];
    createMany?: Prisma.WorkRequestCreateManyCitizenInputEnvelope;
    set?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    disconnect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    delete?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    connect?: Prisma.WorkRequestWhereUniqueInput | Prisma.WorkRequestWhereUniqueInput[];
    update?: Prisma.WorkRequestUpdateWithWhereUniqueWithoutCitizenInput | Prisma.WorkRequestUpdateWithWhereUniqueWithoutCitizenInput[];
    updateMany?: Prisma.WorkRequestUpdateManyWithWhereWithoutCitizenInput | Prisma.WorkRequestUpdateManyWithWhereWithoutCitizenInput[];
    deleteMany?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
};
export type EnumWorkStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkStatus;
};
export type WorkRequestCreateWithoutAssignmentInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutAssignmentInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutAssignmentInput, Prisma.WorkRequestUncheckedCreateWithoutAssignmentInput>;
};
export type WorkRequestUpsertWithoutAssignmentInput = {
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutAssignmentInput, Prisma.WorkRequestUncheckedUpdateWithoutAssignmentInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutAssignmentInput, Prisma.WorkRequestUncheckedCreateWithoutAssignmentInput>;
    where?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: Prisma.WorkRequestWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutAssignmentInput, Prisma.WorkRequestUncheckedUpdateWithoutAssignmentInput>;
};
export type WorkRequestUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
};
export type WorkRequestCreateWithoutDepartmentInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput>;
};
export type WorkRequestCreateManyDepartmentInputEnvelope = {
    data: Prisma.WorkRequestCreateManyDepartmentInput | Prisma.WorkRequestCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type WorkRequestUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutDepartmentInput, Prisma.WorkRequestUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutDepartmentInput, Prisma.WorkRequestUncheckedCreateWithoutDepartmentInput>;
};
export type WorkRequestUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutDepartmentInput, Prisma.WorkRequestUncheckedUpdateWithoutDepartmentInput>;
};
export type WorkRequestUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.WorkRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateManyMutationInput, Prisma.WorkRequestUncheckedUpdateManyWithoutDepartmentInput>;
};
export type WorkRequestScalarWhereInput = {
    AND?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
    OR?: Prisma.WorkRequestScalarWhereInput[];
    NOT?: Prisma.WorkRequestScalarWhereInput | Prisma.WorkRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkRequest"> | string;
    title?: Prisma.StringFilter<"WorkRequest"> | string;
    description?: Prisma.StringFilter<"WorkRequest"> | string;
    division?: Prisma.StringFilter<"WorkRequest"> | string;
    city?: Prisma.StringFilter<"WorkRequest"> | string;
    address?: Prisma.StringFilter<"WorkRequest"> | string;
    postalCode?: Prisma.StringFilter<"WorkRequest"> | string;
    phone?: Prisma.StringFilter<"WorkRequest"> | string;
    approvedFee?: Prisma.DecimalNullableFilter<"WorkRequest"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFilter<"WorkRequest"> | $Enums.WorkStatus;
    rejectionReason?: Prisma.StringNullableFilter<"WorkRequest"> | string | null;
    citizenId?: Prisma.StringFilter<"WorkRequest"> | string;
    departmentId?: Prisma.StringFilter<"WorkRequest"> | string;
    selectedQuotationId?: Prisma.StringNullableFilter<"WorkRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WorkRequest"> | Date | string;
};
export type WorkRequestCreateWithoutPaymentsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutPaymentsInput, Prisma.WorkRequestUncheckedCreateWithoutPaymentsInput>;
};
export type WorkRequestUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutPaymentsInput, Prisma.WorkRequestUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutPaymentsInput, Prisma.WorkRequestUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.WorkRequestWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutPaymentsInput, Prisma.WorkRequestUncheckedUpdateWithoutPaymentsInput>;
};
export type WorkRequestUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestCreateWithoutQuotationsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutQuotationsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutQuotationsInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutQuotationsInput, Prisma.WorkRequestUncheckedCreateWithoutQuotationsInput>;
};
export type WorkRequestCreateWithoutSelectedQuotationInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutSelectedQuotationInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutSelectedQuotationInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
};
export type WorkRequestUpsertWithoutQuotationsInput = {
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutQuotationsInput, Prisma.WorkRequestUncheckedUpdateWithoutQuotationsInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutQuotationsInput, Prisma.WorkRequestUncheckedCreateWithoutQuotationsInput>;
    where?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestUpdateToOneWithWhereWithoutQuotationsInput = {
    where?: Prisma.WorkRequestWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutQuotationsInput, Prisma.WorkRequestUncheckedUpdateWithoutQuotationsInput>;
};
export type WorkRequestUpdateWithoutQuotationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutQuotationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUpsertWithoutSelectedQuotationInput = {
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedUpdateWithoutSelectedQuotationInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedCreateWithoutSelectedQuotationInput>;
    where?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestUpdateToOneWithWhereWithoutSelectedQuotationInput = {
    where?: Prisma.WorkRequestWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutSelectedQuotationInput, Prisma.WorkRequestUncheckedUpdateWithoutSelectedQuotationInput>;
};
export type WorkRequestUpdateWithoutSelectedQuotationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutSelectedQuotationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestCreateWithoutStaffInvitationsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizen: Prisma.UserCreateNestedOneWithoutWorkRequestInput;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutStaffInvitationsInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutStaffInvitationsInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedCreateWithoutStaffInvitationsInput>;
};
export type WorkRequestUpsertWithoutStaffInvitationsInput = {
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedUpdateWithoutStaffInvitationsInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedCreateWithoutStaffInvitationsInput>;
    where?: Prisma.WorkRequestWhereInput;
};
export type WorkRequestUpdateToOneWithWhereWithoutStaffInvitationsInput = {
    where?: Prisma.WorkRequestWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutStaffInvitationsInput, Prisma.WorkRequestUncheckedUpdateWithoutStaffInvitationsInput>;
};
export type WorkRequestUpdateWithoutStaffInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutStaffInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestCreateWithoutCitizenInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutWorkRequestsInput;
    selectedQuotation?: Prisma.QuotationCreateNestedOneWithoutSelectedForInput;
    quotations?: Prisma.QuotationCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentCreateNestedOneWithoutRequestInput;
};
export type WorkRequestUncheckedCreateWithoutCitizenInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quotations?: Prisma.QuotationUncheckedCreateNestedManyWithoutRequestInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedCreateNestedManyWithoutRequestInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutRequestInput;
    assignment?: Prisma.AssignmentUncheckedCreateNestedOneWithoutRequestInput;
};
export type WorkRequestCreateOrConnectWithoutCitizenInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput>;
};
export type WorkRequestCreateManyCitizenInputEnvelope = {
    data: Prisma.WorkRequestCreateManyCitizenInput | Prisma.WorkRequestCreateManyCitizenInput[];
    skipDuplicates?: boolean;
};
export type WorkRequestUpsertWithWhereUniqueWithoutCitizenInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkRequestUpdateWithoutCitizenInput, Prisma.WorkRequestUncheckedUpdateWithoutCitizenInput>;
    create: Prisma.XOR<Prisma.WorkRequestCreateWithoutCitizenInput, Prisma.WorkRequestUncheckedCreateWithoutCitizenInput>;
};
export type WorkRequestUpdateWithWhereUniqueWithoutCitizenInput = {
    where: Prisma.WorkRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateWithoutCitizenInput, Prisma.WorkRequestUncheckedUpdateWithoutCitizenInput>;
};
export type WorkRequestUpdateManyWithWhereWithoutCitizenInput = {
    where: Prisma.WorkRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkRequestUpdateManyMutationInput, Prisma.WorkRequestUncheckedUpdateManyWithoutCitizenInput>;
};
export type WorkRequestCreateManyDepartmentInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    citizenId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WorkRequestUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizen?: Prisma.UserUpdateOneRequiredWithoutWorkRequestNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkRequestCreateManyCitizenInput = {
    id?: string;
    title: string;
    description: string;
    division: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    approvedFee?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.WorkStatus;
    rejectionReason?: string | null;
    departmentId: string;
    selectedQuotationId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WorkRequestUpdateWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutWorkRequestsNestedInput;
    selectedQuotation?: Prisma.QuotationUpdateOneWithoutSelectedForNestedInput;
    quotations?: Prisma.QuotationUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quotations?: Prisma.QuotationUncheckedUpdateManyWithoutRequestNestedInput;
    staffInvitations?: Prisma.StaffInvitationUncheckedUpdateManyWithoutRequestNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutRequestNestedInput;
    assignment?: Prisma.AssignmentUncheckedUpdateOneWithoutRequestNestedInput;
};
export type WorkRequestUncheckedUpdateManyWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedFee?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedQuotationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type WorkRequestCountOutputType
 */
export type WorkRequestCountOutputType = {
    quotations: number;
    staffInvitations: number;
    payments: number;
};
export type WorkRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quotations?: boolean | WorkRequestCountOutputTypeCountQuotationsArgs;
    staffInvitations?: boolean | WorkRequestCountOutputTypeCountStaffInvitationsArgs;
    payments?: boolean | WorkRequestCountOutputTypeCountPaymentsArgs;
};
/**
 * WorkRequestCountOutputType without action
 */
export type WorkRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequestCountOutputType
     */
    select?: Prisma.WorkRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * WorkRequestCountOutputType without action
 */
export type WorkRequestCountOutputTypeCountQuotationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuotationWhereInput;
};
/**
 * WorkRequestCountOutputType without action
 */
export type WorkRequestCountOutputTypeCountStaffInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffInvitationWhereInput;
};
/**
 * WorkRequestCountOutputType without action
 */
export type WorkRequestCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type WorkRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    division?: boolean;
    city?: boolean;
    address?: boolean;
    postalCode?: boolean;
    phone?: boolean;
    approvedFee?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    citizenId?: boolean;
    departmentId?: boolean;
    selectedQuotationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
    quotations?: boolean | Prisma.WorkRequest$quotationsArgs<ExtArgs>;
    staffInvitations?: boolean | Prisma.WorkRequest$staffInvitationsArgs<ExtArgs>;
    payments?: boolean | Prisma.WorkRequest$paymentsArgs<ExtArgs>;
    assignment?: boolean | Prisma.WorkRequest$assignmentArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workRequest"]>;
export type WorkRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    division?: boolean;
    city?: boolean;
    address?: boolean;
    postalCode?: boolean;
    phone?: boolean;
    approvedFee?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    citizenId?: boolean;
    departmentId?: boolean;
    selectedQuotationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
}, ExtArgs["result"]["workRequest"]>;
export type WorkRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    division?: boolean;
    city?: boolean;
    address?: boolean;
    postalCode?: boolean;
    phone?: boolean;
    approvedFee?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    citizenId?: boolean;
    departmentId?: boolean;
    selectedQuotationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
}, ExtArgs["result"]["workRequest"]>;
export type WorkRequestSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    division?: boolean;
    city?: boolean;
    address?: boolean;
    postalCode?: boolean;
    phone?: boolean;
    approvedFee?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    citizenId?: boolean;
    departmentId?: boolean;
    selectedQuotationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WorkRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "division" | "city" | "address" | "postalCode" | "phone" | "approvedFee" | "status" | "rejectionReason" | "citizenId" | "departmentId" | "selectedQuotationId" | "createdAt" | "updatedAt", ExtArgs["result"]["workRequest"]>;
export type WorkRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
    quotations?: boolean | Prisma.WorkRequest$quotationsArgs<ExtArgs>;
    staffInvitations?: boolean | Prisma.WorkRequest$staffInvitationsArgs<ExtArgs>;
    payments?: boolean | Prisma.WorkRequest$paymentsArgs<ExtArgs>;
    assignment?: boolean | Prisma.WorkRequest$assignmentArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WorkRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
};
export type WorkRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    selectedQuotation?: boolean | Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>;
};
export type $WorkRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkRequest";
    objects: {
        citizen: Prisma.$UserPayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs>;
        selectedQuotation: Prisma.$QuotationPayload<ExtArgs> | null;
        quotations: Prisma.$QuotationPayload<ExtArgs>[];
        staffInvitations: Prisma.$StaffInvitationPayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        assignment: Prisma.$AssignmentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        division: string;
        city: string;
        address: string;
        postalCode: string;
        phone: string;
        approvedFee: runtime.Decimal | null;
        status: $Enums.WorkStatus;
        rejectionReason: string | null;
        citizenId: string;
        departmentId: string;
        selectedQuotationId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["workRequest"]>;
    composites: {};
};
export type WorkRequestGetPayload<S extends boolean | null | undefined | WorkRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload, S>;
export type WorkRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkRequestCountAggregateInputType | true;
};
export interface WorkRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkRequest'];
        meta: {
            name: 'WorkRequest';
        };
    };
    /**
     * Find zero or one WorkRequest that matches the filter.
     * @param {WorkRequestFindUniqueArgs} args - Arguments to find a WorkRequest
     * @example
     * // Get one WorkRequest
     * const workRequest = await prisma.workRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WorkRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkRequestFindUniqueOrThrowArgs} args - Arguments to find a WorkRequest
     * @example
     * // Get one WorkRequest
     * const workRequest = await prisma.workRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorkRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestFindFirstArgs} args - Arguments to find a WorkRequest
     * @example
     * // Get one WorkRequest
     * const workRequest = await prisma.workRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorkRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestFindFirstOrThrowArgs} args - Arguments to find a WorkRequest
     * @example
     * // Get one WorkRequest
     * const workRequest = await prisma.workRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WorkRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkRequests
     * const workRequests = await prisma.workRequest.findMany()
     *
     * // Get first 10 WorkRequests
     * const workRequests = await prisma.workRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const workRequestWithIdOnly = await prisma.workRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WorkRequestFindManyArgs>(args?: Prisma.SelectSubset<T, WorkRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WorkRequest.
     * @param {WorkRequestCreateArgs} args - Arguments to create a WorkRequest.
     * @example
     * // Create one WorkRequest
     * const WorkRequest = await prisma.workRequest.create({
     *   data: {
     *     // ... data to create a WorkRequest
     *   }
     * })
     *
     */
    create<T extends WorkRequestCreateArgs>(args: Prisma.SelectSubset<T, WorkRequestCreateArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WorkRequests.
     * @param {WorkRequestCreateManyArgs} args - Arguments to create many WorkRequests.
     * @example
     * // Create many WorkRequests
     * const workRequest = await prisma.workRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WorkRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WorkRequests and returns the data saved in the database.
     * @param {WorkRequestCreateManyAndReturnArgs} args - Arguments to create many WorkRequests.
     * @example
     * // Create many WorkRequests
     * const workRequest = await prisma.workRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WorkRequests and only return the `id`
     * const workRequestWithIdOnly = await prisma.workRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WorkRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WorkRequest.
     * @param {WorkRequestDeleteArgs} args - Arguments to delete one WorkRequest.
     * @example
     * // Delete one WorkRequest
     * const WorkRequest = await prisma.workRequest.delete({
     *   where: {
     *     // ... filter to delete one WorkRequest
     *   }
     * })
     *
     */
    delete<T extends WorkRequestDeleteArgs>(args: Prisma.SelectSubset<T, WorkRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WorkRequest.
     * @param {WorkRequestUpdateArgs} args - Arguments to update one WorkRequest.
     * @example
     * // Update one WorkRequest
     * const workRequest = await prisma.workRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WorkRequestUpdateArgs>(args: Prisma.SelectSubset<T, WorkRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WorkRequests.
     * @param {WorkRequestDeleteManyArgs} args - Arguments to filter WorkRequests to delete.
     * @example
     * // Delete a few WorkRequests
     * const { count } = await prisma.workRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WorkRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorkRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkRequests
     * const workRequest = await prisma.workRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WorkRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorkRequests and returns the data updated in the database.
     * @param {WorkRequestUpdateManyAndReturnArgs} args - Arguments to update many WorkRequests.
     * @example
     * // Update many WorkRequests
     * const workRequest = await prisma.workRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WorkRequests and only return the `id`
     * const workRequestWithIdOnly = await prisma.workRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends WorkRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WorkRequest.
     * @param {WorkRequestUpsertArgs} args - Arguments to update or create a WorkRequest.
     * @example
     * // Update or create a WorkRequest
     * const workRequest = await prisma.workRequest.upsert({
     *   create: {
     *     // ... data to create a WorkRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkRequest we want to update
     *   }
     * })
     */
    upsert<T extends WorkRequestUpsertArgs>(args: Prisma.SelectSubset<T, WorkRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WorkRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestCountArgs} args - Arguments to filter WorkRequests to count.
     * @example
     * // Count the number of WorkRequests
     * const count = await prisma.workRequest.count({
     *   where: {
     *     // ... the filter for the WorkRequests we want to count
     *   }
     * })
    **/
    count<T extends WorkRequestCountArgs>(args?: Prisma.Subset<T, WorkRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WorkRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkRequestAggregateArgs>(args: Prisma.Subset<T, WorkRequestAggregateArgs>): Prisma.PrismaPromise<GetWorkRequestAggregateType<T>>;
    /**
     * Group by WorkRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends WorkRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WorkRequest model
     */
    readonly fields: WorkRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WorkRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WorkRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citizen<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selectedQuotation<T extends Prisma.WorkRequest$selectedQuotationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequest$selectedQuotationArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quotations<T extends Prisma.WorkRequest$quotationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequest$quotationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    staffInvitations<T extends Prisma.WorkRequest$staffInvitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequest$staffInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.WorkRequest$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequest$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignment<T extends Prisma.WorkRequest$assignmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequest$assignmentArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the WorkRequest model
 */
export interface WorkRequestFieldRefs {
    readonly id: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly title: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly description: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly division: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly city: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly address: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly postalCode: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly phone: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly approvedFee: Prisma.FieldRef<"WorkRequest", 'Decimal'>;
    readonly status: Prisma.FieldRef<"WorkRequest", 'WorkStatus'>;
    readonly rejectionReason: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly citizenId: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly departmentId: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly selectedQuotationId: Prisma.FieldRef<"WorkRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WorkRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WorkRequest", 'DateTime'>;
}
/**
 * WorkRequest findUnique
 */
export type WorkRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter, which WorkRequest to fetch.
     */
    where: Prisma.WorkRequestWhereUniqueInput;
};
/**
 * WorkRequest findUniqueOrThrow
 */
export type WorkRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter, which WorkRequest to fetch.
     */
    where: Prisma.WorkRequestWhereUniqueInput;
};
/**
 * WorkRequest findFirst
 */
export type WorkRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter, which WorkRequest to fetch.
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkRequests to fetch.
     */
    orderBy?: Prisma.WorkRequestOrderByWithRelationInput | Prisma.WorkRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorkRequests.
     */
    cursor?: Prisma.WorkRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkRequests.
     */
    distinct?: Prisma.WorkRequestScalarFieldEnum | Prisma.WorkRequestScalarFieldEnum[];
};
/**
 * WorkRequest findFirstOrThrow
 */
export type WorkRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter, which WorkRequest to fetch.
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkRequests to fetch.
     */
    orderBy?: Prisma.WorkRequestOrderByWithRelationInput | Prisma.WorkRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorkRequests.
     */
    cursor?: Prisma.WorkRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkRequests.
     */
    distinct?: Prisma.WorkRequestScalarFieldEnum | Prisma.WorkRequestScalarFieldEnum[];
};
/**
 * WorkRequest findMany
 */
export type WorkRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter, which WorkRequests to fetch.
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkRequests to fetch.
     */
    orderBy?: Prisma.WorkRequestOrderByWithRelationInput | Prisma.WorkRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WorkRequests.
     */
    cursor?: Prisma.WorkRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkRequests.
     */
    distinct?: Prisma.WorkRequestScalarFieldEnum | Prisma.WorkRequestScalarFieldEnum[];
};
/**
 * WorkRequest create
 */
export type WorkRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a WorkRequest.
     */
    data: Prisma.XOR<Prisma.WorkRequestCreateInput, Prisma.WorkRequestUncheckedCreateInput>;
};
/**
 * WorkRequest createMany
 */
export type WorkRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkRequests.
     */
    data: Prisma.WorkRequestCreateManyInput | Prisma.WorkRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WorkRequest createManyAndReturn
 */
export type WorkRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many WorkRequests.
     */
    data: Prisma.WorkRequestCreateManyInput | Prisma.WorkRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WorkRequest update
 */
export type WorkRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a WorkRequest.
     */
    data: Prisma.XOR<Prisma.WorkRequestUpdateInput, Prisma.WorkRequestUncheckedUpdateInput>;
    /**
     * Choose, which WorkRequest to update.
     */
    where: Prisma.WorkRequestWhereUniqueInput;
};
/**
 * WorkRequest updateMany
 */
export type WorkRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkRequests.
     */
    data: Prisma.XOR<Prisma.WorkRequestUpdateManyMutationInput, Prisma.WorkRequestUncheckedUpdateManyInput>;
    /**
     * Filter which WorkRequests to update
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * Limit how many WorkRequests to update.
     */
    limit?: number;
};
/**
 * WorkRequest updateManyAndReturn
 */
export type WorkRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * The data used to update WorkRequests.
     */
    data: Prisma.XOR<Prisma.WorkRequestUpdateManyMutationInput, Prisma.WorkRequestUncheckedUpdateManyInput>;
    /**
     * Filter which WorkRequests to update
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * Limit how many WorkRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WorkRequest upsert
 */
export type WorkRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the WorkRequest to update in case it exists.
     */
    where: Prisma.WorkRequestWhereUniqueInput;
    /**
     * In case the WorkRequest found by the `where` argument doesn't exist, create a new WorkRequest with this data.
     */
    create: Prisma.XOR<Prisma.WorkRequestCreateInput, Prisma.WorkRequestUncheckedCreateInput>;
    /**
     * In case the WorkRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WorkRequestUpdateInput, Prisma.WorkRequestUncheckedUpdateInput>;
};
/**
 * WorkRequest delete
 */
export type WorkRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
    /**
     * Filter which WorkRequest to delete.
     */
    where: Prisma.WorkRequestWhereUniqueInput;
};
/**
 * WorkRequest deleteMany
 */
export type WorkRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorkRequests to delete
     */
    where?: Prisma.WorkRequestWhereInput;
    /**
     * Limit how many WorkRequests to delete.
     */
    limit?: number;
};
/**
 * WorkRequest.selectedQuotation
 */
export type WorkRequest$selectedQuotationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: Prisma.QuotationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quotation
     */
    omit?: Prisma.QuotationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuotationInclude<ExtArgs> | null;
    where?: Prisma.QuotationWhereInput;
};
/**
 * WorkRequest.quotations
 */
export type WorkRequest$quotationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: Prisma.QuotationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quotation
     */
    omit?: Prisma.QuotationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuotationInclude<ExtArgs> | null;
    where?: Prisma.QuotationWhereInput;
    orderBy?: Prisma.QuotationOrderByWithRelationInput | Prisma.QuotationOrderByWithRelationInput[];
    cursor?: Prisma.QuotationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuotationScalarFieldEnum | Prisma.QuotationScalarFieldEnum[];
};
/**
 * WorkRequest.staffInvitations
 */
export type WorkRequest$staffInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffInvitation
     */
    select?: Prisma.StaffInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffInvitation
     */
    omit?: Prisma.StaffInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffInvitationInclude<ExtArgs> | null;
    where?: Prisma.StaffInvitationWhereInput;
    orderBy?: Prisma.StaffInvitationOrderByWithRelationInput | Prisma.StaffInvitationOrderByWithRelationInput[];
    cursor?: Prisma.StaffInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffInvitationScalarFieldEnum | Prisma.StaffInvitationScalarFieldEnum[];
};
/**
 * WorkRequest.payments
 */
export type WorkRequest$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * WorkRequest.assignment
 */
export type WorkRequest$assignmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Assignment
     */
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
};
/**
 * WorkRequest without action
 */
export type WorkRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkRequest
     */
    select?: Prisma.WorkRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkRequest
     */
    omit?: Prisma.WorkRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=WorkRequest.d.ts.map