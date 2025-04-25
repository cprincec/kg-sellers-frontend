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
import { IconArrowRight } from "@/public/icons/icons";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/contexts/addProductContext";

const Preview = () => {
    const router = useRouter();
    const productName = "Nike Zoom Running Shoes";
    const { productDetails, productCategory, productVariants } = useAddProductContext();
    console.log(productCategory, productDetails, productVariants);
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
                        <ul className="flex gap-2 items-center font-medium text-sm">
                            <li>{productCategory.productCategory}</li>
                            <Image src={IconArrowRight} alt="arrow" />
                            <li>Shoes</li>
                            <Image src={IconArrowRight} alt="arrow" className="" />
                            <li>Sneakers</li>
                        </ul>
                    </section>
                    {/* product category ends here */}

                    {/* product images starts here */}
                    <section className="grid gap-3 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT IMAGE</h2>
                        <div className="flex gap-3 flex-wrap items-center">
                            {productDetails.images.map((image, index) => {
                                if (index === 0) {
                                    return (
                                        <Image
                                            key={productDetails.name + " image " + index}
                                            src={URL.createObjectURL(image)}
                                            alt={productDetails.name + " image"}
                                            className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-40 h-40 object-cover"
                                            width={160}
                                            height={160}
                                        />
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
                                    <li key={index} className="px-3 py-1 md:py-2">
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
                                productVariants={productVariants}
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
                        cancelFunc={() =>
                            router.replace(
                                `/products/add-product?step=product-variants&product-name=${productName}`
                            )
                        }
                        cancelButtonText="Back"
                        submitButtonType="button"
                        submitButtonText="Upload"
                        submitButtonFunc={() => {
                            // prevent user from seeing the product upload success toast when they visit the route
                            sessionStorage.setItem("justUploaded", "true");
                            router.push("/products?upload-status=successful");
                        }}
                        className="max-w-[424px] md:ml-auto grid grid-cols-2 gap-3 justify-between p-4"
                    />
                </div>
            </div>
        </div>
    );
};
export default Preview;
