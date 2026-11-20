import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Quotation
 *
 */
export type QuotationModel = runtime.Types.Result.DefaultSelection<Prisma.$QuotationPayload>;
export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null;
    _avg: QuotationAvgAggregateOutputType | null;
    _sum: QuotationSumAggregateOutputType | null;
    _min: QuotationMinAggregateOutputType | null;
    _max: QuotationMaxAggregateOutputType | null;
};
export type QuotationAvgAggregateOutputType = {
    proposedFee: runtime.Decimal | null;
};
export type QuotationSumAggregateOutputType = {
    proposedFee: runtime.Decimal | null;
};
export type QuotationMinAggregateOutputType = {
    id: string | null;
    proposedFee: runtime.Decimal | null;
    status: $Enums.QuotationStatus | null;
    requestId: string | null;
    staffId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuotationMaxAggregateOutputType = {
    id: string | null;
    proposedFee: runtime.Decimal | null;
    status: $Enums.QuotationStatus | null;
    requestId: string | null;
    staffId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuotationCountAggregateOutputType = {
    id: number;
    proposedFee: number;
    status: number;
    requestId: number;
    staffId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QuotationAvgAggregateInputType = {
    proposedFee?: true;
};
export type QuotationSumAggregateInputType = {
    proposedFee?: true;
};
export type QuotationMinAggregateInputType = {
    id?: true;
    proposedFee?: true;
    status?: true;
    requestId?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuotationMaxAggregateInputType = {
    id?: true;
    proposedFee?: true;
    status?: true;
    requestId?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuotationCountAggregateInputType = {
    id?: true;
    proposedFee?: true;
    status?: true;
    requestId?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QuotationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Prisma.QuotationOrderByWithRelationInput | Prisma.QuotationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QuotationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType;
};
export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
    [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuotation[P]> : Prisma.GetScalarType<T[P], AggregateQuotation[P]>;
};
export type QuotationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuotationWhereInput;
    orderBy?: Prisma.QuotationOrderByWithAggregationInput | Prisma.QuotationOrderByWithAggregationInput[];
    by: Prisma.QuotationScalarFieldEnum[] | Prisma.QuotationScalarFieldEnum;
    having?: Prisma.QuotationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuotationCountAggregateInputType | true;
    _avg?: QuotationAvgAggregateInputType;
    _sum?: QuotationSumAggregateInputType;
    _min?: QuotationMinAggregateInputType;
    _max?: QuotationMaxAggregateInputType;
};
export type QuotationGroupByOutputType = {
    id: string;
    proposedFee: runtime.Decimal;
    status: $Enums.QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: QuotationCountAggregateOutputType | null;
    _avg: QuotationAvgAggregateOutputType | null;
    _sum: QuotationSumAggregateOutputType | null;
    _min: QuotationMinAggregateOutputType | null;
    _max: QuotationMaxAggregateOutputType | null;
};
export type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuotationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuotationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuotationGroupByOutputType[P]>;
}>>;
export type QuotationWhereInput = {
    AND?: Prisma.QuotationWhereInput | Prisma.QuotationWhereInput[];
    OR?: Prisma.QuotationWhereInput[];
    NOT?: Prisma.QuotationWhereInput | Prisma.QuotationWhereInput[];
    id?: Prisma.StringFilter<"Quotation"> | string;
    proposedFee?: Prisma.DecimalFilter<"Quotation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus;
    requestId?: Prisma.StringFilter<"Quotation"> | string;
    staffId?: Prisma.StringFilter<"Quotation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
    Request?: Prisma.XOR<Prisma.WorkRequestScalarRelationFilter, Prisma.WorkRequestWhereInput>;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    selectedFor?: Prisma.XOR<Prisma.WorkRequestNullableScalarRelationFilter, Prisma.WorkRequestWhereInput> | null;
};
export type QuotationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proposedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Request?: Prisma.WorkRequestOrderByWithRelationInput;
    staff?: Prisma.UserOrderByWithRelationInput;
    selectedFor?: Prisma.WorkRequestOrderByWithRelationInput;
};
export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuotationWhereInput | Prisma.QuotationWhereInput[];
    OR?: Prisma.QuotationWhereInput[];
    NOT?: Prisma.QuotationWhereInput | Prisma.QuotationWhereInput[];
    proposedFee?: Prisma.DecimalFilter<"Quotation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus;
    requestId?: Prisma.StringFilter<"Quotation"> | string;
    staffId?: Prisma.StringFilter<"Quotation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
    Request?: Prisma.XOR<Prisma.WorkRequestScalarRelationFilter, Prisma.WorkRequestWhereInput>;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    selectedFor?: Prisma.XOR<Prisma.WorkRequestNullableScalarRelationFilter, Prisma.WorkRequestWhereInput> | null;
}, "id">;
export type QuotationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proposedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QuotationCountOrderByAggregateInput;
    _avg?: Prisma.QuotationAvgOrderByAggregateInput;
    _max?: Prisma.QuotationMaxOrderByAggregateInput;
    _min?: Prisma.QuotationMinOrderByAggregateInput;
    _sum?: Prisma.QuotationSumOrderByAggregateInput;
};
export type QuotationScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuotationScalarWhereWithAggregatesInput | Prisma.QuotationScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuotationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuotationScalarWhereWithAggregatesInput | Prisma.QuotationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Quotation"> | string;
    proposedFee?: Prisma.DecimalWithAggregatesFilter<"Quotation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusWithAggregatesFilter<"Quotation"> | $Enums.QuotationStatus;
    requestId?: Prisma.StringWithAggregatesFilter<"Quotation"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"Quotation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Quotation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Quotation"> | Date | string;
};
export type QuotationCreateInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Request: Prisma.WorkRequestCreateNestedOneWithoutQuotationsInput;
    staff: Prisma.UserCreateNestedOneWithoutQuotationsInput;
    selectedFor?: Prisma.WorkRequestCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationUncheckedCreateInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Request?: Prisma.WorkRequestUpdateOneRequiredWithoutQuotationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutQuotationsNestedInput;
    selectedFor?: Prisma.WorkRequestUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationCreateManyInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuotationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuotationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuotationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuotationAvgOrderByAggregateInput = {
    proposedFee?: Prisma.SortOrder;
};
export type QuotationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuotationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposedFee?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuotationSumOrderByAggregateInput = {
    proposedFee?: Prisma.SortOrder;
};
export type QuotationListRelationFilter = {
    every?: Prisma.QuotationWhereInput;
    some?: Prisma.QuotationWhereInput;
    none?: Prisma.QuotationWhereInput;
};
export type QuotationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuotationNullableScalarRelationFilter = {
    is?: Prisma.QuotationWhereInput | null;
    isNot?: Prisma.QuotationWhereInput | null;
};
export type EnumQuotationStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuotationStatus;
};
export type QuotationCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput> | Prisma.QuotationCreateWithoutStaffInput[] | Prisma.QuotationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutStaffInput | Prisma.QuotationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.QuotationCreateManyStaffInputEnvelope;
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
};
export type QuotationUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput> | Prisma.QuotationCreateWithoutStaffInput[] | Prisma.QuotationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutStaffInput | Prisma.QuotationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.QuotationCreateManyStaffInputEnvelope;
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
};
export type QuotationUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput> | Prisma.QuotationCreateWithoutStaffInput[] | Prisma.QuotationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutStaffInput | Prisma.QuotationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.QuotationUpsertWithWhereUniqueWithoutStaffInput | Prisma.QuotationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.QuotationCreateManyStaffInputEnvelope;
    set?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    disconnect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    delete?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    update?: Prisma.QuotationUpdateWithWhereUniqueWithoutStaffInput | Prisma.QuotationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.QuotationUpdateManyWithWhereWithoutStaffInput | Prisma.QuotationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
};
export type QuotationUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput> | Prisma.QuotationCreateWithoutStaffInput[] | Prisma.QuotationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutStaffInput | Prisma.QuotationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.QuotationUpsertWithWhereUniqueWithoutStaffInput | Prisma.QuotationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.QuotationCreateManyStaffInputEnvelope;
    set?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    disconnect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    delete?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    update?: Prisma.QuotationUpdateWithWhereUniqueWithoutStaffInput | Prisma.QuotationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.QuotationUpdateManyWithWhereWithoutStaffInput | Prisma.QuotationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
};
export type QuotationCreateNestedOneWithoutSelectedForInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutSelectedForInput, Prisma.QuotationUncheckedCreateWithoutSelectedForInput>;
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutSelectedForInput;
    connect?: Prisma.QuotationWhereUniqueInput;
};
export type QuotationCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput> | Prisma.QuotationCreateWithoutRequestInput[] | Prisma.QuotationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutRequestInput | Prisma.QuotationCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.QuotationCreateManyRequestInputEnvelope;
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
};
export type QuotationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput> | Prisma.QuotationCreateWithoutRequestInput[] | Prisma.QuotationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutRequestInput | Prisma.QuotationCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.QuotationCreateManyRequestInputEnvelope;
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
};
export type QuotationUpdateOneWithoutSelectedForNestedInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutSelectedForInput, Prisma.QuotationUncheckedCreateWithoutSelectedForInput>;
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutSelectedForInput;
    upsert?: Prisma.QuotationUpsertWithoutSelectedForInput;
    disconnect?: Prisma.QuotationWhereInput | boolean;
    delete?: Prisma.QuotationWhereInput | boolean;
    connect?: Prisma.QuotationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuotationUpdateToOneWithWhereWithoutSelectedForInput, Prisma.QuotationUpdateWithoutSelectedForInput>, Prisma.QuotationUncheckedUpdateWithoutSelectedForInput>;
};
export type QuotationUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput> | Prisma.QuotationCreateWithoutRequestInput[] | Prisma.QuotationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutRequestInput | Prisma.QuotationCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.QuotationUpsertWithWhereUniqueWithoutRequestInput | Prisma.QuotationUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.QuotationCreateManyRequestInputEnvelope;
    set?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    disconnect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    delete?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    update?: Prisma.QuotationUpdateWithWhereUniqueWithoutRequestInput | Prisma.QuotationUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.QuotationUpdateManyWithWhereWithoutRequestInput | Prisma.QuotationUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
};
export type QuotationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput> | Prisma.QuotationCreateWithoutRequestInput[] | Prisma.QuotationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.QuotationCreateOrConnectWithoutRequestInput | Prisma.QuotationCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.QuotationUpsertWithWhereUniqueWithoutRequestInput | Prisma.QuotationUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.QuotationCreateManyRequestInputEnvelope;
    set?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    disconnect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    delete?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    connect?: Prisma.QuotationWhereUniqueInput | Prisma.QuotationWhereUniqueInput[];
    update?: Prisma.QuotationUpdateWithWhereUniqueWithoutRequestInput | Prisma.QuotationUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.QuotationUpdateManyWithWhereWithoutRequestInput | Prisma.QuotationUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
};
export type QuotationCreateWithoutStaffInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Request: Prisma.WorkRequestCreateNestedOneWithoutQuotationsInput;
    selectedFor?: Prisma.WorkRequestCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationUncheckedCreateWithoutStaffInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    requestId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationCreateOrConnectWithoutStaffInput = {
    where: Prisma.QuotationWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput>;
};
export type QuotationCreateManyStaffInputEnvelope = {
    data: Prisma.QuotationCreateManyStaffInput | Prisma.QuotationCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type QuotationUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.QuotationWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuotationUpdateWithoutStaffInput, Prisma.QuotationUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutStaffInput, Prisma.QuotationUncheckedCreateWithoutStaffInput>;
};
export type QuotationUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.QuotationWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuotationUpdateWithoutStaffInput, Prisma.QuotationUncheckedUpdateWithoutStaffInput>;
};
export type QuotationUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.QuotationScalarWhereInput;
    data: Prisma.XOR<Prisma.QuotationUpdateManyMutationInput, Prisma.QuotationUncheckedUpdateManyWithoutStaffInput>;
};
export type QuotationScalarWhereInput = {
    AND?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
    OR?: Prisma.QuotationScalarWhereInput[];
    NOT?: Prisma.QuotationScalarWhereInput | Prisma.QuotationScalarWhereInput[];
    id?: Prisma.StringFilter<"Quotation"> | string;
    proposedFee?: Prisma.DecimalFilter<"Quotation"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus;
    requestId?: Prisma.StringFilter<"Quotation"> | string;
    staffId?: Prisma.StringFilter<"Quotation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Quotation"> | Date | string;
};
export type QuotationCreateWithoutSelectedForInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Request: Prisma.WorkRequestCreateNestedOneWithoutQuotationsInput;
    staff: Prisma.UserCreateNestedOneWithoutQuotationsInput;
};
export type QuotationUncheckedCreateWithoutSelectedForInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    requestId: string;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuotationCreateOrConnectWithoutSelectedForInput = {
    where: Prisma.QuotationWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutSelectedForInput, Prisma.QuotationUncheckedCreateWithoutSelectedForInput>;
};
export type QuotationCreateWithoutRequestInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff: Prisma.UserCreateNestedOneWithoutQuotationsInput;
    selectedFor?: Prisma.WorkRequestCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationUncheckedCreateWithoutRequestInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedCreateNestedOneWithoutSelectedQuotationInput;
};
export type QuotationCreateOrConnectWithoutRequestInput = {
    where: Prisma.QuotationWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput>;
};
export type QuotationCreateManyRequestInputEnvelope = {
    data: Prisma.QuotationCreateManyRequestInput | Prisma.QuotationCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type QuotationUpsertWithoutSelectedForInput = {
    update: Prisma.XOR<Prisma.QuotationUpdateWithoutSelectedForInput, Prisma.QuotationUncheckedUpdateWithoutSelectedForInput>;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutSelectedForInput, Prisma.QuotationUncheckedCreateWithoutSelectedForInput>;
    where?: Prisma.QuotationWhereInput;
};
export type QuotationUpdateToOneWithWhereWithoutSelectedForInput = {
    where?: Prisma.QuotationWhereInput;
    data: Prisma.XOR<Prisma.QuotationUpdateWithoutSelectedForInput, Prisma.QuotationUncheckedUpdateWithoutSelectedForInput>;
};
export type QuotationUpdateWithoutSelectedForInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Request?: Prisma.WorkRequestUpdateOneRequiredWithoutQuotationsNestedInput;
    staff?: Prisma.UserUpdateOneRequiredWithoutQuotationsNestedInput;
};
export type QuotationUncheckedUpdateWithoutSelectedForInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuotationUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.QuotationWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuotationUpdateWithoutRequestInput, Prisma.QuotationUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.QuotationCreateWithoutRequestInput, Prisma.QuotationUncheckedCreateWithoutRequestInput>;
};
export type QuotationUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.QuotationWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuotationUpdateWithoutRequestInput, Prisma.QuotationUncheckedUpdateWithoutRequestInput>;
};
export type QuotationUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.QuotationScalarWhereInput;
    data: Prisma.XOR<Prisma.QuotationUpdateManyMutationInput, Prisma.QuotationUncheckedUpdateManyWithoutRequestInput>;
};
export type QuotationCreateManyStaffInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    requestId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuotationUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Request?: Prisma.WorkRequestUpdateOneRequiredWithoutQuotationsNestedInput;
    selectedFor?: Prisma.WorkRequestUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationUncheckedUpdateManyWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuotationCreateManyRequestInput = {
    id?: string;
    proposedFee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.QuotationStatus;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuotationUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.UserUpdateOneRequiredWithoutQuotationsNestedInput;
    selectedFor?: Prisma.WorkRequestUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selectedFor?: Prisma.WorkRequestUncheckedUpdateOneWithoutSelectedQuotationNestedInput;
};
export type QuotationUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedFee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuotationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposedFee?: boolean;
    status?: boolean;
    requestId?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    selectedFor?: boolean | Prisma.Quotation$selectedForArgs<ExtArgs>;
}, ExtArgs["result"]["quotation"]>;
export type QuotationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposedFee?: boolean;
    status?: boolean;
    requestId?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quotation"]>;
export type QuotationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposedFee?: boolean;
    status?: boolean;
    requestId?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quotation"]>;
export type QuotationSelectScalar = {
    id?: boolean;
    proposedFee?: boolean;
    status?: boolean;
    requestId?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QuotationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proposedFee" | "status" | "requestId" | "staffId" | "createdAt" | "updatedAt", ExtArgs["result"]["quotation"]>;
export type QuotationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    selectedFor?: boolean | Prisma.Quotation$selectedForArgs<ExtArgs>;
};
export type QuotationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type QuotationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Request?: boolean | Prisma.WorkRequestDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $QuotationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quotation";
    objects: {
        Request: Prisma.$WorkRequestPayload<ExtArgs>;
        staff: Prisma.$UserPayload<ExtArgs>;
        selectedFor: Prisma.$WorkRequestPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proposedFee: runtime.Decimal;
        status: $Enums.QuotationStatus;
        requestId: string;
        staffId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["quotation"]>;
    composites: {};
};
export type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuotationPayload, S>;
export type QuotationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuotationCountAggregateInputType | true;
};
export interface QuotationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quotation'];
        meta: {
            name: 'Quotation';
        };
    };
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: Prisma.SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: Prisma.SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     *
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuotationFindManyArgs>(args?: Prisma.SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     *
     */
    create<T extends QuotationCreateArgs>(args: Prisma.SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuotationCreateManyArgs>(args?: Prisma.SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Quotations and returns the data saved in the database.
     * @param {QuotationCreateManyAndReturnArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends QuotationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     *
     */
    delete<T extends QuotationDeleteArgs>(args: Prisma.SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuotationUpdateArgs>(args: Prisma.SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: Prisma.SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Quotations and returns the data updated in the database.
     * @param {QuotationUpdateManyAndReturnArgs} args - Arguments to update many Quotations.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuotationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuotationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: Prisma.SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma.Prisma__QuotationClient<runtime.Types.Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(args?: Prisma.Subset<T, QuotationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuotationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Prisma.Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>;
    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QuotationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuotationGroupByArgs['orderBy'];
    } : {
        orderBy?: QuotationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Quotation model
     */
    readonly fields: QuotationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Quotation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Request<T extends Prisma.WorkRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selectedFor<T extends Prisma.Quotation$selectedForArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quotation$selectedForArgs<ExtArgs>>): Prisma.Prisma__WorkRequestClient<runtime.Types.Result.GetResult<Prisma.$WorkRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Quotation model
 */
export interface QuotationFieldRefs {
    readonly id: Prisma.FieldRef<"Quotation", 'String'>;
    readonly proposedFee: Prisma.FieldRef<"Quotation", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Quotation", 'QuotationStatus'>;
    readonly requestId: Prisma.FieldRef<"Quotation", 'String'>;
    readonly staffId: Prisma.FieldRef<"Quotation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Quotation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Quotation", 'DateTime'>;
}
/**
 * Quotation findUnique
 */
export type QuotationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotation to fetch.
     */
    where: Prisma.QuotationWhereUniqueInput;
};
/**
 * Quotation findUniqueOrThrow
 */
export type QuotationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotation to fetch.
     */
    where: Prisma.QuotationWhereUniqueInput;
};
/**
 * Quotation findFirst
 */
export type QuotationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotation to fetch.
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Prisma.QuotationOrderByWithRelationInput | Prisma.QuotationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quotations.
     */
    cursor?: Prisma.QuotationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quotations.
     */
    distinct?: Prisma.QuotationScalarFieldEnum | Prisma.QuotationScalarFieldEnum[];
};
/**
 * Quotation findFirstOrThrow
 */
export type QuotationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotation to fetch.
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Prisma.QuotationOrderByWithRelationInput | Prisma.QuotationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quotations.
     */
    cursor?: Prisma.QuotationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quotations.
     */
    distinct?: Prisma.QuotationScalarFieldEnum | Prisma.QuotationScalarFieldEnum[];
};
/**
 * Quotation findMany
 */
export type QuotationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotations to fetch.
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotations to fetch.
     */
    orderBy?: Prisma.QuotationOrderByWithRelationInput | Prisma.QuotationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Quotations.
     */
    cursor?: Prisma.QuotationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quotations.
     */
    distinct?: Prisma.QuotationScalarFieldEnum | Prisma.QuotationScalarFieldEnum[];
};
/**
 * Quotation create
 */
export type QuotationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Quotation.
     */
    data: Prisma.XOR<Prisma.QuotationCreateInput, Prisma.QuotationUncheckedCreateInput>;
};
/**
 * Quotation createMany
 */
export type QuotationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: Prisma.QuotationCreateManyInput | Prisma.QuotationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Quotation createManyAndReturn
 */
export type QuotationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: Prisma.QuotationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Quotation
     */
    omit?: Prisma.QuotationOmit<ExtArgs> | null;
    /**
     * The data used to create many Quotations.
     */
    data: Prisma.QuotationCreateManyInput | Prisma.QuotationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuotationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Quotation update
 */
export type QuotationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Quotation.
     */
    data: Prisma.XOR<Prisma.QuotationUpdateInput, Prisma.QuotationUncheckedUpdateInput>;
    /**
     * Choose, which Quotation to update.
     */
    where: Prisma.QuotationWhereUniqueInput;
};
/**
 * Quotation updateMany
 */
export type QuotationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: Prisma.XOR<Prisma.QuotationUpdateManyMutationInput, Prisma.QuotationUncheckedUpdateManyInput>;
    /**
     * Filter which Quotations to update
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * Limit how many Quotations to update.
     */
    limit?: number;
};
/**
 * Quotation updateManyAndReturn
 */
export type QuotationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: Prisma.QuotationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Quotation
     */
    omit?: Prisma.QuotationOmit<ExtArgs> | null;
    /**
     * The data used to update Quotations.
     */
    data: Prisma.XOR<Prisma.QuotationUpdateManyMutationInput, Prisma.QuotationUncheckedUpdateManyInput>;
    /**
     * Filter which Quotations to update
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * Limit how many Quotations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuotationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Quotation upsert
 */
export type QuotationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: Prisma.QuotationWhereUniqueInput;
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: Prisma.XOR<Prisma.QuotationCreateInput, Prisma.QuotationUncheckedCreateInput>;
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QuotationUpdateInput, Prisma.QuotationUncheckedUpdateInput>;
};
/**
 * Quotation delete
 */
export type QuotationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Quotation to delete.
     */
    where: Prisma.QuotationWhereUniqueInput;
};
/**
 * Quotation deleteMany
 */
export type QuotationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: Prisma.QuotationWhereInput;
    /**
     * Limit how many Quotations to delete.
     */
    limit?: number;
};
/**
 * Quotation.selectedFor
 */
export type Quotation$selectedForArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.WorkRequestWhereInput;
};
/**
 * Quotation without action
 */
export type QuotationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Quotation.d.ts.map