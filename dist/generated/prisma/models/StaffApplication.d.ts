import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model StaffApplication
 *
 */
export type StaffApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$StaffApplicationPayload>;
export type AggregateStaffApplication = {
    _count: StaffApplicationCountAggregateOutputType | null;
    _avg: StaffApplicationAvgAggregateOutputType | null;
    _sum: StaffApplicationSumAggregateOutputType | null;
    _min: StaffApplicationMinAggregateOutputType | null;
    _max: StaffApplicationMaxAggregateOutputType | null;
};
export type StaffApplicationAvgAggregateOutputType = {
    experience: number | null;
};
export type StaffApplicationSumAggregateOutputType = {
    experience: number | null;
};
export type StaffApplicationMinAggregateOutputType = {
    id: string | null;
    experience: number | null;
    status: $Enums.StaffApplicationStatus | null;
    applicantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffApplicationMaxAggregateOutputType = {
    id: string | null;
    experience: number | null;
    status: $Enums.StaffApplicationStatus | null;
    applicantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffApplicationCountAggregateOutputType = {
    id: number;
    experience: number;
    status: number;
    applicantId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StaffApplicationAvgAggregateInputType = {
    experience?: true;
};
export type StaffApplicationSumAggregateInputType = {
    experience?: true;
};
export type StaffApplicationMinAggregateInputType = {
    id?: true;
    experience?: true;
    status?: true;
    applicantId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffApplicationMaxAggregateInputType = {
    id?: true;
    experience?: true;
    status?: true;
    applicantId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffApplicationCountAggregateInputType = {
    id?: true;
    experience?: true;
    status?: true;
    applicantId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StaffApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffApplication to aggregate.
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffApplications to fetch.
     */
    orderBy?: Prisma.StaffApplicationOrderByWithRelationInput | Prisma.StaffApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StaffApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StaffApplications
    **/
    _count?: true | StaffApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StaffApplicationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StaffApplicationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StaffApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StaffApplicationMaxAggregateInputType;
};
export type GetStaffApplicationAggregateType<T extends StaffApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateStaffApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaffApplication[P]> : Prisma.GetScalarType<T[P], AggregateStaffApplication[P]>;
};
export type StaffApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffApplicationWhereInput;
    orderBy?: Prisma.StaffApplicationOrderByWithAggregationInput | Prisma.StaffApplicationOrderByWithAggregationInput[];
    by: Prisma.StaffApplicationScalarFieldEnum[] | Prisma.StaffApplicationScalarFieldEnum;
    having?: Prisma.StaffApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffApplicationCountAggregateInputType | true;
    _avg?: StaffApplicationAvgAggregateInputType;
    _sum?: StaffApplicationSumAggregateInputType;
    _min?: StaffApplicationMinAggregateInputType;
    _max?: StaffApplicationMaxAggregateInputType;
};
export type StaffApplicationGroupByOutputType = {
    id: string;
    experience: number;
    status: $Enums.StaffApplicationStatus;
    applicantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: StaffApplicationCountAggregateOutputType | null;
    _avg: StaffApplicationAvgAggregateOutputType | null;
    _sum: StaffApplicationSumAggregateOutputType | null;
    _min: StaffApplicationMinAggregateOutputType | null;
    _max: StaffApplicationMaxAggregateOutputType | null;
};
export type GetStaffApplicationGroupByPayload<T extends StaffApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffApplicationGroupByOutputType[P]>;
}>>;
export type StaffApplicationWhereInput = {
    AND?: Prisma.StaffApplicationWhereInput | Prisma.StaffApplicationWhereInput[];
    OR?: Prisma.StaffApplicationWhereInput[];
    NOT?: Prisma.StaffApplicationWhereInput | Prisma.StaffApplicationWhereInput[];
    id?: Prisma.StringFilter<"StaffApplication"> | string;
    experience?: Prisma.IntFilter<"StaffApplication"> | number;
    status?: Prisma.EnumStaffApplicationStatusFilter<"StaffApplication"> | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringFilter<"StaffApplication"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
    applicant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type StaffApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    applicant?: Prisma.UserOrderByWithRelationInput;
};
export type StaffApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StaffApplicationWhereInput | Prisma.StaffApplicationWhereInput[];
    OR?: Prisma.StaffApplicationWhereInput[];
    NOT?: Prisma.StaffApplicationWhereInput | Prisma.StaffApplicationWhereInput[];
    experience?: Prisma.IntFilter<"StaffApplication"> | number;
    status?: Prisma.EnumStaffApplicationStatusFilter<"StaffApplication"> | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringFilter<"StaffApplication"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
    applicant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type StaffApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StaffApplicationCountOrderByAggregateInput;
    _avg?: Prisma.StaffApplicationAvgOrderByAggregateInput;
    _max?: Prisma.StaffApplicationMaxOrderByAggregateInput;
    _min?: Prisma.StaffApplicationMinOrderByAggregateInput;
    _sum?: Prisma.StaffApplicationSumOrderByAggregateInput;
};
export type StaffApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.StaffApplicationScalarWhereWithAggregatesInput | Prisma.StaffApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.StaffApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StaffApplicationScalarWhereWithAggregatesInput | Prisma.StaffApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StaffApplication"> | string;
    experience?: Prisma.IntWithAggregatesFilter<"StaffApplication"> | number;
    status?: Prisma.EnumStaffApplicationStatusWithAggregatesFilter<"StaffApplication"> | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringWithAggregatesFilter<"StaffApplication"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StaffApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StaffApplication"> | Date | string;
};
export type StaffApplicationCreateInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: Prisma.UserCreateNestedOneWithoutStaffApplicationsInput;
};
export type StaffApplicationUncheckedCreateInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    applicantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.UserUpdateOneRequiredWithoutStaffApplicationsNestedInput;
};
export type StaffApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationCreateManyInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    applicantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffApplicationAvgOrderByAggregateInput = {
    experience?: Prisma.SortOrder;
};
export type StaffApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffApplicationSumOrderByAggregateInput = {
    experience?: Prisma.SortOrder;
};
export type StaffApplicationListRelationFilter = {
    every?: Prisma.StaffApplicationWhereInput;
    some?: Prisma.StaffApplicationWhereInput;
    none?: Prisma.StaffApplicationWhereInput;
};
export type StaffApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumStaffApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.StaffApplicationStatus;
};
export type StaffApplicationCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput> | Prisma.StaffApplicationCreateWithoutApplicantInput[] | Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput | Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.StaffApplicationCreateManyApplicantInputEnvelope;
    connect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
};
export type StaffApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput> | Prisma.StaffApplicationCreateWithoutApplicantInput[] | Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput | Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.StaffApplicationCreateManyApplicantInputEnvelope;
    connect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
};
export type StaffApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput> | Prisma.StaffApplicationCreateWithoutApplicantInput[] | Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput | Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.StaffApplicationUpsertWithWhereUniqueWithoutApplicantInput | Prisma.StaffApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.StaffApplicationCreateManyApplicantInputEnvelope;
    set?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    disconnect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    delete?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    connect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    update?: Prisma.StaffApplicationUpdateWithWhereUniqueWithoutApplicantInput | Prisma.StaffApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.StaffApplicationUpdateManyWithWhereWithoutApplicantInput | Prisma.StaffApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.StaffApplicationScalarWhereInput | Prisma.StaffApplicationScalarWhereInput[];
};
export type StaffApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput> | Prisma.StaffApplicationCreateWithoutApplicantInput[] | Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput | Prisma.StaffApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.StaffApplicationUpsertWithWhereUniqueWithoutApplicantInput | Prisma.StaffApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.StaffApplicationCreateManyApplicantInputEnvelope;
    set?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    disconnect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    delete?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    connect?: Prisma.StaffApplicationWhereUniqueInput | Prisma.StaffApplicationWhereUniqueInput[];
    update?: Prisma.StaffApplicationUpdateWithWhereUniqueWithoutApplicantInput | Prisma.StaffApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.StaffApplicationUpdateManyWithWhereWithoutApplicantInput | Prisma.StaffApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.StaffApplicationScalarWhereInput | Prisma.StaffApplicationScalarWhereInput[];
};
export type StaffApplicationCreateWithoutApplicantInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffApplicationCreateOrConnectWithoutApplicantInput = {
    where: Prisma.StaffApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput>;
};
export type StaffApplicationCreateManyApplicantInputEnvelope = {
    data: Prisma.StaffApplicationCreateManyApplicantInput | Prisma.StaffApplicationCreateManyApplicantInput[];
    skipDuplicates?: boolean;
};
export type StaffApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.StaffApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffApplicationUpdateWithoutApplicantInput, Prisma.StaffApplicationUncheckedUpdateWithoutApplicantInput>;
    create: Prisma.XOR<Prisma.StaffApplicationCreateWithoutApplicantInput, Prisma.StaffApplicationUncheckedCreateWithoutApplicantInput>;
};
export type StaffApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.StaffApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffApplicationUpdateWithoutApplicantInput, Prisma.StaffApplicationUncheckedUpdateWithoutApplicantInput>;
};
export type StaffApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: Prisma.StaffApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffApplicationUpdateManyMutationInput, Prisma.StaffApplicationUncheckedUpdateManyWithoutApplicantInput>;
};
export type StaffApplicationScalarWhereInput = {
    AND?: Prisma.StaffApplicationScalarWhereInput | Prisma.StaffApplicationScalarWhereInput[];
    OR?: Prisma.StaffApplicationScalarWhereInput[];
    NOT?: Prisma.StaffApplicationScalarWhereInput | Prisma.StaffApplicationScalarWhereInput[];
    id?: Prisma.StringFilter<"StaffApplication"> | string;
    experience?: Prisma.IntFilter<"StaffApplication"> | number;
    status?: Prisma.EnumStaffApplicationStatusFilter<"StaffApplication"> | $Enums.StaffApplicationStatus;
    applicantId?: Prisma.StringFilter<"StaffApplication"> | string;
    createdAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffApplication"> | Date | string;
};
export type StaffApplicationCreateManyApplicantInput = {
    id?: string;
    experience: number;
    status?: $Enums.StaffApplicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffApplicationUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumStaffApplicationStatusFieldUpdateOperationsInput | $Enums.StaffApplicationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    experience?: boolean;
    status?: boolean;
    applicantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffApplication"]>;
export type StaffApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    experience?: boolean;
    status?: boolean;
    applicantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffApplication"]>;
export type StaffApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    experience?: boolean;
    status?: boolean;
    applicantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffApplication"]>;
export type StaffApplicationSelectScalar = {
    id?: boolean;
    experience?: boolean;
    status?: boolean;
    applicantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StaffApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "experience" | "status" | "applicantId" | "createdAt" | "updatedAt", ExtArgs["result"]["staffApplication"]>;
export type StaffApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StaffApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StaffApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $StaffApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StaffApplication";
    objects: {
        applicant: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        experience: number;
        status: $Enums.StaffApplicationStatus;
        applicantId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["staffApplication"]>;
    composites: {};
};
export type StaffApplicationGetPayload<S extends boolean | null | undefined | StaffApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload, S>;
export type StaffApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StaffApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffApplicationCountAggregateInputType | true;
};
export interface StaffApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StaffApplication'];
        meta: {
            name: 'StaffApplication';
        };
    };
    /**
     * Find zero or one StaffApplication that matches the filter.
     * @param {StaffApplicationFindUniqueArgs} args - Arguments to find a StaffApplication
     * @example
     * // Get one StaffApplication
     * const staffApplication = await prisma.staffApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, StaffApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StaffApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffApplicationFindUniqueOrThrowArgs} args - Arguments to find a StaffApplication
     * @example
     * // Get one StaffApplication
     * const staffApplication = await prisma.staffApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StaffApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationFindFirstArgs} args - Arguments to find a StaffApplication
     * @example
     * // Get one StaffApplication
     * const staffApplication = await prisma.staffApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, StaffApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StaffApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationFindFirstOrThrowArgs} args - Arguments to find a StaffApplication
     * @example
     * // Get one StaffApplication
     * const staffApplication = await prisma.staffApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StaffApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StaffApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffApplications
     * const staffApplications = await prisma.staffApplication.findMany()
     *
     * // Get first 10 StaffApplications
     * const staffApplications = await prisma.staffApplication.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staffApplicationWithIdOnly = await prisma.staffApplication.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StaffApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, StaffApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StaffApplication.
     * @param {StaffApplicationCreateArgs} args - Arguments to create a StaffApplication.
     * @example
     * // Create one StaffApplication
     * const StaffApplication = await prisma.staffApplication.create({
     *   data: {
     *     // ... data to create a StaffApplication
     *   }
     * })
     *
     */
    create<T extends StaffApplicationCreateArgs>(args: Prisma.SelectSubset<T, StaffApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StaffApplications.
     * @param {StaffApplicationCreateManyArgs} args - Arguments to create many StaffApplications.
     * @example
     * // Create many StaffApplications
     * const staffApplication = await prisma.staffApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StaffApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, StaffApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StaffApplications and returns the data saved in the database.
     * @param {StaffApplicationCreateManyAndReturnArgs} args - Arguments to create many StaffApplications.
     * @example
     * // Create many StaffApplications
     * const staffApplication = await prisma.staffApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StaffApplications and only return the `id`
     * const staffApplicationWithIdOnly = await prisma.staffApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StaffApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StaffApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StaffApplication.
     * @param {StaffApplicationDeleteArgs} args - Arguments to delete one StaffApplication.
     * @example
     * // Delete one StaffApplication
     * const StaffApplication = await prisma.staffApplication.delete({
     *   where: {
     *     // ... filter to delete one StaffApplication
     *   }
     * })
     *
     */
    delete<T extends StaffApplicationDeleteArgs>(args: Prisma.SelectSubset<T, StaffApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StaffApplication.
     * @param {StaffApplicationUpdateArgs} args - Arguments to update one StaffApplication.
     * @example
     * // Update one StaffApplication
     * const staffApplication = await prisma.staffApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StaffApplicationUpdateArgs>(args: Prisma.SelectSubset<T, StaffApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StaffApplications.
     * @param {StaffApplicationDeleteManyArgs} args - Arguments to filter StaffApplications to delete.
     * @example
     * // Delete a few StaffApplications
     * const { count } = await prisma.staffApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StaffApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, StaffApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffApplications
     * const staffApplication = await prisma.staffApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StaffApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, StaffApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StaffApplications and returns the data updated in the database.
     * @param {StaffApplicationUpdateManyAndReturnArgs} args - Arguments to update many StaffApplications.
     * @example
     * // Update many StaffApplications
     * const staffApplication = await prisma.staffApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StaffApplications and only return the `id`
     * const staffApplicationWithIdOnly = await prisma.staffApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StaffApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StaffApplication.
     * @param {StaffApplicationUpsertArgs} args - Arguments to update or create a StaffApplication.
     * @example
     * // Update or create a StaffApplication
     * const staffApplication = await prisma.staffApplication.upsert({
     *   create: {
     *     // ... data to create a StaffApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffApplication we want to update
     *   }
     * })
     */
    upsert<T extends StaffApplicationUpsertArgs>(args: Prisma.SelectSubset<T, StaffApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__StaffApplicationClient<runtime.Types.Result.GetResult<Prisma.$StaffApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StaffApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationCountArgs} args - Arguments to filter StaffApplications to count.
     * @example
     * // Count the number of StaffApplications
     * const count = await prisma.staffApplication.count({
     *   where: {
     *     // ... the filter for the StaffApplications we want to count
     *   }
     * })
    **/
    count<T extends StaffApplicationCountArgs>(args?: Prisma.Subset<T, StaffApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffApplicationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StaffApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffApplicationAggregateArgs>(args: Prisma.Subset<T, StaffApplicationAggregateArgs>): Prisma.PrismaPromise<GetStaffApplicationAggregateType<T>>;
    /**
     * Group by StaffApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffApplicationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StaffApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StaffApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: StaffApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StaffApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StaffApplication model
     */
    readonly fields: StaffApplicationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StaffApplication.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StaffApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    applicant<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the StaffApplication model
 */
export interface StaffApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"StaffApplication", 'String'>;
    readonly experience: Prisma.FieldRef<"StaffApplication", 'Int'>;
    readonly status: Prisma.FieldRef<"StaffApplication", 'StaffApplicationStatus'>;
    readonly applicantId: Prisma.FieldRef<"StaffApplication", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StaffApplication", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StaffApplication", 'DateTime'>;
}
/**
 * StaffApplication findUnique
 */
export type StaffApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffApplication to fetch.
     */
    where: Prisma.StaffApplicationWhereUniqueInput;
};
/**
 * StaffApplication findUniqueOrThrow
 */
export type StaffApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffApplication to fetch.
     */
    where: Prisma.StaffApplicationWhereUniqueInput;
};
/**
 * StaffApplication findFirst
 */
export type StaffApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffApplication to fetch.
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffApplications to fetch.
     */
    orderBy?: Prisma.StaffApplicationOrderByWithRelationInput | Prisma.StaffApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffApplications.
     */
    cursor?: Prisma.StaffApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffApplications.
     */
    distinct?: Prisma.StaffApplicationScalarFieldEnum | Prisma.StaffApplicationScalarFieldEnum[];
};
/**
 * StaffApplication findFirstOrThrow
 */
export type StaffApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffApplication to fetch.
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffApplications to fetch.
     */
    orderBy?: Prisma.StaffApplicationOrderByWithRelationInput | Prisma.StaffApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StaffApplications.
     */
    cursor?: Prisma.StaffApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffApplications.
     */
    distinct?: Prisma.StaffApplicationScalarFieldEnum | Prisma.StaffApplicationScalarFieldEnum[];
};
/**
 * StaffApplication findMany
 */
export type StaffApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which StaffApplications to fetch.
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StaffApplications to fetch.
     */
    orderBy?: Prisma.StaffApplicationOrderByWithRelationInput | Prisma.StaffApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StaffApplications.
     */
    cursor?: Prisma.StaffApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StaffApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StaffApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StaffApplications.
     */
    distinct?: Prisma.StaffApplicationScalarFieldEnum | Prisma.StaffApplicationScalarFieldEnum[];
};
/**
 * StaffApplication create
 */
export type StaffApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a StaffApplication.
     */
    data: Prisma.XOR<Prisma.StaffApplicationCreateInput, Prisma.StaffApplicationUncheckedCreateInput>;
};
/**
 * StaffApplication createMany
 */
export type StaffApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffApplications.
     */
    data: Prisma.StaffApplicationCreateManyInput | Prisma.StaffApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StaffApplication createManyAndReturn
 */
export type StaffApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * The data used to create many StaffApplications.
     */
    data: Prisma.StaffApplicationCreateManyInput | Prisma.StaffApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffApplication update
 */
export type StaffApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a StaffApplication.
     */
    data: Prisma.XOR<Prisma.StaffApplicationUpdateInput, Prisma.StaffApplicationUncheckedUpdateInput>;
    /**
     * Choose, which StaffApplication to update.
     */
    where: Prisma.StaffApplicationWhereUniqueInput;
};
/**
 * StaffApplication updateMany
 */
export type StaffApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffApplications.
     */
    data: Prisma.XOR<Prisma.StaffApplicationUpdateManyMutationInput, Prisma.StaffApplicationUncheckedUpdateManyInput>;
    /**
     * Filter which StaffApplications to update
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * Limit how many StaffApplications to update.
     */
    limit?: number;
};
/**
 * StaffApplication updateManyAndReturn
 */
export type StaffApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * The data used to update StaffApplications.
     */
    data: Prisma.XOR<Prisma.StaffApplicationUpdateManyMutationInput, Prisma.StaffApplicationUncheckedUpdateManyInput>;
    /**
     * Filter which StaffApplications to update
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * Limit how many StaffApplications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * StaffApplication upsert
 */
export type StaffApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the StaffApplication to update in case it exists.
     */
    where: Prisma.StaffApplicationWhereUniqueInput;
    /**
     * In case the StaffApplication found by the `where` argument doesn't exist, create a new StaffApplication with this data.
     */
    create: Prisma.XOR<Prisma.StaffApplicationCreateInput, Prisma.StaffApplicationUncheckedCreateInput>;
    /**
     * In case the StaffApplication was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StaffApplicationUpdateInput, Prisma.StaffApplicationUncheckedUpdateInput>;
};
/**
 * StaffApplication delete
 */
export type StaffApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
    /**
     * Filter which StaffApplication to delete.
     */
    where: Prisma.StaffApplicationWhereUniqueInput;
};
/**
 * StaffApplication deleteMany
 */
export type StaffApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StaffApplications to delete
     */
    where?: Prisma.StaffApplicationWhereInput;
    /**
     * Limit how many StaffApplications to delete.
     */
    limit?: number;
};
/**
 * StaffApplication without action
 */
export type StaffApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffApplication
     */
    select?: Prisma.StaffApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffApplication
     */
    omit?: Prisma.StaffApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffApplicationInclude<ExtArgs> | null;
};
//# sourceMappingURL=StaffApplication.d.ts.map