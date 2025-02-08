"use client";

import { NoResultsIcon } from "../../icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductPerformanceTable from "./ProductPerformanceTable";

const ProductPerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    return (
        <div className="grid gap-6 rounded-xl border border-kaiglo_grey-200 p-3">
            <h3 className="text-sm font-normal">Product Performance</h3>

            <div>
                <Tabs defaultValue="topSelling" className="">
                    {/* TABS */}
                    <TabsList className="flex gap-4 bg-transparent w-[80%] px-0 justify-start mb-8">
                        <TabsTrigger value="topSelling">Top selling</TabsTrigger>
                        <TabsTrigger value="leastSelling">Least selling</TabsTrigger>
                    </TabsList>

                    {/* Tables */}
                    {!showEmptyState ? (
                        <>
                            <TabsContent value="topSelling">
                                <ProductPerformanceTable sortBy={"topSelling"} />
                            </TabsContent>
                            <TabsContent value="leastSelling">
                                <ProductPerformanceTable sortBy={"leastSelling"} />
                            </TabsContent>
                        </>
                    ) : (
                        <NoResultsIcon
                            className="grid items-center justify-center -mt-8 py-6"
                            title="No results Yet"
                            description="Data will begin populating as soon as you commence making sales"
                        />
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default ProductPerformance;
