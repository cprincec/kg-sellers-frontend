"use client";
/**********************************************************************
 * Preview product before uploading
 * This page will show the product details and variants
 * in a preview format. The user can then confirm or edit the details before uploading.
 * This page will be a static page with no form or input fields.
 ***********************************************************************/

import Image from "next/image";
import ProductVariantsTable from "../../ui/addProduct/productVariants/ProductVariantsTable";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { IProductVariantDTO } from "../../lib/interfaces/interface";
import ProductCategoryCrumbs from "../../ui/addProduct/productCategory/ProductCategoryCrumbs";
import {
    generateProductCategoryDTO,
    generateProductDetailsDTO,
    generateProductVariantDTOs,
} from "../../lib/utils/addProduct.utils";
import useGetRawProduct from "../../hooks/addProduct/useGetRawProduct";
import useGetProductDescription from "../../hooks/addProduct/useGetProductDescription";
import Loader from "@/app/ui/Loader";
import useUploadProduct from "../../hooks/addProduct/useUploadProduct";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";

const Preview = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";
    const productAction = searchParams.get("product-action");
    const MAX_PREVIEW_IMAGES = 5;

    // Hooks
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { uploadProduct, isUploadingProduct } = useUploadProduct();
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId ?? "");

    if (isFetchingProductDescription || isFetchingProductRaw) return <Loader />;
    if (!productRaw || productDescription === undefined) return <Loader />;

    const productVariants: IProductVariantDTO[] = generateProductVariantDTOs(productRaw);
    const productCategory = generateProductCategoryDTO(productRaw);
    const productDetails = generateProductDetailsDTO(productRaw, productDescription);
    const images = [productDetails.mainImage, ...productDetails.otherImages].filter(Boolean);
    const prevStep =
        productAction === "edit"
            ? `/products/add-product?step=product-variants&product-id=${productRaw.id}&product-action=edit`
            : `/products/add-product?step=product-variants&product-id=${productRaw.id}`;

    return (
        <div>
            <div className="flex justify-between items-center p-4 md:px-6 md:py-8 border-b">
                <h1 className="text-lg md:text-2xl font-medium text-kaiglo_grey-900">Product preview</h1>
            </div>

            <div className="grid gap-6">
                {/* Product category starts here */}
                <section className="grid gap-3 p-4 md:px-6 border-b">
                    <h2 className="text-sm md:text-base font-medium">PRODUCT CATEGORY</h2>
                    <ProductCategoryCrumbs
                        categoryObject={productCategory}
                        className="bg-transparent border-none -ml-3"
                    />
                </section>
                {/* product category ends here */}

                {/* product images starts here */}
                <div className="grid">
                    {productAction === "edit" && (
                        <Link
                            href={`/products/add-product?step=product-details&product-id=${productId}&product-action=edit`}
                            className={cn(
                                buttonVariants({ variant: "secondary" }),
                                "font-medium ml-auto mr-2"
                            )}
                        >
                            Edit product information
                        </Link>
                    )}
                    <section className="grid gap-3 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT IMAGE</h2>
                        {images.length ? (
                            <div className="flex gap-3 flex-wrap items-center">
                                {images.map((image, index) => {
                                    const isCollapsed = index + 1 > MAX_PREVIEW_IMAGES;
                                    const isMainImage = index === 0;

                                    if (isCollapsed && index + 1 === MAX_PREVIEW_IMAGES + 1) {
                                        return (
                                            <div key={index} className="relative">
                                                <Image
                                                    key={productDetails.productName + " image " + index}
                                                    src={image}
                                                    alt={productDetails.productName + " image"}
                                                    className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[120px] h-[120px] object-cover"
                                                    width={120}
                                                    height={120}
                                                />

                                                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[120px] flex justify-center bg-[#00000033] rounded-xl">
                                                    <p className="flex items-center justify-center text-base text-kaiglo_grey-900 font-medium text-center absolute right-1.5 bottom-1.5 px-2 py-1 bg-white rounded-lg">
                                                        +
                                                        <span>
                                                            {/* The 1 added here is the length of the main image */}
                                                            {1 +
                                                                productDetails.otherImages.length -
                                                                MAX_PREVIEW_IMAGES}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (index + 1 > MAX_PREVIEW_IMAGES) return;

                                    if (isMainImage) {
                                        return (
                                            <div key={index} className="relative">
                                                <Image
                                                    key={productDetails.productName + " image " + index}
                                                    src={image}
                                                    alt={productDetails.productName + " image"}
                                                    className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-40 h-40 object-cover"
                                                    width={160}
                                                    height={160}
                                                />

                                                {isMainImage && (
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[160px] flex justify-center bg-[#00000033] rounded-xl">
                                                        <p className="text-center absolute left-1.5 right-1.5 bottom-1.5 px-2 py-1 bg-white rounded-lg">
                                                            <span className="w-full text-xs md:text-sm font-medium text-kaiglo_grey-900 ">
                                                                Main Image
                                                            </span>
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <Image
                                            key={productDetails.productName + " image " + index}
                                            src={image}
                                            alt={productDetails.productName + " image"}
                                            width={120}
                                            height={120}
                                            className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[120px] h-[120px] object-cover"
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div>No images uploaded</div>
                        )}
                    </section>
                </div>
                {/* product images ends here`` */}

                {/* Product name starts here */}
                <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
                    <h2 className="text-sm md:text-base font-medium">PRODUCT NAME</h2>
                    {productDetails.productName ? (
                        <p className="text-sm font-medium p-3 border border-kaiglo_grey-disabled rounded-lg">
                            {productDetails.productName}
                        </p>
                    ) : (
                        <p>No product name added</p>
                    )}
                </section>
                {/* product name ends here */}

                {/* Product specifications starts here */}

                <section className="grid gap-3 md:gap-4 p-4 md:px-6 border-b">
                    <h2 className="text-sm md:text-base font-medium">PRODUCT SPECIFICATIONS</h2>
                    {productDetails.specifications && productDetails.specifications.length ? (
                        <ul className="grid gap-3 font-medium text-sm md:text-base list-disc list-inside">
                            {productRaw.specifications.map((spec, index) => (
                                <li key={index} className="px-3 py-1 md:py-2 capitalize">
                                    {spec.name} : {spec.option}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No specifications selected</p>
                    )}
                </section>

                {/* product specifications ends here */}

                {/* Product description starts here */}
                <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
                    <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION</h2>
                    {productDetails.description ? (
                        <p className="text-sm md:text-base text-kaiglo_grey-900 font-medium">
                            {productDetails.description}
                        </p>
                    ) : (
                        <h3>No product description added</h3>
                    )}
                </section>
                {/* product description ends here */}

                {/* Product variants starts here */}
                <div className="grid">
                    {productAction === "edit" && (
                        <Link
                            href={`/products/add-product?step=product-variants&product-id=${productId}&product-action=edit`}
                            className={cn(
                                buttonVariants({ variant: "secondary" }),
                                "font-medium ml-auto mr-2"
                            )}
                        >
                            Edit product variants
                        </Link>
                    )}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h2>

                        {productVariants.length ? (
                            <ProductVariantsTable showTitle={false} showActions={false} />
                        ) : (
                            <h3>No variants added</h3>
                        )}
                    </section>
                </div>
                {/* product variants ends here */}

                {/* Product seo starts here */}
                <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                    <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION SUMMARY (SEO)</h2>
                    {productDetails.seo ? (
                        <ul className="flex flex-wrap gap-3 font-medium text-sm md:text-base list-disc list-inside">
                            {productDetails.seo?.split(",").map((item, index) => (
                                <li
                                    key={index}
                                    className="flex gap-2 p-2 items-center justify-center text-sm md:text-base text-kaiglo_grey-800 font-normal bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg"
                                >
                                    <span className="capitalize">{item}</span>
                                    <span className="font-semi">✕</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No product description summary added</p>
                    )}
                </section>
                {/* product seo ends here */}

                <FormNavButtons
                    cancelFunc={() => router.push(prevStep)}
                    cancelButtonText="Back"
                    submitButtonType="button"
                    submitButtonText="Upload"
                    submitButtonFunc={() => uploadProduct(productRaw.id)}
                    className="max-w-[424px] md:ml-auto grid grid-cols-2 gap-3 justify-between p-4"
                    disabled={isUploadingProduct}
                />
            </div>
        </div>
    );
};
export default Preview;
