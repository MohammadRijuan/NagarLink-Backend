import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model StaffLocation
 *
 */
export type StaffLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$StaffLocationPayload>;
export type AggregateStaffLocation = {
    _count: StaffLocationCountAggregateOutputType | null;
    _min: StaffLocationMinAggregateOutputType | null;
    _max: StaffLocationMaxAggregateOutputType | null;
};
export type StaffLocationMinAggregateOutputType = {
    id: string | null;
    division: string | null;
    address: string | null;
    staffId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffLocationMaxAggregateOutputType = {
    id: string | null;
    division: string | null;
    address: string | null;
    staffId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffLocationCountAggregateOutputType = {
    id: number;
    division: number;
    address: number;
    staffId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StaffLocationMinAggregateInputType = {
    id?: true;
    division?: true;
    address?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffLocationMaxAggregateInputType = {
    id?: true;
    division?: true;
    address?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffLocationCountAggregateInputType = {
    id?: true;
    division?: true;
    address?: true;
    staffId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StaffLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffLocation to aggregate.
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffLocations to fetch.
     */
    orderBy?: Prisma.StaffLocationOrderByWithRelationInput | Prisma.StaffLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StaffLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StaffLocations
    **/
    _count?: true | StaffLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StaffLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StaffLocationMaxAggregateInputType;
};
export type GetStaffLocationAggregateType<T extends StaffLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateStaffLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaffLocation[P]> : Prisma.GetScalarType<T[P], AggregateStaffLocation[P]>;
};
export type StaffLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffLocationWhereInput;
    orderBy?: Prisma.StaffLocationOrderByWithAggregationInput | Prisma.StaffLocationOrderByWithAggregationInput[];
    by: Prisma.StaffLocationScalarFieldEnum[] | Prisma.StaffLocationScalarFieldEnum;
    having?: Prisma.StaffLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffLocationCountAggregateInputType | true;
    _min?: StaffLocationMinAggregateInputType;
    _max?: StaffLocationMaxAggregateInputType;
};
export type StaffLocationGroupByOutputType = {
    id: string;
    division: string;
    address: string;
    staffId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: StaffLocationCountAggregateOutputType | null;
    _min: StaffLocationMinAggregateOutputType | null;
    _max: StaffLocationMaxAggregateOutputType | null;
};
export type GetStaffLocationGroupByPayload<T extends StaffLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffLocationGroupByOutputType[P]>;
}>>;
export type StaffLocationWhereInput = {
    AND?: Prisma.StaffLocationWhereInput | Prisma.StaffLocationWhereInput[];
    OR?: Prisma.StaffLocationWhereInput[];
    NOT?: Prisma.StaffLocationWhereInput | Prisma.StaffLocationWhereInput[];
    id?: Prisma.StringFilter<"StaffLocation"> | string;
    division?: Prisma.StringFilter<"StaffLocation"> | string;
    address?: Prisma.StringFilter<"StaffLocation"> | string;
    staffId?: Prisma.StringFilter<"StaffLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
    Staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type StaffLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Staff?: Prisma.UserOrderByWithRelationInput;
};
export type StaffLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StaffLocationWhereInput | Prisma.StaffLocationWhereInput[];
    OR?: Prisma.StaffLocationWhereInput[];
    NOT?: Prisma.StaffLocationWhereInput | Prisma.StaffLocationWhereInput[];
    division?: Prisma.StringFilter<"StaffLocation"> | string;
    address?: Prisma.StringFilter<"StaffLocation"> | string;
    staffId?: Prisma.StringFilter<"StaffLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
    Staff?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type StaffLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StaffLocationCountOrderByAggregateInput;
    _max?: Prisma.StaffLocationMaxOrderByAggregateInput;
    _min?: Prisma.StaffLocationMinOrderByAggregateInput;
};
export type StaffLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.StaffLocationScalarWhereWithAggregatesInput | Prisma.StaffLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.StaffLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StaffLocationScalarWhereWithAggregatesInput | Prisma.StaffLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StaffLocation"> | string;
    division?: Prisma.StringWithAggregatesFilter<"StaffLocation"> | string;
    address?: Prisma.StringWithAggregatesFilter<"StaffLocation"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"StaffLocation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StaffLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StaffLocation"> | Date | string;
};
export type StaffLocationCreateInput = {
    id?: string;
    division: string;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Staff: Prisma.UserCreateNestedOneWithoutStaffLocationInput;
};
export type StaffLocationUncheckedCreateInput = {
    id?: string;
    division: string;
    address: string;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Staff?: Prisma.UserUpdateOneRequiredWithoutStaffLocationNestedInput;
};
export type StaffLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationCreateManyInput = {
    id?: string;
    division: string;
    address: string;
    staffId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    division?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffLocationListRelationFilter = {
    every?: Prisma.StaffLocationWhereInput;
    some?: Prisma.StaffLocationWhereInput;
    none?: Prisma.StaffLocationWhereInput;
};
export type StaffLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StaffLocationCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput> | Prisma.StaffLocationCreateWithoutStaffInput[] | Prisma.StaffLocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffLocationCreateOrConnectWithoutStaffInput | Prisma.StaffLocationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.StaffLocationCreateManyStaffInputEnvelope;
    connect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
};
export type StaffLocationUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput> | Prisma.StaffLocationCreateWithoutStaffInput[] | Prisma.StaffLocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffLocationCreateOrConnectWithoutStaffInput | Prisma.StaffLocationCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.StaffLocationCreateManyStaffInputEnvelope;
    connect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
};
export type StaffLocationUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput> | Prisma.StaffLocationCreateWithoutStaffInput[] | Prisma.StaffLocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffLocationCreateOrConnectWithoutStaffInput | Prisma.StaffLocationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.StaffLocationUpsertWithWhereUniqueWithoutStaffInput | Prisma.StaffLocationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.StaffLocationCreateManyStaffInputEnvelope;
    set?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    disconnect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    delete?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    connect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    update?: Prisma.StaffLocationUpdateWithWhereUniqueWithoutStaffInput | Prisma.StaffLocationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.StaffLocationUpdateManyWithWhereWithoutStaffInput | Prisma.StaffLocationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.StaffLocationScalarWhereInput | Prisma.StaffLocationScalarWhereInput[];
};
export type StaffLocationUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput> | Prisma.StaffLocationCreateWithoutStaffInput[] | Prisma.StaffLocationUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.StaffLocationCreateOrConnectWithoutStaffInput | Prisma.StaffLocationCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.StaffLocationUpsertWithWhereUniqueWithoutStaffInput | Prisma.StaffLocationUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.StaffLocationCreateManyStaffInputEnvelope;
    set?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    disconnect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    delete?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    connect?: Prisma.StaffLocationWhereUniqueInput | Prisma.StaffLocationWhereUniqueInput[];
    update?: Prisma.StaffLocationUpdateWithWhereUniqueWithoutStaffInput | Prisma.StaffLocationUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.StaffLocationUpdateManyWithWhereWithoutStaffInput | Prisma.StaffLocationUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.StaffLocationScalarWhereInput | Prisma.StaffLocationScalarWhereInput[];
};
export type StaffLocationCreateWithoutStaffInput = {
    id?: string;
    division: string;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffLocationUncheckedCreateWithoutStaffInput = {
    id?: string;
    division: string;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffLocationCreateOrConnectWithoutStaffInput = {
    where: Prisma.StaffLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput>;
};
export type StaffLocationCreateManyStaffInputEnvelope = {
    data: Prisma.StaffLocationCreateManyStaffInput | Prisma.StaffLocationCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type StaffLocationUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.StaffLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffLocationUpdateWithoutStaffInput, Prisma.StaffLocationUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.StaffLocationCreateWithoutStaffInput, Prisma.StaffLocationUncheckedCreateWithoutStaffInput>;
};
export type StaffLocationUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.StaffLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffLocationUpdateWithoutStaffInput, Prisma.StaffLocationUncheckedUpdateWithoutStaffInput>;
};
export type StaffLocationUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.StaffLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffLocationUpdateManyMutationInput, Prisma.StaffLocationUncheckedUpdateManyWithoutStaffInput>;
};
export type StaffLocationScalarWhereInput = {
    AND?: Prisma.StaffLocationScalarWhereInput | Prisma.StaffLocationScalarWhereInput[];
    OR?: Prisma.StaffLocationScalarWhereInput[];
    NOT?: Prisma.StaffLocationScalarWhereInput | Prisma.StaffLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"StaffLocation"> | string;
    division?: Prisma.StringFilter<"StaffLocation"> | string;
    address?: Prisma.StringFilter<"StaffLocation"> | string;
    staffId?: Prisma.StringFilter<"StaffLocation"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffLocation"> | Date | string;
};
export type StaffLocationCreateManyStaffInput = {
    id?: string;
    division: string;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffLocationUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationUncheckedUpdateManyWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    division?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    division?: boolean;
    address?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffLocation"]>;
export type StaffLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    division?: boolean;
    address?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffLocation"]>;
export type StaffLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    division?: boolean;
    address?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffLocation"]>;
export type StaffLocationSelectScalar = {
    id?: boolean;
    division?: boolean;
    address?: boolean;
    staffId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StaffLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "division" | "address" | "staffId" | "createdAt" | "updatedAt", ExtArgs["result"]["staffLocation"]>;
export type StaffLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StaffLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StaffLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Staff?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $StaffLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StaffLocation";
    objects: {
        Staff: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        division: string;
        address: string;
        staffId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["staffLocation"]>;
    composites: {};
};
export type StaffLocationGetPayload<S extends boolean | null | undefined | StaffLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload, S>;
export type StaffLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StaffLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffLocationCountAggregateInputType | true;
};
export interface StaffLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StaffLocation'];
        meta: {
            name: 'StaffLocation';
        };
    };
    /**
     * Find zero or one StaffLocation that matches the filter.
     * @param {StaffLocationFindUniqueArgs} args - Arguments to find a StaffLocation
     * @example
     * // Get one StaffLocation
     * const staffLocation = await prisma.staffLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, StaffLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StaffLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffLocationFindUniqueOrThrowArgs} args - Arguments to find a StaffLocation
     * @example
     * // Get one StaffLocation
     * const staffLocation = await prisma.staffLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StaffLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationFindFirstArgs} args - Arguments to find a StaffLocation
     * @example
     * // Get one StaffLocation
     * const staffLocation = await prisma.staffLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, StaffLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationFindFirstOrThrowArgs} args - Arguments to find a StaffLocation
     * @example
     * // Get one StaffLocation
     * const staffLocation = await prisma.staffLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StaffLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StaffLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffLocations
     * const staffLocations = await prisma.staffLocation.findMany()
     *
     * // Get first 10 StaffLocations
     * const staffLocations = await prisma.staffLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staffLocationWithIdOnly = await prisma.staffLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StaffLocationFindManyArgs>(args?: Prisma.SelectSubset<T, StaffLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StaffLocation.
     * @param {StaffLocationCreateArgs} args - Arguments to create a StaffLocation.
     * @example
     * // Create one StaffLocation
     * const StaffLocation = await prisma.staffLocation.create({
     *   data: {
     *     // ... data to create a StaffLocation
     *   }
     * })
     *
     */
    create<T extends StaffLocationCreateArgs>(args: Prisma.SelectSubset<T, StaffLocationCreateArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StaffLocations.
     * @param {StaffLocationCreateManyArgs} args - Arguments to create many StaffLocations.
     * @example
     * // Create many StaffLocations
     * const staffLocation = await prisma.staffLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StaffLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, StaffLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StaffLocations and returns the data saved in the database.
     * @param {StaffLocationCreateManyAndReturnArgs} args - Arguments to create many StaffLocations.
     * @example
     * // Create many StaffLocations
     * const staffLocation = await prisma.staffLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StaffLocations and only return the `id`
     * const staffLocationWithIdOnly = await prisma.staffLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StaffLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StaffLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StaffLocation.
     * @param {StaffLocationDeleteArgs} args - Arguments to delete one StaffLocation.
     * @example
     * // Delete one StaffLocation
     * const StaffLocation = await prisma.staffLocation.delete({
     *   where: {
     *     // ... filter to delete one StaffLocation
     *   }
     * })
     *
     */
    delete<T extends StaffLocationDeleteArgs>(args: Prisma.SelectSubset<T, StaffLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StaffLocation.
     * @param {StaffLocationUpdateArgs} args - Arguments to update one StaffLocation.
     * @example
     * // Update one StaffLocation
     * const staffLocation = await prisma.staffLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StaffLocationUpdateArgs>(args: Prisma.SelectSubset<T, StaffLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StaffLocations.
     * @param {StaffLocationDeleteManyArgs} args - Arguments to filter StaffLocations to delete.
     * @example
     * // Delete a few StaffLocations
     * const { count } = await prisma.staffLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StaffLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, StaffLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffLocations
     * const staffLocation = await prisma.staffLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StaffLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, StaffLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffLocations and returns the data updated in the database.
     * @param {StaffLocationUpdateManyAndReturnArgs} args - Arguments to update many StaffLocations.
     * @example
     * // Update many StaffLocations
     * const staffLocation = await prisma.staffLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StaffLocations and only return the `id`
     * const staffLocationWithIdOnly = await prisma.staffLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StaffLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StaffLocation.
     * @param {StaffLocationUpsertArgs} args - Arguments to update or create a StaffLocation.
     * @example
     * // Update or create a StaffLocation
     * const staffLocation = await prisma.staffLocation.upsert({
     *   create: {
     *     // ... data to create a StaffLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffLocation we want to update
     *   }
     * })
     */
    upsert<T extends StaffLocationUpsertArgs>(args: Prisma.SelectSubset<T, StaffLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__StaffLocationClient<runtime.Types.Result.GetResult<Prisma.$StaffLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StaffLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationCountArgs} args - Arguments to filter StaffLocations to count.
     * @example
     * // Count the number of StaffLocations
     * const count = await prisma.staffLocation.count({
     *   where: {
     *     // ... the filter for the StaffLocations we want to count
     *   }
     * })
    **/
    count<T extends StaffLocationCountArgs>(args?: Prisma.Subset<T, StaffLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StaffLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffLocationAggregateArgs>(args: Prisma.Subset<T, StaffLocationAggregateArgs>): Prisma.PrismaPromise<GetStaffLocationAggregateType<T>>;
    /**
     * Group by StaffLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StaffLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StaffLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: StaffLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StaffLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StaffLocation model
     */
    readonly fields: StaffLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StaffLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StaffLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Staff<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the StaffLocation model
 */
export interface StaffLocationFieldRefs {
    readonly id: Prisma.FieldRef<"StaffLocation", 'String'>;
    readonly division: Prisma.FieldRef<"StaffLocation", 'String'>;
    readonly address: Prisma.FieldRef<"StaffLocation", 'String'>;
    readonly staffId: Prisma.FieldRef<"StaffLocation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StaffLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StaffLocation", 'DateTime'>;
}
/**
 * StaffLocation findUnique
 */
export type StaffLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffLocation to fetch.
     */
    where: Prisma.StaffLocationWhereUniqueInput;
};
/**
 * StaffLocation findUniqueOrThrow
 */
export type StaffLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffLocation to fetch.
     */
    where: Prisma.StaffLocationWhereUniqueInput;
};
/**
 * StaffLocation findFirst
 */
export type StaffLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffLocation to fetch.
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffLocations to fetch.
     */
    orderBy?: Prisma.StaffLocationOrderByWithRelationInput | Prisma.StaffLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffLocations.
     */
    cursor?: Prisma.StaffLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffLocations.
     */
    distinct?: Prisma.StaffLocationScalarFieldEnum | Prisma.StaffLocationScalarFieldEnum[];
};
/**
 * StaffLocation findFirstOrThrow
 */
export type StaffLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffLocation to fetch.
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffLocations to fetch.
     */
    orderBy?: Prisma.StaffLocationOrderByWithRelationInput | Prisma.StaffLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffLocations.
     */
    cursor?: Prisma.StaffLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffLocations.
     */
    distinct?: Prisma.StaffLocationScalarFieldEnum | Prisma.StaffLocationScalarFieldEnum[];
};
/**
 * StaffLocation findMany
 */
export type StaffLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffLocations to fetch.
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffLocations to fetch.
     */
    orderBy?: Prisma.StaffLocationOrderByWithRelationInput | Prisma.StaffLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StaffLocations.
     */
    cursor?: Prisma.StaffLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffLocations.
     */
    distinct?: Prisma.StaffLocationScalarFieldEnum | Prisma.StaffLocationScalarFieldEnum[];
};
/**
 * StaffLocation create
 */
export type StaffLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a StaffLocation.
     */
    data: Prisma.XOR<Prisma.StaffLocationCreateInput, Prisma.StaffLocationUncheckedCreateInput>;
};
/**
 * StaffLocation createMany
 */
export type StaffLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffLocations.
     */
    data: Prisma.StaffLocationCreateManyInput | Prisma.StaffLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StaffLocation createManyAndReturn
 */
export type StaffLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many StaffLocations.
     */
    data: Prisma.StaffLocationCreateManyInput | Prisma.StaffLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffLocation update
 */
export type StaffLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a StaffLocation.
     */
    data: Prisma.XOR<Prisma.StaffLocationUpdateInput, Prisma.StaffLocationUncheckedUpdateInput>;
    /**
     * Choose, which StaffLocation to update.
     */
    where: Prisma.StaffLocationWhereUniqueInput;
};
/**
 * StaffLocation updateMany
 */
export type StaffLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffLocations.
     */
    data: Prisma.XOR<Prisma.StaffLocationUpdateManyMutationInput, Prisma.StaffLocationUncheckedUpdateManyInput>;
    /**
     * Filter which StaffLocations to update
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * Limit how many StaffLocations to update.
     */
    limit?: number;
};
/**
 * StaffLocation updateManyAndReturn
 */
export type StaffLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * The data used to update StaffLocations.
     */
    data: Prisma.XOR<Prisma.StaffLocationUpdateManyMutationInput, Prisma.StaffLocationUncheckedUpdateManyInput>;
    /**
     * Filter which StaffLocations to update
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * Limit how many StaffLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffLocation upsert
 */
export type StaffLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the StaffLocation to update in case it exists.
     */
    where: Prisma.StaffLocationWhereUniqueInput;
    /**
     * In case the StaffLocation found by the `where` argument doesn't exist, create a new StaffLocation with this data.
     */
    create: Prisma.XOR<Prisma.StaffLocationCreateInput, Prisma.StaffLocationUncheckedCreateInput>;
    /**
     * In case the StaffLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StaffLocationUpdateInput, Prisma.StaffLocationUncheckedUpdateInput>;
};
/**
 * StaffLocation delete
 */
export type StaffLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
    /**
     * Filter which StaffLocation to delete.
     */
    where: Prisma.StaffLocationWhereUniqueInput;
};
/**
 * StaffLocation deleteMany
 */
export type StaffLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffLocations to delete
     */
    where?: Prisma.StaffLocationWhereInput;
    /**
     * Limit how many StaffLocations to delete.
     */
    limit?: number;
};
/**
 * StaffLocation without action
 */
export type StaffLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLocation
     */
    select?: Prisma.StaffLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffLocation
     */
    omit?: Prisma.StaffLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffLocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=StaffLocation.d.ts.map