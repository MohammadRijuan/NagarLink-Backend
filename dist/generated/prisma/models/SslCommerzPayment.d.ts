import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SslCommerzPayment
 *
 */
export type SslCommerzPaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$SslCommerzPaymentPayload>;
export type AggregateSslCommerzPayment = {
    _count: SslCommerzPaymentCountAggregateOutputType | null;
    _avg: SslCommerzPaymentAvgAggregateOutputType | null;
    _sum: SslCommerzPaymentSumAggregateOutputType | null;
    _min: SslCommerzPaymentMinAggregateOutputType | null;
    _max: SslCommerzPaymentMaxAggregateOutputType | null;
};
export type SslCommerzPaymentAvgAggregateOutputType = {
    storeAmount: runtime.Decimal | null;
};
export type SslCommerzPaymentSumAggregateOutputType = {
    storeAmount: runtime.Decimal | null;
};
export type SslCommerzPaymentMinAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    tranId: string | null;
    bankTranId: string | null;
    valId: string | null;
    cardType: string | null;
    cardIssuer: string | null;
    cardBrand: string | null;
    cardIssuerCountry: string | null;
    storeAmount: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SslCommerzPaymentMaxAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    tranId: string | null;
    bankTranId: string | null;
    valId: string | null;
    cardType: string | null;
    cardIssuer: string | null;
    cardBrand: string | null;
    cardIssuerCountry: string | null;
    storeAmount: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SslCommerzPaymentCountAggregateOutputType = {
    id: number;
    paymentId: number;
    tranId: number;
    bankTranId: number;
    valId: number;
    cardType: number;
    cardIssuer: number;
    cardBrand: number;
    cardIssuerCountry: number;
    storeAmount: number;
    gatewayResponse: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SslCommerzPaymentAvgAggregateInputType = {
    storeAmount?: true;
};
export type SslCommerzPaymentSumAggregateInputType = {
    storeAmount?: true;
};
export type SslCommerzPaymentMinAggregateInputType = {
    id?: true;
    paymentId?: true;
    tranId?: true;
    bankTranId?: true;
    valId?: true;
    cardType?: true;
    cardIssuer?: true;
    cardBrand?: true;
    cardIssuerCountry?: true;
    storeAmount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SslCommerzPaymentMaxAggregateInputType = {
    id?: true;
    paymentId?: true;
    tranId?: true;
    bankTranId?: true;
    valId?: true;
    cardType?: true;
    cardIssuer?: true;
    cardBrand?: true;
    cardIssuerCountry?: true;
    storeAmount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SslCommerzPaymentCountAggregateInputType = {
    id?: true;
    paymentId?: true;
    tranId?: true;
    bankTranId?: true;
    valId?: true;
    cardType?: true;
    cardIssuer?: true;
    cardBrand?: true;
    cardIssuerCountry?: true;
    storeAmount?: true;
    gatewayResponse?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SslCommerzPaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SslCommerzPayment to aggregate.
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SslCommerzPayments to fetch.
     */
    orderBy?: Prisma.SslCommerzPaymentOrderByWithRelationInput | Prisma.SslCommerzPaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SslCommerzPaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SslCommerzPayments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SslCommerzPayments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SslCommerzPayments
    **/
    _count?: true | SslCommerzPaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SslCommerzPaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SslCommerzPaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SslCommerzPaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SslCommerzPaymentMaxAggregateInputType;
};
export type GetSslCommerzPaymentAggregateType<T extends SslCommerzPaymentAggregateArgs> = {
    [P in keyof T & keyof AggregateSslCommerzPayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSslCommerzPayment[P]> : Prisma.GetScalarType<T[P], AggregateSslCommerzPayment[P]>;
};
export type SslCommerzPaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SslCommerzPaymentWhereInput;
    orderBy?: Prisma.SslCommerzPaymentOrderByWithAggregationInput | Prisma.SslCommerzPaymentOrderByWithAggregationInput[];
    by: Prisma.SslCommerzPaymentScalarFieldEnum[] | Prisma.SslCommerzPaymentScalarFieldEnum;
    having?: Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SslCommerzPaymentCountAggregateInputType | true;
    _avg?: SslCommerzPaymentAvgAggregateInputType;
    _sum?: SslCommerzPaymentSumAggregateInputType;
    _min?: SslCommerzPaymentMinAggregateInputType;
    _max?: SslCommerzPaymentMaxAggregateInputType;
};
export type SslCommerzPaymentGroupByOutputType = {
    id: string;
    paymentId: string;
    tranId: string;
    bankTranId: string | null;
    valId: string | null;
    cardType: string | null;
    cardIssuer: string | null;
    cardBrand: string | null;
    cardIssuerCountry: string | null;
    storeAmount: runtime.Decimal | null;
    gatewayResponse: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SslCommerzPaymentCountAggregateOutputType | null;
    _avg: SslCommerzPaymentAvgAggregateOutputType | null;
    _sum: SslCommerzPaymentSumAggregateOutputType | null;
    _min: SslCommerzPaymentMinAggregateOutputType | null;
    _max: SslCommerzPaymentMaxAggregateOutputType | null;
};
export type GetSslCommerzPaymentGroupByPayload<T extends SslCommerzPaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SslCommerzPaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SslCommerzPaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SslCommerzPaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SslCommerzPaymentGroupByOutputType[P]>;
}>>;
export type SslCommerzPaymentWhereInput = {
    AND?: Prisma.SslCommerzPaymentWhereInput | Prisma.SslCommerzPaymentWhereInput[];
    OR?: Prisma.SslCommerzPaymentWhereInput[];
    NOT?: Prisma.SslCommerzPaymentWhereInput | Prisma.SslCommerzPaymentWhereInput[];
    id?: Prisma.StringFilter<"SslCommerzPayment"> | string;
    paymentId?: Prisma.StringFilter<"SslCommerzPayment"> | string;
    tranId?: Prisma.StringFilter<"SslCommerzPayment"> | string;
    bankTranId?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    valId?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardType?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardIssuer?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardBrand?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardIssuerCountry?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    storeAmount?: Prisma.DecimalNullableFilter<"SslCommerzPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.JsonNullableFilter<"SslCommerzPayment">;
    createdAt?: Prisma.DateTimeFilter<"SslCommerzPayment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SslCommerzPayment"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
};
export type SslCommerzPaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    tranId?: Prisma.SortOrder;
    bankTranId?: Prisma.SortOrderInput | Prisma.SortOrder;
    valId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardType?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardIssuer?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardBrand?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardIssuerCountry?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    gatewayResponse?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    payment?: Prisma.PaymentOrderByWithRelationInput;
};
export type SslCommerzPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentId?: string;
    tranId?: string;
    AND?: Prisma.SslCommerzPaymentWhereInput | Prisma.SslCommerzPaymentWhereInput[];
    OR?: Prisma.SslCommerzPaymentWhereInput[];
    NOT?: Prisma.SslCommerzPaymentWhereInput | Prisma.SslCommerzPaymentWhereInput[];
    bankTranId?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    valId?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardType?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardIssuer?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardBrand?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    cardIssuerCountry?: Prisma.StringNullableFilter<"SslCommerzPayment"> | string | null;
    storeAmount?: Prisma.DecimalNullableFilter<"SslCommerzPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.JsonNullableFilter<"SslCommerzPayment">;
    createdAt?: Prisma.DateTimeFilter<"SslCommerzPayment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SslCommerzPayment"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
}, "id" | "paymentId" | "tranId">;
export type SslCommerzPaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    tranId?: Prisma.SortOrder;
    bankTranId?: Prisma.SortOrderInput | Prisma.SortOrder;
    valId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardType?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardIssuer?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardBrand?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardIssuerCountry?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    gatewayResponse?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SslCommerzPaymentCountOrderByAggregateInput;
    _avg?: Prisma.SslCommerzPaymentAvgOrderByAggregateInput;
    _max?: Prisma.SslCommerzPaymentMaxOrderByAggregateInput;
    _min?: Prisma.SslCommerzPaymentMinOrderByAggregateInput;
    _sum?: Prisma.SslCommerzPaymentSumOrderByAggregateInput;
};
export type SslCommerzPaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput | Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput | Prisma.SslCommerzPaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SslCommerzPayment"> | string;
    paymentId?: Prisma.StringWithAggregatesFilter<"SslCommerzPayment"> | string;
    tranId?: Prisma.StringWithAggregatesFilter<"SslCommerzPayment"> | string;
    bankTranId?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    valId?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    cardType?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    cardIssuer?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    cardBrand?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    cardIssuerCountry?: Prisma.StringNullableWithAggregatesFilter<"SslCommerzPayment"> | string | null;
    storeAmount?: Prisma.DecimalNullableWithAggregatesFilter<"SslCommerzPayment"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.JsonNullableWithAggregatesFilter<"SslCommerzPayment">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SslCommerzPayment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SslCommerzPayment"> | Date | string;
};
export type SslCommerzPaymentCreateInput = {
    id?: string;
    tranId: string;
    bankTranId?: string | null;
    valId?: string | null;
    cardType?: string | null;
    cardIssuer?: string | null;
    cardBrand?: string | null;
    cardIssuerCountry?: string | null;
    storeAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutSslcommerzPaymentInput;
};
export type SslCommerzPaymentUncheckedCreateInput = {
    id?: string;
    paymentId: string;
    tranId: string;
    bankTranId?: string | null;
    valId?: string | null;
    cardType?: string | null;
    cardIssuer?: string | null;
    cardBrand?: string | null;
    cardIssuerCountry?: string | null;
    storeAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SslCommerzPaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutSslcommerzPaymentNestedInput;
};
export type SslCommerzPaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SslCommerzPaymentCreateManyInput = {
    id?: string;
    paymentId: string;
    tranId: string;
    bankTranId?: string | null;
    valId?: string | null;
    cardType?: string | null;
    cardIssuer?: string | null;
    cardBrand?: string | null;
    cardIssuerCountry?: string | null;
    storeAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SslCommerzPaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SslCommerzPaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SslCommerzPaymentNullableScalarRelationFilter = {
    is?: Prisma.SslCommerzPaymentWhereInput | null;
    isNot?: Prisma.SslCommerzPaymentWhereInput | null;
};
export type SslCommerzPaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    tranId?: Prisma.SortOrder;
    bankTranId?: Prisma.SortOrder;
    valId?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    cardIssuer?: Prisma.SortOrder;
    cardBrand?: Prisma.SortOrder;
    cardIssuerCountry?: Prisma.SortOrder;
    storeAmount?: Prisma.SortOrder;
    gatewayResponse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SslCommerzPaymentAvgOrderByAggregateInput = {
    storeAmount?: Prisma.SortOrder;
};
export type SslCommerzPaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    tranId?: Prisma.SortOrder;
    bankTranId?: Prisma.SortOrder;
    valId?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    cardIssuer?: Prisma.SortOrder;
    cardBrand?: Prisma.SortOrder;
    cardIssuerCountry?: Prisma.SortOrder;
    storeAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SslCommerzPaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    tranId?: Prisma.SortOrder;
    bankTranId?: Prisma.SortOrder;
    valId?: Prisma.SortOrder;
    cardType?: Prisma.SortOrder;
    cardIssuer?: Prisma.SortOrder;
    cardBrand?: Prisma.SortOrder;
    cardIssuerCountry?: Prisma.SortOrder;
    storeAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SslCommerzPaymentSumOrderByAggregateInput = {
    storeAmount?: Prisma.SortOrder;
};
export type SslCommerzPaymentCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.SslCommerzPaymentCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.SslCommerzPaymentWhereUniqueInput;
};
export type SslCommerzPaymentUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.SslCommerzPaymentCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.SslCommerzPaymentWhereUniqueInput;
};
export type SslCommerzPaymentUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.SslCommerzPaymentCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.SslCommerzPaymentUpsertWithoutPaymentInput;
    disconnect?: Prisma.SslCommerzPaymentWhereInput | boolean;
    delete?: Prisma.SslCommerzPaymentWhereInput | boolean;
    connect?: Prisma.SslCommerzPaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SslCommerzPaymentUpdateToOneWithWhereWithoutPaymentInput, Prisma.SslCommerzPaymentUpdateWithoutPaymentInput>, Prisma.SslCommerzPaymentUncheckedUpdateWithoutPaymentInput>;
};
export type SslCommerzPaymentUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.SslCommerzPaymentCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.SslCommerzPaymentUpsertWithoutPaymentInput;
    disconnect?: Prisma.SslCommerzPaymentWhereInput | boolean;
    delete?: Prisma.SslCommerzPaymentWhereInput | boolean;
    connect?: Prisma.SslCommerzPaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SslCommerzPaymentUpdateToOneWithWhereWithoutPaymentInput, Prisma.SslCommerzPaymentUpdateWithoutPaymentInput>, Prisma.SslCommerzPaymentUncheckedUpdateWithoutPaymentInput>;
};
export type SslCommerzPaymentCreateWithoutPaymentInput = {
    id?: string;
    tranId: string;
    bankTranId?: string | null;
    valId?: string | null;
    cardType?: string | null;
    cardIssuer?: string | null;
    cardBrand?: string | null;
    cardIssuerCountry?: string | null;
    storeAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SslCommerzPaymentUncheckedCreateWithoutPaymentInput = {
    id?: string;
    tranId: string;
    bankTranId?: string | null;
    valId?: string | null;
    cardType?: string | null;
    cardIssuer?: string | null;
    cardBrand?: string | null;
    cardIssuerCountry?: string | null;
    storeAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SslCommerzPaymentCreateOrConnectWithoutPaymentInput = {
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
};
export type SslCommerzPaymentUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.SslCommerzPaymentUpdateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.SslCommerzPaymentCreateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.SslCommerzPaymentWhereInput;
};
export type SslCommerzPaymentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.SslCommerzPaymentWhereInput;
    data: Prisma.XOR<Prisma.SslCommerzPaymentUpdateWithoutPaymentInput, Prisma.SslCommerzPaymentUncheckedUpdateWithoutPaymentInput>;
};
export type SslCommerzPaymentUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SslCommerzPaymentUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tranId?: Prisma.StringFieldUpdateOperationsInput | string;
    bankTranId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardBrand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardIssuerCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    gatewayResponse?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SslCommerzPaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    tranId?: boolean;
    bankTranId?: boolean;
    valId?: boolean;
    cardType?: boolean;
    cardIssuer?: boolean;
    cardBrand?: boolean;
    cardIssuerCountry?: boolean;
    storeAmount?: boolean;
    gatewayResponse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sslCommerzPayment"]>;
export type SslCommerzPaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    tranId?: boolean;
    bankTranId?: boolean;
    valId?: boolean;
    cardType?: boolean;
    cardIssuer?: boolean;
    cardBrand?: boolean;
    cardIssuerCountry?: boolean;
    storeAmount?: boolean;
    gatewayResponse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sslCommerzPayment"]>;
export type SslCommerzPaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    tranId?: boolean;
    bankTranId?: boolean;
    valId?: boolean;
    cardType?: boolean;
    cardIssuer?: boolean;
    cardBrand?: boolean;
    cardIssuerCountry?: boolean;
    storeAmount?: boolean;
    gatewayResponse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sslCommerzPayment"]>;
export type SslCommerzPaymentSelectScalar = {
    id?: boolean;
    paymentId?: boolean;
    tranId?: boolean;
    bankTranId?: boolean;
    valId?: boolean;
    cardType?: boolean;
    cardIssuer?: boolean;
    cardBrand?: boolean;
    cardIssuerCountry?: boolean;
    storeAmount?: boolean;
    gatewayResponse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SslCommerzPaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentId" | "tranId" | "bankTranId" | "valId" | "cardType" | "cardIssuer" | "cardBrand" | "cardIssuerCountry" | "storeAmount" | "gatewayResponse" | "createdAt" | "updatedAt", ExtArgs["result"]["sslCommerzPayment"]>;
export type SslCommerzPaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type SslCommerzPaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type SslCommerzPaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type $SslCommerzPaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SslCommerzPayment";
    objects: {
        payment: Prisma.$PaymentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentId: string;
        tranId: string;
        bankTranId: string | null;
        valId: string | null;
        cardType: string | null;
        cardIssuer: string | null;
        cardBrand: string | null;
        cardIssuerCountry: string | null;
        storeAmount: runtime.Decimal | null;
        gatewayResponse: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sslCommerzPayment"]>;
    composites: {};
};
export type SslCommerzPaymentGetPayload<S extends boolean | null | undefined | SslCommerzPaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload, S>;
export type SslCommerzPaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SslCommerzPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SslCommerzPaymentCountAggregateInputType | true;
};
export interface SslCommerzPaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SslCommerzPayment'];
        meta: {
            name: 'SslCommerzPayment';
        };
    };
    /**
     * Find zero or one SslCommerzPayment that matches the filter.
     * @param {SslCommerzPaymentFindUniqueArgs} args - Arguments to find a SslCommerzPayment
     * @example
     * // Get one SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SslCommerzPaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SslCommerzPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SslCommerzPaymentFindUniqueOrThrowArgs} args - Arguments to find a SslCommerzPayment
     * @example
     * // Get one SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SslCommerzPaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SslCommerzPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentFindFirstArgs} args - Arguments to find a SslCommerzPayment
     * @example
     * // Get one SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SslCommerzPaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SslCommerzPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentFindFirstOrThrowArgs} args - Arguments to find a SslCommerzPayment
     * @example
     * // Get one SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SslCommerzPaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SslCommerzPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SslCommerzPayments
     * const sslCommerzPayments = await prisma.sslCommerzPayment.findMany()
     *
     * // Get first 10 SslCommerzPayments
     * const sslCommerzPayments = await prisma.sslCommerzPayment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sslCommerzPaymentWithIdOnly = await prisma.sslCommerzPayment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SslCommerzPaymentFindManyArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SslCommerzPayment.
     * @param {SslCommerzPaymentCreateArgs} args - Arguments to create a SslCommerzPayment.
     * @example
     * // Create one SslCommerzPayment
     * const SslCommerzPayment = await prisma.sslCommerzPayment.create({
     *   data: {
     *     // ... data to create a SslCommerzPayment
     *   }
     * })
     *
     */
    create<T extends SslCommerzPaymentCreateArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentCreateArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SslCommerzPayments.
     * @param {SslCommerzPaymentCreateManyArgs} args - Arguments to create many SslCommerzPayments.
     * @example
     * // Create many SslCommerzPayments
     * const sslCommerzPayment = await prisma.sslCommerzPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SslCommerzPaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SslCommerzPayments and returns the data saved in the database.
     * @param {SslCommerzPaymentCreateManyAndReturnArgs} args - Arguments to create many SslCommerzPayments.
     * @example
     * // Create many SslCommerzPayments
     * const sslCommerzPayment = await prisma.sslCommerzPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SslCommerzPayments and only return the `id`
     * const sslCommerzPaymentWithIdOnly = await prisma.sslCommerzPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SslCommerzPaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SslCommerzPayment.
     * @param {SslCommerzPaymentDeleteArgs} args - Arguments to delete one SslCommerzPayment.
     * @example
     * // Delete one SslCommerzPayment
     * const SslCommerzPayment = await prisma.sslCommerzPayment.delete({
     *   where: {
     *     // ... filter to delete one SslCommerzPayment
     *   }
     * })
     *
     */
    delete<T extends SslCommerzPaymentDeleteArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SslCommerzPayment.
     * @param {SslCommerzPaymentUpdateArgs} args - Arguments to update one SslCommerzPayment.
     * @example
     * // Update one SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SslCommerzPaymentUpdateArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SslCommerzPayments.
     * @param {SslCommerzPaymentDeleteManyArgs} args - Arguments to filter SslCommerzPayments to delete.
     * @example
     * // Delete a few SslCommerzPayments
     * const { count } = await prisma.sslCommerzPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SslCommerzPaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, SslCommerzPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SslCommerzPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SslCommerzPayments
     * const sslCommerzPayment = await prisma.sslCommerzPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SslCommerzPaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SslCommerzPayments and returns the data updated in the database.
     * @param {SslCommerzPaymentUpdateManyAndReturnArgs} args - Arguments to update many SslCommerzPayments.
     * @example
     * // Update many SslCommerzPayments
     * const sslCommerzPayment = await prisma.sslCommerzPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SslCommerzPayments and only return the `id`
     * const sslCommerzPaymentWithIdOnly = await prisma.sslCommerzPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends SslCommerzPaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SslCommerzPayment.
     * @param {SslCommerzPaymentUpsertArgs} args - Arguments to update or create a SslCommerzPayment.
     * @example
     * // Update or create a SslCommerzPayment
     * const sslCommerzPayment = await prisma.sslCommerzPayment.upsert({
     *   create: {
     *     // ... data to create a SslCommerzPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SslCommerzPayment we want to update
     *   }
     * })
     */
    upsert<T extends SslCommerzPaymentUpsertArgs>(args: Prisma.SelectSubset<T, SslCommerzPaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__SslCommerzPaymentClient<runtime.Types.Result.GetResult<Prisma.$SslCommerzPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SslCommerzPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentCountArgs} args - Arguments to filter SslCommerzPayments to count.
     * @example
     * // Count the number of SslCommerzPayments
     * const count = await prisma.sslCommerzPayment.count({
     *   where: {
     *     // ... the filter for the SslCommerzPayments we want to count
     *   }
     * })
    **/
    count<T extends SslCommerzPaymentCountArgs>(args?: Prisma.Subset<T, SslCommerzPaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SslCommerzPaymentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SslCommerzPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SslCommerzPaymentAggregateArgs>(args: Prisma.Subset<T, SslCommerzPaymentAggregateArgs>): Prisma.PrismaPromise<GetSslCommerzPaymentAggregateType<T>>;
    /**
     * Group by SslCommerzPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SslCommerzPaymentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SslCommerzPaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SslCommerzPaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: SslCommerzPaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SslCommerzPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSslCommerzPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SslCommerzPayment model
     */
    readonly fields: SslCommerzPaymentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SslCommerzPayment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SslCommerzPaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.PaymentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SslCommerzPayment model
 */
export interface SslCommerzPaymentFieldRefs {
    readonly id: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly paymentId: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly tranId: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly bankTranId: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly valId: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly cardType: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly cardIssuer: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly cardBrand: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly cardIssuerCountry: Prisma.FieldRef<"SslCommerzPayment", 'String'>;
    readonly storeAmount: Prisma.FieldRef<"SslCommerzPayment", 'Decimal'>;
    readonly gatewayResponse: Prisma.FieldRef<"SslCommerzPayment", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"SslCommerzPayment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SslCommerzPayment", 'DateTime'>;
}
/**
 * SslCommerzPayment findUnique
 */
export type SslCommerzPaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter, which SslCommerzPayment to fetch.
     */
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
};
/**
 * SslCommerzPayment findUniqueOrThrow
 */
export type SslCommerzPaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter, which SslCommerzPayment to fetch.
     */
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
};
/**
 * SslCommerzPayment findFirst
 */
export type SslCommerzPaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter, which SslCommerzPayment to fetch.
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SslCommerzPayments to fetch.
     */
    orderBy?: Prisma.SslCommerzPaymentOrderByWithRelationInput | Prisma.SslCommerzPaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SslCommerzPayments.
     */
    cursor?: Prisma.SslCommerzPaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SslCommerzPayments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SslCommerzPayments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SslCommerzPayments.
     */
    distinct?: Prisma.SslCommerzPaymentScalarFieldEnum | Prisma.SslCommerzPaymentScalarFieldEnum[];
};
/**
 * SslCommerzPayment findFirstOrThrow
 */
export type SslCommerzPaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter, which SslCommerzPayment to fetch.
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SslCommerzPayments to fetch.
     */
    orderBy?: Prisma.SslCommerzPaymentOrderByWithRelationInput | Prisma.SslCommerzPaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SslCommerzPayments.
     */
    cursor?: Prisma.SslCommerzPaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SslCommerzPayments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SslCommerzPayments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SslCommerzPayments.
     */
    distinct?: Prisma.SslCommerzPaymentScalarFieldEnum | Prisma.SslCommerzPaymentScalarFieldEnum[];
};
/**
 * SslCommerzPayment findMany
 */
export type SslCommerzPaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter, which SslCommerzPayments to fetch.
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SslCommerzPayments to fetch.
     */
    orderBy?: Prisma.SslCommerzPaymentOrderByWithRelationInput | Prisma.SslCommerzPaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SslCommerzPayments.
     */
    cursor?: Prisma.SslCommerzPaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SslCommerzPayments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SslCommerzPayments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SslCommerzPayments.
     */
    distinct?: Prisma.SslCommerzPaymentScalarFieldEnum | Prisma.SslCommerzPaymentScalarFieldEnum[];
};
/**
 * SslCommerzPayment create
 */
export type SslCommerzPaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a SslCommerzPayment.
     */
    data: Prisma.XOR<Prisma.SslCommerzPaymentCreateInput, Prisma.SslCommerzPaymentUncheckedCreateInput>;
};
/**
 * SslCommerzPayment createMany
 */
export type SslCommerzPaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SslCommerzPayments.
     */
    data: Prisma.SslCommerzPaymentCreateManyInput | Prisma.SslCommerzPaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SslCommerzPayment createManyAndReturn
 */
export type SslCommerzPaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * The data used to create many SslCommerzPayments.
     */
    data: Prisma.SslCommerzPaymentCreateManyInput | Prisma.SslCommerzPaymentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SslCommerzPayment update
 */
export type SslCommerzPaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a SslCommerzPayment.
     */
    data: Prisma.XOR<Prisma.SslCommerzPaymentUpdateInput, Prisma.SslCommerzPaymentUncheckedUpdateInput>;
    /**
     * Choose, which SslCommerzPayment to update.
     */
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
};
/**
 * SslCommerzPayment updateMany
 */
export type SslCommerzPaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SslCommerzPayments.
     */
    data: Prisma.XOR<Prisma.SslCommerzPaymentUpdateManyMutationInput, Prisma.SslCommerzPaymentUncheckedUpdateManyInput>;
    /**
     * Filter which SslCommerzPayments to update
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * Limit how many SslCommerzPayments to update.
     */
    limit?: number;
};
/**
 * SslCommerzPayment updateManyAndReturn
 */
export type SslCommerzPaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * The data used to update SslCommerzPayments.
     */
    data: Prisma.XOR<Prisma.SslCommerzPaymentUpdateManyMutationInput, Prisma.SslCommerzPaymentUncheckedUpdateManyInput>;
    /**
     * Filter which SslCommerzPayments to update
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * Limit how many SslCommerzPayments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SslCommerzPayment upsert
 */
export type SslCommerzPaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the SslCommerzPayment to update in case it exists.
     */
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
    /**
     * In case the SslCommerzPayment found by the `where` argument doesn't exist, create a new SslCommerzPayment with this data.
     */
    create: Prisma.XOR<Prisma.SslCommerzPaymentCreateInput, Prisma.SslCommerzPaymentUncheckedCreateInput>;
    /**
     * In case the SslCommerzPayment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SslCommerzPaymentUpdateInput, Prisma.SslCommerzPaymentUncheckedUpdateInput>;
};
/**
 * SslCommerzPayment delete
 */
export type SslCommerzPaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
    /**
     * Filter which SslCommerzPayment to delete.
     */
    where: Prisma.SslCommerzPaymentWhereUniqueInput;
};
/**
 * SslCommerzPayment deleteMany
 */
export type SslCommerzPaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SslCommerzPayments to delete
     */
    where?: Prisma.SslCommerzPaymentWhereInput;
    /**
     * Limit how many SslCommerzPayments to delete.
     */
    limit?: number;
};
/**
 * SslCommerzPayment without action
 */
export type SslCommerzPaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SslCommerzPayment
     */
    select?: Prisma.SslCommerzPaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SslCommerzPayment
     */
    omit?: Prisma.SslCommerzPaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SslCommerzPaymentInclude<ExtArgs> | null;
};
//# sourceMappingURL=SslCommerzPayment.d.ts.map