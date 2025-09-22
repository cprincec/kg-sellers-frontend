"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NoResultsIcon } from "../icons";
import ProductPerformanceTable from "./ProductPerformanceTable";
import useGetProductPerformance from "../../hooks/useGetProductPerformance";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import { TableError } from "@/app/ui/errors";

const ProductPerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const {
        productPerformance,
        isFetchingProductPerformance,
        errorFetchingProductPerformance,
        isRefetchingProductPerformance,
        refetchProductPerformance,
    } = useGetProductPerformance();

    if (isFetchingProductPerformance || isRefetchingProductPerformance) return <TableSkeleton />;
    if (errorFetchingProductPerformance)
        return (
            <TableError
                title="Error fetching product performance data"
                retryFunction={refetchProductPerformance}
            />
        );

    const topSelling = productPerformance?.topSellingProducts ?? [];
    const leastSelling = productPerformance?.leastSellingProducts ?? [];
    return (
        <div className="relative flex flex-col gap-6 rounded-xl border border-kaiglo_grey-200 p-3">
            <h3 className="relative lg:max-w-[45%] text-sm font-normal lg:font-medium text-kaiglo_grey-800">
                Weekly Product Performance
            </h3>

            <div>
                <Tabs defaultValue="topSelling" className="">
                    {/* TABS */}
                    <TabsList className="flex gap-4 bg-transparent w-[80%] px-0 justify-start lg:justify-end mb-8 lg:absolute lg:right-1 lg:top-1">
                        <TabsTrigger value="topSelling">Top selling</TabsTrigger>
                        <TabsTrigger value="leastSelling">Least selling</TabsTrigger>
                    </TabsList>

                    {/* Tables */}
                    {showEmptyState && (
                        <NoResultsIcon
                            className="grid items-center justify-center -mt-8 py-6"
                            title="No results Yet"
                            description="Data will begin populating as soon as you commence making sales"
                        />
                    )}

                    {!showEmptyState && productPerformance && (
                        <>
                            <TabsContent value="topSelling" className="overflow-x-auto">
                                <ProductPerformanceTable data={topSelling} />
                            </TabsContent>

                            <TabsContent value="leastSelling" className="overflow-x-auto">
                                <ProductPerformanceTable data={leastSelling} />
                            </TabsContent>
                        </>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default ProductPerformance;
