"use client";

// import { getRequest } from "@/lib/utils/apiCaller";
// import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
// import { RESULTS_PER_PAGE } from "@/lib/consts";
import { getRequest } from "@/lib/utils/apiCaller";
import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch paginated products by recent activity
 */

const useGetProductsByRecentActivity = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") ?? 1;

    const { isLoading, data, error } = useQuery({
        queryKey: ["products", page],
        queryFn: () =>
            getRequest<IGetPaginatedProducts>({
                url: `/product/store-management/${storeInfo?.id}/${Number(page) - 1}`,
                //    `/product/product-most-recent?page=${page}&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`,
            }),
        // queryFn: async () => {
        //     const { data } = await axios.get(
        //         `${process.env.NEXT_PUBLIC_API_BASE_URL_3}/product/product-most-recent?page=${page}&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`
        //     );

        //     return data;
        // },
        enabled: !!storeInfo?.id && !!page,
        throwOnError: true,
    });

    return { products: data, isFetchingProducts: isLoading, errorFetchingProducts: error };
};

export default useGetProductsByRecentActivity;
