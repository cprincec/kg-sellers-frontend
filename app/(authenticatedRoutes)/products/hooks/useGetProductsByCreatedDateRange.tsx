"use client";

import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useSearchParams } from "next/navigation";
import { format, parse } from "date-fns";
import { getRequest } from "@/lib/utils/apiCaller";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch products by search term
 */
const useGetProductsByCreatedDateRange = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const page = searchParams.get("page")?.trim() ?? 1;
    const startDate = searchParams.get("from")?.trim();
    const endDate = searchParams.get("to")?.trim();
    const parsedStartDate = startDate
        ? format(parse(startDate, "dd-MM-yyyy", new Date()), "yyyy-MM-dd")
        : null;
    const parsedEndDate = endDate ? format(parse(endDate, "dd-MM-yyyy", new Date()), "yyyy-MM-dd") : null;

    const { isLoading, data, error } = useQuery({
        queryKey: ["products", startDate, endDate],
        queryFn: () =>
            getRequest<IGetPaginatedProducts>({
                url: `/product/product-created?endDate=${parsedEndDate}&page=${
                    Number(page) - 1
                }&size=${RESULTS_PER_PAGE}&startDate=${parsedStartDate}&storeId=${storeInfo?.id}`,
            }),
        enabled: !!parsedStartDate && !!parsedEndDate && !!storeInfo?.id,
        throwOnError: true,
    });

    return {
        productsByCreatedDateRange: data,
        isFetchingProductsByCreatedDateRange: isLoading,
        errorFetchingProductsByCreatedDateRange: error,
    };
};

export default useGetProductsByCreatedDateRange;
