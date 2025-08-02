"use client";

import Image from "next/image";
import { IOngoingSale, IProduct } from "../../lib/interfaces/interface";

const ProductDetailsIntroSection = ({
    product,
    salesType,
}: {
    product: IProduct;
    salesType: IOngoingSale | undefined;
}) => {
    return (
        <div className="flex gap-3 lg:items-center">
            {product.productUrl ? (
                <Image
                    src={product.productUrl}
                    alt="product image"
                    width={64}
                    height={64}
                    className="w-[64px] h-[64px] rounded-lg"
                />
            ) : (
                <p>No image added</p>
            )}
            <div className="flex flex-col gap-2 w-full justify-between">
                <div className="grid grid-flow-col gap-2 justify-between">
                    {product.name ? (
                        <p className="text-sm text-kaiglo_grey-800">{product.name}</p>
                    ) : (
                        <p>No product name added</p>
                    )}
                    {salesType && (
                        <span className="hidden md:inline-flex self-start px-2 py-1 text-kaiglo_critical-600 text-sm font-medium bg-kaiglo_critical-50 rounded-lg">
                            {salesType.name}
                        </span>
                    )}
                </div>
                <h2 className="text-sm font-normal text-kaiglo_grey-500">
                    SKU:{" "}
                    {product.productColors && product.productColors[0]?.productPriceDetails[0].sku
                        ? product.productColors[0]?.productPriceDetails[0]?.sku
                        : "No product SKU"}
                </h2>
            </div>
        </div>
    );
};

export default ProductDetailsIntroSection;
