"use client";
/**********************************************************************
 * Preview product before uploading
 * This page will show the product details and variants
 * in a preview format. The user can then confirm or edit the details before uploading.
 * This page will be a static page with no form or input fields.
 ***********************************************************************/

import { ImageSampleProduct1 } from "@/public/images/landingPage/images";
import Image from "next/image";
import { productVariants } from "../../lib/data";
import ProductVariantsTable from "../../ui/addProduct/productVariants/ProductVariantsTable";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter } from "next/navigation";
import { IconArrowRight } from "@/public/icons/icons";

const Preview = () => {
    const router = useRouter();
    const productName = "Nike Zoom Running Shoes";
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
                            <li>Mens&#39;s fashion</li>
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
                            <Image
                                src={ImageSampleProduct1}
                                alt="sneakers"
                                className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-40 h-40 object-cover"
                            />
                            <Image
                                src={ImageSampleProduct1}
                                alt="sneakers"
                                className="rounded-xl border border-dashed border-kaiglo_grey-disabled lgw-[120px] h-[120px] object-cover"
                            />
                        </div>
                    </section>
                    {/* product images ends here`` */}

                    {/* Product name starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT NAME</h2>
                        <p className="text-sm font-medium p-3 border border-kaiglo_grey-disabled rounded-lg">
                            {productName}
                        </p>
                    </section>
                    {/* product name ends here */}

                    {/* Product specifications starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT SPECIFICATIONS</h2>
                        <ul className="grid gap-3 font-medium text-sm md:text-base list-disc list-inside">
                            <li className="px-3 py-1 md:py-2">Specification 1</li>
                            <li className="px-3 py-1 md:py-2">Specification 2</li>
                            <li className="px-3 py-1 md:py-2">Specification 3</li>
                            <li className="px-3 py-1 md:py-2">Specification 4</li>
                            <li className="px-3 py-1 md:py-2">Specification 5</li>
                        </ul>
                    </section>
                    {/* product specifications ends here */}

                    {/* Product description starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION</h2>
                        <p className="text-sm md:text-base text-kaiglo_grey-900 font-medium">
                            The Nike Jordan 2 SE Gray&#39;s versatile upper is a case study of what happens
                            when Nike&#39;s durable React foam meets firm suede overlays. Sporting a checkered
                            pattern of textured dimples, the shoe protects the midfoot&#39;s inner lining
                            while securing the strips that house each of the design&#39;s lacing holes. The
                            mudguard&#39;s wavy shape moves to and fro across the midsole, flaring out at the
                            lateral heel&#39;s edge. All the while, a black-on-white Jumpman tab hangs off of
                            the upper&#39;s side. Under the toe guard&#39;s outer arch, a University Red
                            Jumpman&#39;s outstretched arm reaches into the visible portion of the outsole.
                        </p>
                    </section>
                    {/* product description ends here */}

                    {/* Product variants starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                        <h2 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h2>

                        <ProductVariantsTable
                            productVariants={productVariants}
                            productName="Nike Zoom Running Shoes"
                            showTitle={false}
                            showActions={false}
                        />
                    </section>
                    {/* product variants ends here */}

                    {/* Product seo starts here */}
                    <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                        <h2 className="text-sm md:text-base font-medium">
                            PRODUCT DESCRIPTION SUMMARY (SEO)
                        </h2>
                        <ul className="flex flex-wrap gap-3 font-medium text-sm md:text-base list-disc list-inside">
                            <li className="flex gap-2 p-2 items-center justify-center text-sm md:text-base text-kaiglo_grey-800 font-normal bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg">
                                <span>Air-Max</span>
                                <span className="font-semi">✕</span>
                            </li>
                            <li className="flex gap-2 p-2 items-center justify-center text-sm md:text-base text-kaiglo_grey-800 font-normal bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg">
                                <span>Shoes</span>
                                <span className="font-semi">✕</span>
                            </li>
                            <li className="flex gap-2 p-2 items-center justify-center text-sm md:text-base text-kaiglo_grey-800 font-normal bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg">
                                <span>Comfy leather sole</span>
                                <span className="font-semi">✕</span>
                            </li>
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
                            router.push("/products");
                        }}
                        className="max-w-[424px] md:ml-auto grid grid-cols-2 gap-3 justify-between p-4"
                    />
                </div>
            </div>
        </div>
    );
};
export default Preview;
