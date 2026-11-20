import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model WorkAttachment
 *
 */
export type WorkAttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkAttachmentPayload>;
export type AggregateWorkAttachment = {
    _count: WorkAttachmentCountAggregateOutputType | null;
    _min: WorkAttachmentMinAggregateOutputType | null;
    _max: WorkAttachmentMaxAggregateOutputType | null;
};
export type WorkAttachmentMinAggregateOutputType = {
    id: string | null;
    assignmentId: string | null;
    fileUrl: string | null;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date | null;
};
export type WorkAttachmentMaxAggregateOutputType = {
    id: string | null;
    assignmentId: string | null;
    fileUrl: string | null;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date | null;
};
export type WorkAttachmentCountAggregateOutputType = {
    id: number;
    assignmentId: number;
    fileUrl: number;
    fileType: number;
    fileName: number;
    createdAt: number;
    _all: number;
};
export type WorkAttachmentMinAggregateInputType = {
    id?: true;
    assignmentId?: true;
    fileUrl?: true;
    fileType?: true;
    fileName?: true;
    createdAt?: true;
};
export type WorkAttachmentMaxAggregateInputType = {
    id?: true;
    assignmentId?: true;
    fileUrl?: true;
    fileType?: true;
    fileName?: true;
    createdAt?: true;
};
export type WorkAttachmentCountAggregateInputType = {
    id?: true;
    assignmentId?: true;
    fileUrl?: true;
    fileType?: true;
    fileName?: true;
    createdAt?: true;
    _all?: true;
};
export type WorkAttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorkAttachment to aggregate.
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkAttachments to fetch.
     */
    orderBy?: Prisma.WorkAttachmentOrderByWithRelationInput | Prisma.WorkAttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WorkAttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkAttachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkAttachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WorkAttachments
    **/
    _count?: true | WorkAttachmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WorkAttachmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WorkAttachmentMaxAggregateInputType;
};
export type GetWorkAttachmentAggregateType<T extends WorkAttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkAttachment[P]> : Prisma.GetScalarType<T[P], AggregateWorkAttachment[P]>;
};
export type WorkAttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkAttachmentWhereInput;
    orderBy?: Prisma.WorkAttachmentOrderByWithAggregationInput | Prisma.WorkAttachmentOrderByWithAggregationInput[];
    by: Prisma.WorkAttachmentScalarFieldEnum[] | Prisma.WorkAttachmentScalarFieldEnum;
    having?: Prisma.WorkAttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkAttachmentCountAggregateInputType | true;
    _min?: WorkAttachmentMinAggregateInputType;
    _max?: WorkAttachmentMaxAggregateInputType;
};
export type WorkAttachmentGroupByOutputType = {
    id: string;
    assignmentId: string;
    fileUrl: string;
    fileType: string | null;
    fileName: string | null;
    createdAt: Date;
    _count: WorkAttachmentCountAggregateOutputType | null;
    _min: WorkAttachmentMinAggregateOutputType | null;
    _max: WorkAttachmentMaxAggregateOutputType | null;
};
export type GetWorkAttachmentGroupByPayload<T extends WorkAttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkAttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkAttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkAttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkAttachmentGroupByOutputType[P]>;
}>>;
export type WorkAttachmentWhereInput = {
    AND?: Prisma.WorkAttachmentWhereInput | Prisma.WorkAttachmentWhereInput[];
    OR?: Prisma.WorkAttachmentWhereInput[];
    NOT?: Prisma.WorkAttachmentWhereInput | Prisma.WorkAttachmentWhereInput[];
    id?: Prisma.StringFilter<"WorkAttachment"> | string;
    assignmentId?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileUrl?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileType?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    fileName?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkAttachment"> | Date | string;
    assignment?: Prisma.XOR<Prisma.AssignmentScalarRelationFilter, Prisma.AssignmentWhereInput>;
};
export type WorkAttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    assignment?: Prisma.AssignmentOrderByWithRelationInput;
};
export type WorkAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorkAttachmentWhereInput | Prisma.WorkAttachmentWhereInput[];
    OR?: Prisma.WorkAttachmentWhereInput[];
    NOT?: Prisma.WorkAttachmentWhereInput | Prisma.WorkAttachmentWhereInput[];
    assignmentId?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileUrl?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileType?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    fileName?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkAttachment"> | Date | string;
    assignment?: Prisma.XOR<Prisma.AssignmentScalarRelationFilter, Prisma.AssignmentWhereInput>;
}, "id">;
export type WorkAttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WorkAttachmentCountOrderByAggregateInput;
    _max?: Prisma.WorkAttachmentMaxOrderByAggregateInput;
    _min?: Prisma.WorkAttachmentMinOrderByAggregateInput;
};
export type WorkAttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkAttachmentScalarWhereWithAggregatesInput | Prisma.WorkAttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkAttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkAttachmentScalarWhereWithAggregatesInput | Prisma.WorkAttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkAttachment"> | string;
    assignmentId?: Prisma.StringWithAggregatesFilter<"WorkAttachment"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"WorkAttachment"> | string;
    fileType?: Prisma.StringNullableWithAggregatesFilter<"WorkAttachment"> | string | null;
    fileName?: Prisma.StringNullableWithAggregatesFilter<"WorkAttachment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkAttachment"> | Date | string;
};
export type WorkAttachmentCreateInput = {
    id?: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
    assignment: Prisma.AssignmentCreateNestedOneWithoutAttachmentsInput;
};
export type WorkAttachmentUncheckedCreateInput = {
    id?: string;
    assignmentId: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
};
export type WorkAttachmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: Prisma.AssignmentUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type WorkAttachmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentCreateManyInput = {
    id?: string;
    assignmentId: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
};
export type WorkAttachmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentListRelationFilter = {
    every?: Prisma.WorkAttachmentWhereInput;
    some?: Prisma.WorkAttachmentWhereInput;
    none?: Prisma.WorkAttachmentWhereInput;
};
export type WorkAttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkAttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkAttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkAttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assignmentId?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileType?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkAttachmentCreateNestedManyWithoutAssignmentInput = {
    create?: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput> | Prisma.WorkAttachmentCreateWithoutAssignmentInput[] | Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput | Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput[];
    createMany?: Prisma.WorkAttachmentCreateManyAssignmentInputEnvelope;
    connect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
};
export type WorkAttachmentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput> | Prisma.WorkAttachmentCreateWithoutAssignmentInput[] | Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput | Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput[];
    createMany?: Prisma.WorkAttachmentCreateManyAssignmentInputEnvelope;
    connect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
};
export type WorkAttachmentUpdateManyWithoutAssignmentNestedInput = {
    create?: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput> | Prisma.WorkAttachmentCreateWithoutAssignmentInput[] | Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput | Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput[];
    upsert?: Prisma.WorkAttachmentUpsertWithWhereUniqueWithoutAssignmentInput | Prisma.WorkAttachmentUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: Prisma.WorkAttachmentCreateManyAssignmentInputEnvelope;
    set?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    disconnect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    delete?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    connect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    update?: Prisma.WorkAttachmentUpdateWithWhereUniqueWithoutAssignmentInput | Prisma.WorkAttachmentUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: Prisma.WorkAttachmentUpdateManyWithWhereWithoutAssignmentInput | Prisma.WorkAttachmentUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: Prisma.WorkAttachmentScalarWhereInput | Prisma.WorkAttachmentScalarWhereInput[];
};
export type WorkAttachmentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput> | Prisma.WorkAttachmentCreateWithoutAssignmentInput[] | Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput | Prisma.WorkAttachmentCreateOrConnectWithoutAssignmentInput[];
    upsert?: Prisma.WorkAttachmentUpsertWithWhereUniqueWithoutAssignmentInput | Prisma.WorkAttachmentUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: Prisma.WorkAttachmentCreateManyAssignmentInputEnvelope;
    set?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    disconnect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    delete?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    connect?: Prisma.WorkAttachmentWhereUniqueInput | Prisma.WorkAttachmentWhereUniqueInput[];
    update?: Prisma.WorkAttachmentUpdateWithWhereUniqueWithoutAssignmentInput | Prisma.WorkAttachmentUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: Prisma.WorkAttachmentUpdateManyWithWhereWithoutAssignmentInput | Prisma.WorkAttachmentUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: Prisma.WorkAttachmentScalarWhereInput | Prisma.WorkAttachmentScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type WorkAttachmentCreateWithoutAssignmentInput = {
    id?: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
};
export type WorkAttachmentUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
};
export type WorkAttachmentCreateOrConnectWithoutAssignmentInput = {
    where: Prisma.WorkAttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput>;
};
export type WorkAttachmentCreateManyAssignmentInputEnvelope = {
    data: Prisma.WorkAttachmentCreateManyAssignmentInput | Prisma.WorkAttachmentCreateManyAssignmentInput[];
    skipDuplicates?: boolean;
};
export type WorkAttachmentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: Prisma.WorkAttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkAttachmentUpdateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedUpdateWithoutAssignmentInput>;
    create: Prisma.XOR<Prisma.WorkAttachmentCreateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedCreateWithoutAssignmentInput>;
};
export type WorkAttachmentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: Prisma.WorkAttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkAttachmentUpdateWithoutAssignmentInput, Prisma.WorkAttachmentUncheckedUpdateWithoutAssignmentInput>;
};
export type WorkAttachmentUpdateManyWithWhereWithoutAssignmentInput = {
    where: Prisma.WorkAttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkAttachmentUpdateManyMutationInput, Prisma.WorkAttachmentUncheckedUpdateManyWithoutAssignmentInput>;
};
export type WorkAttachmentScalarWhereInput = {
    AND?: Prisma.WorkAttachmentScalarWhereInput | Prisma.WorkAttachmentScalarWhereInput[];
    OR?: Prisma.WorkAttachmentScalarWhereInput[];
    NOT?: Prisma.WorkAttachmentScalarWhereInput | Prisma.WorkAttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkAttachment"> | string;
    assignmentId?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileUrl?: Prisma.StringFilter<"WorkAttachment"> | string;
    fileType?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    fileName?: Prisma.StringNullableFilter<"WorkAttachment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorkAttachment"> | Date | string;
};
export type WorkAttachmentCreateManyAssignmentInput = {
    id?: string;
    fileUrl: string;
    fileType?: string | null;
    fileName?: string | null;
    createdAt?: Date | string;
};
export type WorkAttachmentUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentUncheckedUpdateWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkAttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileName?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workAttachment"]>;
export type WorkAttachmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileName?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workAttachment"]>;
export type WorkAttachmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assignmentId?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileName?: boolean;
    createdAt?: boolean;
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workAttachment"]>;
export type WorkAttachmentSelectScalar = {
    id?: boolean;
    assignmentId?: boolean;
    fileUrl?: boolean;
    fileType?: boolean;
    fileName?: boolean;
    createdAt?: boolean;
};
export type WorkAttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assignmentId" | "fileUrl" | "fileType" | "fileName" | "createdAt", ExtArgs["result"]["workAttachment"]>;
export type WorkAttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type WorkAttachmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type WorkAttachmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignment?: boolean | Prisma.AssignmentDefaultArgs<ExtArgs>;
};
export type $WorkAttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkAttachment";
    objects: {
        assignment: Prisma.$AssignmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assignmentId: string;
        fileUrl: string;
        fileType: string | null;
        fileName: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["workAttachment"]>;
    composites: {};
};
export type WorkAttachmentGetPayload<S extends boolean | null | undefined | WorkAttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload, S>;
export type WorkAttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkAttachmentCountAggregateInputType | true;
};
export interface WorkAttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkAttachment'];
        meta: {
            name: 'WorkAttachment';
        };
    };
    /**
     * Find zero or one WorkAttachment that matches the filter.
     * @param {WorkAttachmentFindUniqueArgs} args - Arguments to find a WorkAttachment
     * @example
     * // Get one WorkAttachment
     * const workAttachment = await prisma.workAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkAttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkAttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WorkAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkAttachmentFindUniqueOrThrowArgs} args - Arguments to find a WorkAttachment
     * @example
     * // Get one WorkAttachment
     * const workAttachment = await prisma.workAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkAttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorkAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentFindFirstArgs} args - Arguments to find a WorkAttachment
     * @example
     * // Get one WorkAttachment
     * const workAttachment = await prisma.workAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkAttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorkAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentFindFirstOrThrowArgs} args - Arguments to find a WorkAttachment
     * @example
     * // Get one WorkAttachment
     * const workAttachment = await prisma.workAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkAttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WorkAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkAttachments
     * const workAttachments = await prisma.workAttachment.findMany()
     *
     * // Get first 10 WorkAttachments
     * const workAttachments = await prisma.workAttachment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const workAttachmentWithIdOnly = await prisma.workAttachment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WorkAttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WorkAttachment.
     * @param {WorkAttachmentCreateArgs} args - Arguments to create a WorkAttachment.
     * @example
     * // Create one WorkAttachment
     * const WorkAttachment = await prisma.workAttachment.create({
     *   data: {
     *     // ... data to create a WorkAttachment
     *   }
     * })
     *
     */
    create<T extends WorkAttachmentCreateArgs>(args: Prisma.SelectSubset<T, WorkAttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WorkAttachments.
     * @param {WorkAttachmentCreateManyArgs} args - Arguments to create many WorkAttachments.
     * @example
     * // Create many WorkAttachments
     * const workAttachment = await prisma.workAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WorkAttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WorkAttachments and returns the data saved in the database.
     * @param {WorkAttachmentCreateManyAndReturnArgs} args - Arguments to create many WorkAttachments.
     * @example
     * // Create many WorkAttachments
     * const workAttachment = await prisma.workAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WorkAttachments and only return the `id`
     * const workAttachmentWithIdOnly = await prisma.workAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WorkAttachmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WorkAttachment.
     * @param {WorkAttachmentDeleteArgs} args - Arguments to delete one WorkAttachment.
     * @example
     * // Delete one WorkAttachment
     * const WorkAttachment = await prisma.workAttachment.delete({
     *   where: {
     *     // ... filter to delete one WorkAttachment
     *   }
     * })
     *
     */
    delete<T extends WorkAttachmentDeleteArgs>(args: Prisma.SelectSubset<T, WorkAttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WorkAttachment.
     * @param {WorkAttachmentUpdateArgs} args - Arguments to update one WorkAttachment.
     * @example
     * // Update one WorkAttachment
     * const workAttachment = await prisma.workAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WorkAttachmentUpdateArgs>(args: Prisma.SelectSubset<T, WorkAttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WorkAttachments.
     * @param {WorkAttachmentDeleteManyArgs} args - Arguments to filter WorkAttachments to delete.
     * @example
     * // Delete a few WorkAttachments
     * const { count } = await prisma.workAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WorkAttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorkAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkAttachments
     * const workAttachment = await prisma.workAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WorkAttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorkAttachments and returns the data updated in the database.
     * @param {WorkAttachmentUpdateManyAndReturnArgs} args - Arguments to update many WorkAttachments.
     * @example
     * // Update many WorkAttachments
     * const workAttachment = await prisma.workAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WorkAttachments and only return the `id`
     * const workAttachmentWithIdOnly = await prisma.workAttachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkAttachmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WorkAttachment.
     * @param {WorkAttachmentUpsertArgs} args - Arguments to update or create a WorkAttachment.
     * @example
     * // Update or create a WorkAttachment
     * const workAttachment = await prisma.workAttachment.upsert({
     *   create: {
     *     // ... data to create a WorkAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkAttachment we want to update
     *   }
     * })
     */
    upsert<T extends WorkAttachmentUpsertArgs>(args: Prisma.SelectSubset<T, WorkAttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkAttachmentClient<runtime.Types.Result.GetResult<Prisma.$WorkAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WorkAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentCountArgs} args - Arguments to filter WorkAttachments to count.
     * @example
     * // Count the number of WorkAttachments
     * const count = await prisma.workAttachment.count({
     *   where: {
     *     // ... the filter for the WorkAttachments we want to count
     *   }
     * })
    **/
    count<T extends WorkAttachmentCountArgs>(args?: Prisma.Subset<T, WorkAttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkAttachmentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WorkAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkAttachmentAggregateArgs>(args: Prisma.Subset<T, WorkAttachmentAggregateArgs>): Prisma.PrismaPromise<GetWorkAttachmentAggregateType<T>>;
    /**
     * Group by WorkAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAttachmentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WorkAttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkAttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkAttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WorkAttachment model
     */
    readonly fields: WorkAttachmentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WorkAttachment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WorkAttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignment<T extends Prisma.AssignmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssignmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the WorkAttachment model
 */
export interface WorkAttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"WorkAttachment", 'String'>;
    readonly assignmentId: Prisma.FieldRef<"WorkAttachment", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"WorkAttachment", 'String'>;
    readonly fileType: Prisma.FieldRef<"WorkAttachment", 'String'>;
    readonly fileName: Prisma.FieldRef<"WorkAttachment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WorkAttachment", 'DateTime'>;
}
/**
 * WorkAttachment findUnique
 */
export type WorkAttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter, which WorkAttachment to fetch.
     */
    where: Prisma.WorkAttachmentWhereUniqueInput;
};
/**
 * WorkAttachment findUniqueOrThrow
 */
export type WorkAttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter, which WorkAttachment to fetch.
     */
    where: Prisma.WorkAttachmentWhereUniqueInput;
};
/**
 * WorkAttachment findFirst
 */
export type WorkAttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter, which WorkAttachment to fetch.
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkAttachments to fetch.
     */
    orderBy?: Prisma.WorkAttachmentOrderByWithRelationInput | Prisma.WorkAttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorkAttachments.
     */
    cursor?: Prisma.WorkAttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkAttachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkAttachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkAttachments.
     */
    distinct?: Prisma.WorkAttachmentScalarFieldEnum | Prisma.WorkAttachmentScalarFieldEnum[];
};
/**
 * WorkAttachment findFirstOrThrow
 */
export type WorkAttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter, which WorkAttachment to fetch.
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkAttachments to fetch.
     */
    orderBy?: Prisma.WorkAttachmentOrderByWithRelationInput | Prisma.WorkAttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorkAttachments.
     */
    cursor?: Prisma.WorkAttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkAttachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkAttachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkAttachments.
     */
    distinct?: Prisma.WorkAttachmentScalarFieldEnum | Prisma.WorkAttachmentScalarFieldEnum[];
};
/**
 * WorkAttachment findMany
 */
export type WorkAttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter, which WorkAttachments to fetch.
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorkAttachments to fetch.
     */
    orderBy?: Prisma.WorkAttachmentOrderByWithRelationInput | Prisma.WorkAttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WorkAttachments.
     */
    cursor?: Prisma.WorkAttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorkAttachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorkAttachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorkAttachments.
     */
    distinct?: Prisma.WorkAttachmentScalarFieldEnum | Prisma.WorkAttachmentScalarFieldEnum[];
};
/**
 * WorkAttachment create
 */
export type WorkAttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a WorkAttachment.
     */
    data: Prisma.XOR<Prisma.WorkAttachmentCreateInput, Prisma.WorkAttachmentUncheckedCreateInput>;
};
/**
 * WorkAttachment createMany
 */
export type WorkAttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkAttachments.
     */
    data: Prisma.WorkAttachmentCreateManyInput | Prisma.WorkAttachmentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WorkAttachment createManyAndReturn
 */
export type WorkAttachmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * The data used to create many WorkAttachments.
     */
    data: Prisma.WorkAttachmentCreateManyInput | Prisma.WorkAttachmentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WorkAttachment update
 */
export type WorkAttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a WorkAttachment.
     */
    data: Prisma.XOR<Prisma.WorkAttachmentUpdateInput, Prisma.WorkAttachmentUncheckedUpdateInput>;
    /**
     * Choose, which WorkAttachment to update.
     */
    where: Prisma.WorkAttachmentWhereUniqueInput;
};
/**
 * WorkAttachment updateMany
 */
export type WorkAttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkAttachments.
     */
    data: Prisma.XOR<Prisma.WorkAttachmentUpdateManyMutationInput, Prisma.WorkAttachmentUncheckedUpdateManyInput>;
    /**
     * Filter which WorkAttachments to update
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * Limit how many WorkAttachments to update.
     */
    limit?: number;
};
/**
 * WorkAttachment updateManyAndReturn
 */
export type WorkAttachmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * The data used to update WorkAttachments.
     */
    data: Prisma.XOR<Prisma.WorkAttachmentUpdateManyMutationInput, Prisma.WorkAttachmentUncheckedUpdateManyInput>;
    /**
     * Filter which WorkAttachments to update
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * Limit how many WorkAttachments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WorkAttachment upsert
 */
export type WorkAttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the WorkAttachment to update in case it exists.
     */
    where: Prisma.WorkAttachmentWhereUniqueInput;
    /**
     * In case the WorkAttachment found by the `where` argument doesn't exist, create a new WorkAttachment with this data.
     */
    create: Prisma.XOR<Prisma.WorkAttachmentCreateInput, Prisma.WorkAttachmentUncheckedCreateInput>;
    /**
     * In case the WorkAttachment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WorkAttachmentUpdateInput, Prisma.WorkAttachmentUncheckedUpdateInput>;
};
/**
 * WorkAttachment delete
 */
export type WorkAttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
    /**
     * Filter which WorkAttachment to delete.
     */
    where: Prisma.WorkAttachmentWhereUniqueInput;
};
/**
 * WorkAttachment deleteMany
 */
export type WorkAttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorkAttachments to delete
     */
    where?: Prisma.WorkAttachmentWhereInput;
    /**
     * Limit how many WorkAttachments to delete.
     */
    limit?: number;
};
/**
 * WorkAttachment without action
 */
export type WorkAttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkAttachment
     */
    select?: Prisma.WorkAttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorkAttachment
     */
    omit?: Prisma.WorkAttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorkAttachmentInclude<ExtArgs> | null;
};
//# sourceMappingURL=WorkAttachment.d.ts.map