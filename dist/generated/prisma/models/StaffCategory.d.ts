import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model StaffCategory
 *
 */
export type StaffCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$StaffCategoryPayload>;
export type AggregateStaffCategory = {
    _count: StaffCategoryCountAggregateOutputType | null;
    _min: StaffCategoryMinAggregateOutputType | null;
    _max: StaffCategoryMaxAggregateOutputType | null;
};
export type StaffCategoryMinAggregateOutputType = {
    id: string | null;
    staffId: string | null;
    categoryId: string | null;
};
export type StaffCategoryMaxAggregateOutputType = {
    id: string | null;
    staffId: string | null;
    categoryId: string | null;
};
export type StaffCategoryCountAggregateOutputType = {
    id: number;
    staffId: number;
    categoryId: number;
    _all: number;
};
export type StaffCategoryMinAggregateInputType = {
    id?: true;
    staffId?: true;
    categoryId?: true;
};
export type StaffCategoryMaxAggregateInputType = {
    id?: true;
    staffId?: true;
    categoryId?: true;
};
export type StaffCategoryCountAggregateInputType = {
    id?: true;
    staffId?: true;
    categoryId?: true;
    _all?: true;
};
export type StaffCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffCategory to aggregate.
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffCategories to fetch.
     */
    orderBy?: Prisma.StaffCategoryOrderByWithRelationInput | Prisma.StaffCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StaffCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StaffCategories
    **/
    _count?: true | StaffCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StaffCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StaffCategoryMaxAggregateInputType;
};
export type GetStaffCategoryAggregateType<T extends StaffCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateStaffCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaffCategory[P]> : Prisma.GetScalarType<T[P], AggregateStaffCategory[P]>;
};
export type StaffCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffCategoryWhereInput;
    orderBy?: Prisma.StaffCategoryOrderByWithAggregationInput | Prisma.StaffCategoryOrderByWithAggregationInput[];
    by: Prisma.StaffCategoryScalarFieldEnum[] | Prisma.StaffCategoryScalarFieldEnum;
    having?: Prisma.StaffCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffCategoryCountAggregateInputType | true;
    _min?: StaffCategoryMinAggregateInputType;
    _max?: StaffCategoryMaxAggregateInputType;
};
export type StaffCategoryGroupByOutputType = {
    id: string;
    staffId: string;
    categoryId: string;
    _count: StaffCategoryCountAggregateOutputType | null;
    _min: StaffCategoryMinAggregateOutputType | null;
    _max: StaffCategoryMaxAggregateOutputType | null;
};
export type GetStaffCategoryGroupByPayload<T extends StaffCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffCategoryGroupByOutputType[P]>;
}>>;
export type StaffCategoryWhereInput = {
    AND?: Prisma.StaffCategoryWhereInput | Prisma.StaffCategoryWhereInput[];
    OR?: Prisma.StaffCategoryWhereInput[];
    NOT?: Prisma.StaffCategoryWhereInput | Prisma.StaffCategoryWhereInput[];
    id?: Prisma.StringFilter<"StaffCategory"> | string;
    staffId?: Prisma.StringFilter<"StaffCategory"> | string;
    categoryId?: Prisma.StringFilter<"StaffCategory"> | string;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
};
export type StaffCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    staff?: Prisma.UserOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
};
export type StaffCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StaffCategoryWhereInput | Prisma.StaffCategoryWhereInput[];
    OR?: Prisma.StaffCategoryWhereInput[];
    NOT?: Prisma.StaffCategoryWhereInput | Prisma.StaffCategoryWhereInput[];
    staffId?: Prisma.StringFilter<"StaffCategory"> | string;
    categoryId?: Prisma.StringFilter<"StaffCategory"> | string;
    staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
}, "id">;
export type StaffCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    _count?: Prisma.StaffCategoryCountOrderByAggregateInput;
    _max?: Prisma.StaffCategoryMaxOrderByAggregateInput;
    _min?: Prisma.StaffCategoryMinOrderByAggregateInput;
};
export type StaffCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.StaffCategoryScalarWhereWithAggregatesInput | Prisma.StaffCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.StaffCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StaffCategoryScalarWhereWithAggregatesInput | Prisma.StaffCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StaffCategory"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"StaffCategory"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"StaffCategory"> | string;
};
export type StaffCategoryCreateInput = {
    id?: string;
    staff: Prisma.UserCreateNestedOneWithoutStaffCategoriesInput;
    category: Prisma.CategoryCreateNestedOneWithoutStaffCategoriesInput;
};
export type StaffCategoryUncheckedCreateInput = {
    id?: string;
    staffId: string;
    categoryId: string;
};
export type StaffCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaffCategoriesNestedInput;
    category?: Prisma.CategoryUpdateOneRequiredWithoutStaffCategoriesNestedInput;
};
export type StaffCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryCreateManyInput = {
    id?: string;
    staffId: string;
    categoryId: string;
};
export type StaffCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryListRelationFilter = {
    every?: Prisma.StaffCategoryWhereInput;
    some?: Prisma.StaffCategoryWhereInput;
    none?: Prisma.StaffCategoryWhereInput;
};
export type StaffCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StaffCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type StaffCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type StaffCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type StaffCategoryCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput> | Prisma.StaffCategoryCreateWithoutCategoryInput[] | Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput | Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.StaffCategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
};
export type StaffCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput> | Prisma.StaffCategoryCreateWithoutCategoryInput[] | Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput | Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.StaffCategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
};
export type StaffCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput> | Prisma.StaffCategoryCreateWithoutCategoryInput[] | Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput | Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.StaffCategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.StaffCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.StaffCategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    disconnect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    delete?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    update?: Prisma.StaffCategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.StaffCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.StaffCategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.StaffCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
};
export type StaffCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput> | Prisma.StaffCategoryCreateWithoutCategoryInput[] | Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput | Prisma.StaffCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.StaffCategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.StaffCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.StaffCategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    disconnect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    delete?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    update?: Prisma.StaffCategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.StaffCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.StaffCategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.StaffCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
};
export type StaffCategoryCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput> | Prisma.StaffCategoryCreateWithoutStaffInput[] | Prisma.StaffCategoryUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutStaffInput | Prisma.StaffCategoryCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.StaffCategoryCreateManyStaffInputEnvelope;
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
};
export type StaffCategoryUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput> | Prisma.StaffCategoryCreateWithoutStaffInput[] | Prisma.StaffCategoryUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutStaffInput | Prisma.StaffCategoryCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.StaffCategoryCreateManyStaffInputEnvelope;
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
};
export type StaffCategoryUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput> | Prisma.StaffCategoryCreateWithoutStaffInput[] | Prisma.StaffCategoryUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutStaffInput | Prisma.StaffCategoryCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.StaffCategoryUpsertWithWhereUniqueWithoutStaffInput | Prisma.StaffCategoryUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.StaffCategoryCreateManyStaffInputEnvelope;
    set?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    disconnect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    delete?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    update?: Prisma.StaffCategoryUpdateWithWhereUniqueWithoutStaffInput | Prisma.StaffCategoryUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.StaffCategoryUpdateManyWithWhereWithoutStaffInput | Prisma.StaffCategoryUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
};
export type StaffCategoryUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput> | Prisma.StaffCategoryCreateWithoutStaffInput[] | Prisma.StaffCategoryUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffCategoryCreateOrConnectWithoutStaffInput | Prisma.StaffCategoryCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.StaffCategoryUpsertWithWhereUniqueWithoutStaffInput | Prisma.StaffCategoryUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.StaffCategoryCreateManyStaffInputEnvelope;
    set?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    disconnect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    delete?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    connect?: Prisma.StaffCategoryWhereUniqueInput | Prisma.StaffCategoryWhereUniqueInput[];
    update?: Prisma.StaffCategoryUpdateWithWhereUniqueWithoutStaffInput | Prisma.StaffCategoryUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.StaffCategoryUpdateManyWithWhereWithoutStaffInput | Prisma.StaffCategoryUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
};
export type StaffCategoryCreateWithoutCategoryInput = {
    id?: string;
    staff: Prisma.UserCreateNestedOneWithoutStaffCategoriesInput;
};
export type StaffCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string;
    staffId: string;
};
export type StaffCategoryCreateOrConnectWithoutCategoryInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput>;
};
export type StaffCategoryCreateManyCategoryInputEnvelope = {
    data: Prisma.StaffCategoryCreateManyCategoryInput | Prisma.StaffCategoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type StaffCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffCategoryUpdateWithoutCategoryInput, Prisma.StaffCategoryUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.StaffCategoryCreateWithoutCategoryInput, Prisma.StaffCategoryUncheckedCreateWithoutCategoryInput>;
};
export type StaffCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffCategoryUpdateWithoutCategoryInput, Prisma.StaffCategoryUncheckedUpdateWithoutCategoryInput>;
};
export type StaffCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.StaffCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffCategoryUpdateManyMutationInput, Prisma.StaffCategoryUncheckedUpdateManyWithoutCategoryInput>;
};
export type StaffCategoryScalarWhereInput = {
    AND?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
    OR?: Prisma.StaffCategoryScalarWhereInput[];
    NOT?: Prisma.StaffCategoryScalarWhereInput | Prisma.StaffCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"StaffCategory"> | string;
    staffId?: Prisma.StringFilter<"StaffCategory"> | string;
    categoryId?: Prisma.StringFilter<"StaffCategory"> | string;
};
export type StaffCategoryCreateWithoutStaffInput = {
    id?: string;
    category: Prisma.CategoryCreateNestedOneWithoutStaffCategoriesInput;
};
export type StaffCategoryUncheckedCreateWithoutStaffInput = {
    id?: string;
    categoryId: string;
};
export type StaffCategoryCreateOrConnectWithoutStaffInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput>;
};
export type StaffCategoryCreateManyStaffInputEnvelope = {
    data: Prisma.StaffCategoryCreateManyStaffInput | Prisma.StaffCategoryCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type StaffCategoryUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffCategoryUpdateWithoutStaffInput, Prisma.StaffCategoryUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.StaffCategoryCreateWithoutStaffInput, Prisma.StaffCategoryUncheckedCreateWithoutStaffInput>;
};
export type StaffCategoryUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.StaffCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffCategoryUpdateWithoutStaffInput, Prisma.StaffCategoryUncheckedUpdateWithoutStaffInput>;
};
export type StaffCategoryUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.StaffCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffCategoryUpdateManyMutationInput, Prisma.StaffCategoryUncheckedUpdateManyWithoutStaffInput>;
};
export type StaffCategoryCreateManyCategoryInput = {
    id?: string;
    staffId: string;
};
export type StaffCategoryUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staff?: Prisma.UserUpdateOneRequiredWithoutStaffCategoriesNestedInput;
};
export type StaffCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryCreateManyStaffInput = {
    id?: string;
    categoryId: string;
};
export type StaffCategoryUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutStaffCategoriesNestedInput;
};
export type StaffCategoryUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategoryUncheckedUpdateManyWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StaffCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    categoryId?: boolean;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffCategory"]>;
export type StaffCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    categoryId?: boolean;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffCategory"]>;
export type StaffCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    categoryId?: boolean;
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffCategory"]>;
export type StaffCategorySelectScalar = {
    id?: boolean;
    staffId?: boolean;
    categoryId?: boolean;
};
export type StaffCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "staffId" | "categoryId", ExtArgs["result"]["staffCategory"]>;
export type StaffCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type StaffCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type StaffCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $StaffCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StaffCategory";
    objects: {
        staff: Prisma.$UserPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        staffId: string;
        categoryId: string;
    }, ExtArgs["result"]["staffCategory"]>;
    composites: {};
};
export type StaffCategoryGetPayload<S extends boolean | null | undefined | StaffCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload, S>;
export type StaffCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StaffCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffCategoryCountAggregateInputType | true;
};
export interface StaffCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StaffCategory'];
        meta: {
            name: 'StaffCategory';
        };
    };
    /**
     * Find zero or one StaffCategory that matches the filter.
     * @param {StaffCategoryFindUniqueArgs} args - Arguments to find a StaffCategory
     * @example
     * // Get one StaffCategory
     * const staffCategory = await prisma.staffCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, StaffCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StaffCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffCategoryFindUniqueOrThrowArgs} args - Arguments to find a StaffCategory
     * @example
     * // Get one StaffCategory
     * const staffCategory = await prisma.staffCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StaffCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryFindFirstArgs} args - Arguments to find a StaffCategory
     * @example
     * // Get one StaffCategory
     * const staffCategory = await prisma.staffCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, StaffCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryFindFirstOrThrowArgs} args - Arguments to find a StaffCategory
     * @example
     * // Get one StaffCategory
     * const staffCategory = await prisma.staffCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StaffCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StaffCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffCategories
     * const staffCategories = await prisma.staffCategory.findMany()
     *
     * // Get first 10 StaffCategories
     * const staffCategories = await prisma.staffCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staffCategoryWithIdOnly = await prisma.staffCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StaffCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, StaffCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StaffCategory.
     * @param {StaffCategoryCreateArgs} args - Arguments to create a StaffCategory.
     * @example
     * // Create one StaffCategory
     * const StaffCategory = await prisma.staffCategory.create({
     *   data: {
     *     // ... data to create a StaffCategory
     *   }
     * })
     *
     */
    create<T extends StaffCategoryCreateArgs>(args: Prisma.SelectSubset<T, StaffCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StaffCategories.
     * @param {StaffCategoryCreateManyArgs} args - Arguments to create many StaffCategories.
     * @example
     * // Create many StaffCategories
     * const staffCategory = await prisma.staffCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StaffCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, StaffCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StaffCategories and returns the data saved in the database.
     * @param {StaffCategoryCreateManyAndReturnArgs} args - Arguments to create many StaffCategories.
     * @example
     * // Create many StaffCategories
     * const staffCategory = await prisma.staffCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StaffCategories and only return the `id`
     * const staffCategoryWithIdOnly = await prisma.staffCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StaffCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StaffCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StaffCategory.
     * @param {StaffCategoryDeleteArgs} args - Arguments to delete one StaffCategory.
     * @example
     * // Delete one StaffCategory
     * const StaffCategory = await prisma.staffCategory.delete({
     *   where: {
     *     // ... filter to delete one StaffCategory
     *   }
     * })
     *
     */
    delete<T extends StaffCategoryDeleteArgs>(args: Prisma.SelectSubset<T, StaffCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StaffCategory.
     * @param {StaffCategoryUpdateArgs} args - Arguments to update one StaffCategory.
     * @example
     * // Update one StaffCategory
     * const staffCategory = await prisma.staffCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StaffCategoryUpdateArgs>(args: Prisma.SelectSubset<T, StaffCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StaffCategories.
     * @param {StaffCategoryDeleteManyArgs} args - Arguments to filter StaffCategories to delete.
     * @example
     * // Delete a few StaffCategories
     * const { count } = await prisma.staffCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StaffCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, StaffCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffCategories
     * const staffCategory = await prisma.staffCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StaffCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, StaffCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffCategories and returns the data updated in the database.
     * @param {StaffCategoryUpdateManyAndReturnArgs} args - Arguments to update many StaffCategories.
     * @example
     * // Update many StaffCategories
     * const staffCategory = await prisma.staffCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StaffCategories and only return the `id`
     * const staffCategoryWithIdOnly = await prisma.staffCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StaffCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StaffCategory.
     * @param {StaffCategoryUpsertArgs} args - Arguments to update or create a StaffCategory.
     * @example
     * // Update or create a StaffCategory
     * const staffCategory = await prisma.staffCategory.upsert({
     *   create: {
     *     // ... data to create a StaffCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffCategory we want to update
     *   }
     * })
     */
    upsert<T extends StaffCategoryUpsertArgs>(args: Prisma.SelectSubset<T, StaffCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__StaffCategoryClient<runtime.Types.Result.GetResult<Prisma.$StaffCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StaffCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryCountArgs} args - Arguments to filter StaffCategories to count.
     * @example
     * // Count the number of StaffCategories
     * const count = await prisma.staffCategory.count({
     *   where: {
     *     // ... the filter for the StaffCategories we want to count
     *   }
     * })
    **/
    count<T extends StaffCategoryCountArgs>(args?: Prisma.Subset<T, StaffCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StaffCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffCategoryAggregateArgs>(args: Prisma.Subset<T, StaffCategoryAggregateArgs>): Prisma.PrismaPromise<GetStaffCategoryAggregateType<T>>;
    /**
     * Group by StaffCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StaffCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StaffCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: StaffCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StaffCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StaffCategory model
     */
    readonly fields: StaffCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StaffCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StaffCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    staff<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the StaffCategory model
 */
export interface StaffCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"StaffCategory", 'String'>;
    readonly staffId: Prisma.FieldRef<"StaffCategory", 'String'>;
    readonly categoryId: Prisma.FieldRef<"StaffCategory", 'String'>;
}
/**
 * StaffCategory findUnique
 */
export type StaffCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which StaffCategory to fetch.
     */
    where: Prisma.StaffCategoryWhereUniqueInput;
};
/**
 * StaffCategory findUniqueOrThrow
 */
export type StaffCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which StaffCategory to fetch.
     */
    where: Prisma.StaffCategoryWhereUniqueInput;
};
/**
 * StaffCategory findFirst
 */
export type StaffCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which StaffCategory to fetch.
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffCategories to fetch.
     */
    orderBy?: Prisma.StaffCategoryOrderByWithRelationInput | Prisma.StaffCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffCategories.
     */
    cursor?: Prisma.StaffCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffCategories.
     */
    distinct?: Prisma.StaffCategoryScalarFieldEnum | Prisma.StaffCategoryScalarFieldEnum[];
};
/**
 * StaffCategory findFirstOrThrow
 */
export type StaffCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which StaffCategory to fetch.
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffCategories to fetch.
     */
    orderBy?: Prisma.StaffCategoryOrderByWithRelationInput | Prisma.StaffCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffCategories.
     */
    cursor?: Prisma.StaffCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffCategories.
     */
    distinct?: Prisma.StaffCategoryScalarFieldEnum | Prisma.StaffCategoryScalarFieldEnum[];
};
/**
 * StaffCategory findMany
 */
export type StaffCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which StaffCategories to fetch.
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffCategories to fetch.
     */
    orderBy?: Prisma.StaffCategoryOrderByWithRelationInput | Prisma.StaffCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StaffCategories.
     */
    cursor?: Prisma.StaffCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffCategories.
     */
    distinct?: Prisma.StaffCategoryScalarFieldEnum | Prisma.StaffCategoryScalarFieldEnum[];
};
/**
 * StaffCategory create
 */
export type StaffCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a StaffCategory.
     */
    data: Prisma.XOR<Prisma.StaffCategoryCreateInput, Prisma.StaffCategoryUncheckedCreateInput>;
};
/**
 * StaffCategory createMany
 */
export type StaffCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffCategories.
     */
    data: Prisma.StaffCategoryCreateManyInput | Prisma.StaffCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StaffCategory createManyAndReturn
 */
export type StaffCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many StaffCategories.
     */
    data: Prisma.StaffCategoryCreateManyInput | Prisma.StaffCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffCategory update
 */
export type StaffCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a StaffCategory.
     */
    data: Prisma.XOR<Prisma.StaffCategoryUpdateInput, Prisma.StaffCategoryUncheckedUpdateInput>;
    /**
     * Choose, which StaffCategory to update.
     */
    where: Prisma.StaffCategoryWhereUniqueInput;
};
/**
 * StaffCategory updateMany
 */
export type StaffCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffCategories.
     */
    data: Prisma.XOR<Prisma.StaffCategoryUpdateManyMutationInput, Prisma.StaffCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which StaffCategories to update
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * Limit how many StaffCategories to update.
     */
    limit?: number;
};
/**
 * StaffCategory updateManyAndReturn
 */
export type StaffCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update StaffCategories.
     */
    data: Prisma.XOR<Prisma.StaffCategoryUpdateManyMutationInput, Prisma.StaffCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which StaffCategories to update
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * Limit how many StaffCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffCategory upsert
 */
export type StaffCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the StaffCategory to update in case it exists.
     */
    where: Prisma.StaffCategoryWhereUniqueInput;
    /**
     * In case the StaffCategory found by the `where` argument doesn't exist, create a new StaffCategory with this data.
     */
    create: Prisma.XOR<Prisma.StaffCategoryCreateInput, Prisma.StaffCategoryUncheckedCreateInput>;
    /**
     * In case the StaffCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StaffCategoryUpdateInput, Prisma.StaffCategoryUncheckedUpdateInput>;
};
/**
 * StaffCategory delete
 */
export type StaffCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
    /**
     * Filter which StaffCategory to delete.
     */
    where: Prisma.StaffCategoryWhereUniqueInput;
};
/**
 * StaffCategory deleteMany
 */
export type StaffCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffCategories to delete
     */
    where?: Prisma.StaffCategoryWhereInput;
    /**
     * Limit how many StaffCategories to delete.
     */
    limit?: number;
};
/**
 * StaffCategory without action
 */
export type StaffCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCategory
     */
    select?: Prisma.StaffCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffCategory
     */
    omit?: Prisma.StaffCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffCategoryInclude<ExtArgs> | null;
};
//# sourceMappingURL=StaffCategory.d.ts.map