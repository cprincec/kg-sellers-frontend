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
import { useRouter } from "next/navigation";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { useProductsContext } from "../../contexts/productsContext";
import { IProductDTO, ProductVariant } from "../../lib/interfaces/interface";
import { startTransition } from "react";
import ProductCategoryCrumbs from "../../ui/addProduct/productCategory/ProductCategoryCrumbs";
import { showSuccessfulToast } from "@/app/lib/utils/utils";

const Preview = () => {
    const router = useRouter();
    const { products, setProducts } = useProductsContext();
    const { productDetails, productCategory, productVariants } = useAddProductContext();

    const MAX_PREVIEW_IMAGES = 5;

    const variants: ProductVariant[] = productVariants.map((v) => ({ ...v, amount: 2500 }));

    return (
        <div className="min-h-screen border-l">
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
                    <section className="grid gap-3 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT IMAGE</h2>
                        <div className="flex gap-3 flex-wrap items-center">
                            {productDetails.images.map((image, index) => {
                                const shouldBeHidden = index + 1 > MAX_PREVIEW_IMAGES;

                                const isMainImage = index === 0;

                                if (shouldBeHidden && index + 1 === MAX_PREVIEW_IMAGES + 1) {
                                    return (
                                        <div key={index} className="relative">
                                            <Image
                                                key={productDetails.name + " image " + index}
                                                src={URL.createObjectURL(image)}
                                                alt={productDetails.name + " image"}
                                                className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[120px] h-[120px] object-cover"
                                                width={120}
                                                height={120}
                                            />

                                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[120px] flex justify-center bg-[#00000033] rounded-xl">
                                                <p className="flex items-center justify-center text-base text-kaiglo_grey-900 font-medium text-center absolute right-1.5 bottom-1.5 px-2 py-1 bg-white rounded-lg">
                                                    +
                                                    <span>
                                                        {productDetails.images.length - MAX_PREVIEW_IMAGES}
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
                                                key={productDetails.name + " image " + index}
                                                src={URL.createObjectURL(image)}
                                                alt={productDetails.name + " image"}
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
                                        key={productDetails.name + " image " + index}
                                        src={URL.createObjectURL(image)}
                                        alt={productDetails.name + " image"}
                                        width={120}
                                        height={120}
                                        className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[120px] h-[120px] object-cover"
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/* product images ends here`` */}

                    {/* Product name starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT NAME</h2>
                        <p className="text-sm font-medium p-3 border border-kaiglo_grey-disabled rounded-lg">
                            {productDetails.name}
                        </p>
                    </section>
                    {/* product name ends here */}

                    {/* Product specifications starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT SPECIFICATIONS</h2>
                        <ul className="grid gap-3 font-medium text-sm md:text-base list-disc list-inside">
                            {[
                                productDetails.specification1,
                                productDetails.specification2,
                                productDetails.specification3,
                                productDetails.specification4,
                                productDetails.specification5,
                            ]
                                .filter(Boolean)
                                .map((spec, index) => (
                                    <li key={index} className="px-3 py-1 md:py-2 capitalize">
                                        {spec}
                                    </li>
                                ))}
                        </ul>
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
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h2>

                        {productVariants.length ? (
                            <ProductVariantsTable
                                productVariants={variants}
                                showTitle={false}
                                showActions={false}
                            />
                        ) : (
                            <h3>No variants added</h3>
                        )}
                    </section>
                    {/* product variants ends here */}

                    {/* Product seo starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                        <h2 className="text-sm md:text-base font-medium">
                            PRODUCT DESCRIPTION SUMMARY (SEO)
                        </h2>
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
                    </section>
                    {/* product seo ends here */}

                    <FormNavButtons
                        cancelFunc={() => router.replace(`/products/add-product?step=product-variants`)}
                        cancelButtonText="Back"
                        submitButtonType="button"
                        submitButtonText="Upload"
                        submitButtonFunc={() => {
                            const today = new Date();
                            const dateCreated = today.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            });

                            const newProduct: IProductDTO = {
                                productName: productDetails.name,
                                productImages: productDetails.images,
                                amount: 2500,
                                description: productDetails.description,
                                productVariants: variants,
                                quantity: 100,
                                salesType: [],
                                sku: 100,
                                specifications: [
                                    productDetails.specification1,
                                    productDetails.specification2 || "",
                                    productDetails.specification3 || "",
                                    productDetails.specification4 || "",
                                    productDetails.specification5 || "",
                                ],
                                status: "active",
                                stockLevel: "in stock",
                                dateCreated,
                            };

                            const updatedProducts = [newProduct, ...products]; // create new array
                            setProducts(updatedProducts);

                            startTransition(() => {
                                router.push("/products?upload-status=successful");
                            });
                            showSuccessfulToast("", "Your product upload was successful and being reviewed");
                        }}
                        className="max-w-[424px] md:ml-auto grid grid-cols-2 gap-3 justify-between p-4"
                    />
                </div>
            </div>
        </div>
    );
};
export default Preview;
