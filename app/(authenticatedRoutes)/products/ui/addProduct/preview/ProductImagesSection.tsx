"use client";

import Image from "next/image";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";

const ProductImagesSection = ({ productDetails }: { productDetails: IProductDetailsDTO }) => {
    const images = [productDetails.mainImage, ...productDetails.otherImages].filter(Boolean);
    // do not display more than 5 images
    const MAX_PREVIEW_IMAGES = 5;

    return (
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
                                                {1 + productDetails.otherImages.length - MAX_PREVIEW_IMAGES}
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
    );
};
export default ProductImagesSection;
