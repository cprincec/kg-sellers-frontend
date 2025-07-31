"use client";

import Image from "next/image";
import { IProduct } from "../../lib/interfaces/interface";

const ProductDetailsIntroSection = ({ product }: { product: IProduct }) => {
    return (
        <div className="flex gap-3 lg:items-center">
            <Image
                src={product.productUrl}
                alt="product image"
                width={64}
                height={64}
                className="w-[64px] h-[64px] rounded-lg"
            />
            <div className="flex flex-col gap-2 w-full justify-between">
                <div className="grid grid-flow-col gap-2 justify-between">
                    <p className="text-sm text-kaiglo_grey-800">{product.name}</p>
                    <span className="hidden md:inline-flex self-start px-2 py-1 text-kaiglo_critical-600 text-sm font-medium bg-kaiglo_critical-50 rounded-lg">
                        {/* {salesType} */}
                    </span>
                </div>
                <h2 className="text-sm font-normal text-kaiglo_grey-500">
                    SKU: {product.productColors && product.productColors[0].productPriceDetails[0].sku}
                </h2>
            </div>
        </div>
    );
};

export default ProductDetailsIntroSection;
