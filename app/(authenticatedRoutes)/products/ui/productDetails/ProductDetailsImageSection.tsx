"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/utils";

import { IProductDetailsDTO } from "../../lib/interfaces/interface";
import ProductDetailsImageSectionMobile from "./ProductDetailsImageSectionMobile";

const ProductDetailsImageSection = ({ product }: { product: IProductDetailsDTO }) => {
    return (
        <section className="grid gap-2">
            <h3 className="text-sm font-medium">Product images</h3>

            {product.otherImages.length ? (
                <div>
                    {/* Mobile view */}
                    {/* The mobile view shows one image and collapses the rest */}
                    <ProductDetailsImageSectionMobile product={product} />

                    {/* Medium and Desktop view */}
                    {/* The large view shows 4 images and collapses the rest */}
                    <div className="hidden md:flex gap-3 overflow-x-auto">
                        {product.otherImages.map((image, index) => {
                            const MAX = 4;
                            const isCollapsed = index + 1 > MAX;

                            if (isCollapsed && index + 1 === MAX + 1) {
                                return (
                                    <div key={index} className="relative min-w-max">
                                        <Image
                                            key={product.productName + "-" + index}
                                            src={image}
                                            alt={product.productName}
                                            width={64}
                                            height={64}
                                            className={cn(
                                                "w-[64px] h-[64px] object-cover"
                                                // show only two images on small screen
                                                // index !== 0 && index !== productImages.length - 1
                                                //     ? "hidden md:block"
                                                //     : "block"
                                            )}
                                        />

                                        <div className="absolute top-0 bottom-0 left-0 right-0 w-[64px] h-[64px] flex justify-center bg-[#00000033] rounded-xl">
                                            <p className="flex items-center justify-center text-base text-kaiglo_grey-900 font-medium text-center absolute right-1.5 bottom-1.5 px-2 py-1 bg-white rounded-lg">
                                                +<span>{product.otherImages.length - MAX}</span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            }

                            if (index + 1 > MAX) return;

                            return (
                                <Image
                                    key={product.productName + "-" + index}
                                    src={image}
                                    alt={product.productName}
                                    width={64}
                                    height={64}
                                    className={cn(
                                        "w-[64px] h-[64px] object-cover"
                                        // index !== 0 && index !== productImages.length - 1
                                        //     ? "hidden md:block"
                                        //     : "block"
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <p>No other images added</p>
            )}
        </section>
    );
};

export default ProductDetailsImageSection;
