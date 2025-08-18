"use client";

/**********************************************************************
 * Preview product before uploading
 * This page will show the product details and variants
 * in a preview format. The user can then confirm or edit the details before uploading.
 * This page will be a static page with no form or input fields.
 ***********************************************************************/

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter, useSearchParams } from "next/navigation";
import useGetRawProduct from "../../hooks/addProduct/useGetRawProduct";
import useUploadProduct from "../../hooks/addProduct/useUploadProduct";
import useGetProductDescription from "../../hooks/addProduct/useGetProductDescription";
import Loader from "@/app/ui/Loader";
import ProductCategorySection from "../../ui/addProduct/preview/ProductCategorySection";
import ProductDetailsSection from "../../ui/addProduct/preview/ProductDetailsSection";
import ProductVariantsSection from "../../ui/addProduct/preview/ProductVariantsSection";
import SeoSection from "../../ui/addProduct/preview/SeoSection";

const ProductPreview = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id")?.trim() ?? "";
    const productAction = searchParams.get("product-action");

    // Hooks
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { uploadProduct, isUploadingProduct } = useUploadProduct();
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId ?? "");
    const isUndefined = productRaw === undefined || productDescription === undefined;

    // Null means the product does not exist or there was a null result from data fetching
    if (productRaw === null) <p>Something went wrong</p>;

    const handleSubmit = (productId: string | undefined) => {
        if (!productId) return;
        uploadProduct(productId);
    };

    const handleCancel = (productId: string | undefined) => {
        if (!productId) return;

        const prevStep =
            productAction === "edit"
                ? `/products/add-product?step=product-variants&product-id=${productId}&product-action=edit`
                : `/products/add-product?step=product-variants&product-id=${productId}`;

        router.push(prevStep);
    };

    return (
        <div>
            <div className="flex justify-between items-center p-4 md:px-6 md:py-8 border-b">
                <h1 className="text-lg md:text-2xl font-medium text-kaiglo_grey-900">Product preview</h1>
            </div>

            {/* Undefined means the query is yet to start fetching */}
            {isFetchingProductDescription || isFetchingProductRaw || isUndefined ? (
                <Loader />
            ) : (
                <div className="grid gap-6">
                    {/* Product category */}
                    <ProductCategorySection product={productRaw} />

                    {/* Product information/Details */}
                    <ProductDetailsSection product={productRaw} productDescription={productDescription} />

                    {/* Product variants */}
                    <ProductVariantsSection product={productRaw} />

                    {/* Product seo */}
                    <SeoSection product={productRaw} />
                </div>
            )}
            <div>
                <FormNavButtons
                    cancelFunc={() => handleCancel(productRaw?.id)}
                    cancelButtonText="Back"
                    submitButtonType="button"
                    submitButtonText="Upload"
                    submitButtonFunc={() => handleSubmit(productRaw?.id)}
                    className="max-w-[424px] md:ml-auto grid grid-cols-2 gap-3 justify-between p-4"
                    disabled={isUploadingProduct || isUndefined}
                />
            </div>
        </div>
    );
};

export default ProductPreview;
