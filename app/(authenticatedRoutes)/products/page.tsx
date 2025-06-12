"use client";

import { useSearchParams } from "next/navigation";
import AddProductButton from "./ui/AddProductButton";
import ProductsMetrics from "./ui/ProductsMetrics";
import ProductsTableWrapper from "./ui/productsTable/ProductsTableWrapper";
import { useEffect } from "react";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { showSuccessToast } from "@/app/lib/utils/utils";

const Products = () => {
    const searchParams = useSearchParams();
    const { deleteSearchParams } = useUpdateSearchParams();

    // Show product upload success message toast
    useEffect(() => {
        const isSuccess = searchParams.get("upload-status") === "successful";
        const justUploaded = sessionStorage.getItem("justUploaded") === "true";

        if (isSuccess && justUploaded) {
            showSuccessToast({ message: "Your product upload was successful and being reviewed" });
            sessionStorage.removeItem("justUploaded");

            setTimeout(() => {
                deleteSearchParams(["upload-status"]);
            }, 5);
        }
    }, [searchParams, deleteSearchParams]);

    return (
        <div className="lg:min-h-[calc(100vh-82px)]">
            <div className="grid gap-5 lg:gap-5 p-4 lg:px-0">
                <div className="flex justify-end md:justify-between items-center pt-2 pb-1 lg:px-5">
                    <h2 className="hidden md:block font-medium text-sm  md:text-base uppercase">
                        Product Overview
                    </h2>

                    <AddProductButton />
                </div>
                <ProductsMetrics className="lg:rounded-none lg:border-x-0 px-2" />
                <ProductsTableWrapper className="lg:mx-5" />
            </div>
        </div>
    );
};
export default Products;
