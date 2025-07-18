import { useRouter, useSearchParams } from "next/navigation";
import { productDetailsFormDefaultValues } from "../../../lib/defaults";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import ProductDetailsForm from "./ProductDetailsForm";
import useGetRawProduct from "../../../hooks/addProduct/useGetRawProduct";
import useGetProductDescription from "../../../hooks/addProduct/useGetProductDescription";
import { useEffect, useState } from "react";
import Loader from "@/app/ui/Loader";
import { generateProductDetailsDTO } from "../../../lib/utils/addProduct.utils";
import { showErrorToast } from "@/app/lib/utils/utils";

const ProductDetailsFormWrapper = ({ className }: { className?: string }) => {
    const [defaultValues, setDefaultValues] = useState<IProductDetailsDTO>(productDetailsFormDefaultValues);
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";

    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId);

    useEffect(() => {
        if (isFetchingProductDescription || isFetchingProductRaw) return;

        if (productRaw) {
            setDefaultValues(generateProductDetailsDTO(productRaw, productDescription ?? ""));
        } else {
            showErrorToast({ title: "Invalid product id" });
            router.replace("/products/add-product?step=product-category");
        }
    }, [productRaw, productDescription]);

    if (isFetchingProductDescription || isFetchingProductRaw) return <Loader />;
    if (!productRaw || productDescription === undefined) return null;

    return <ProductDetailsForm defaultValues={defaultValues} className={className} />;
};
export default ProductDetailsFormWrapper;
