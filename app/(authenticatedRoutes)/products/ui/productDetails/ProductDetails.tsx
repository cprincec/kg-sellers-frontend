"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { sampleProduct } from "../../lib/data/data";
import ProductVariants from "./ProductVariants";
import { cn } from "@/lib/utils";

const ProductDetails = ({ showModal }: { showModal: boolean }) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const product = sampleProduct;
    const {
        productImage,
        productName,
        sku,
        productImages,
        productVariants,
        description,
        specifications,
        salesType,
    } = product;
    return (
        <Dialog open={showModal} onOpenChange={() => deleteSearchParams(["product-id"])}>
            <DialogContent
                className="w-[90%] md:w-[600px] md:max-w-[600px] max-h-[95%] overflow-y-auto outline-none p-4 md:px-5 md:py-6 rounded-xl gap-5"
                closeBtnClassName="md:hidden left-4 -ml-1 mt-0.5"
            >
                <div className="flex items-center justify-end gap-4">
                    <Button
                        variant={"ghost"}
                        className="hidden md:flex text-kaiglo_grey-700 text-sm px-3 py-1 bg-transparent"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant={"ghost"}
                        className="md:flex px-3 py-1 text-kaiglo_success-600 text-sm bg-transparent"
                    >
                        Edit
                    </Button>
                </div>
                <DialogTitle className="font-medium text-base text-kaiglo_grey-900 text-left">
                    Product details
                </DialogTitle>
                <div className="grid gap-5">
                    <div className="flex gap-3 lg:items-center">
                        <Image src={productImage} alt="product image" className="w-[64px] h-[64px]" />
                        <div className="grid gap-2">
                            <div className="grid grid-flow-col gap-2 justify-between">
                                <p className="text-sm text-kaiglo_grey-800">{productName}</p>
                                <span className="hidden md:inline px-2 py-1 text-kaiglo_critical-600 text-sm font-medium bg-kaiglo_critical-50 rounded-lg">
                                    {salesType}
                                </span>
                            </div>
                            <h2 className="text-sm font-normal text-kaiglo_grey-500">SKU: {sku}</h2>
                        </div>
                    </div>

                    <section className="grid gap-2">
                        <h2 className="text-sm ">Description</h2>
                        <p className="text-sm text-kaiglo_grey-600">{description} </p>
                    </section>

                    <section className="grid gap-2">
                        <h3 className="font-medium text-sm text-kaiglo_grey-900">Specifications</h3>
                        <ul className="grid gap-2 list-disc pl-7">
                            {specifications.map((specification) => (
                                <li
                                    key={specification}
                                    className="px-3 py-2 text-sm font-medium capitalize pl-0"
                                >
                                    {specification}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="grid gap-2">
                        <h3 className="text-sm font-medium">Product images</h3>
                        <div className="flex gap-3">
                            {productImages.map((image, index) => (
                                <Image
                                    key={productName + index}
                                    src={image}
                                    alt={productName}
                                    className={cn(
                                        "w-[64px] h-[64px]",
                                        index !== 0 && index !== productImages.length - 1
                                            ? "hidden md:block"
                                            : "block"
                                    )}
                                />
                            ))}
                        </div>
                    </section>

                    <ProductVariants productVariants={productVariants} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetails;
