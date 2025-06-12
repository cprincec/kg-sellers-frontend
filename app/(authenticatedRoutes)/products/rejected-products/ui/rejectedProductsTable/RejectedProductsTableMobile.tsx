"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";

const RejectedProductsTableMobile = ({
    rejectedProducts,
}: {
    rejectedProducts: {
        productImage: StaticImageData;
        productName: string;
        status: string;
        amount: number;
        quantity: number;
        dateCreated: string;
    }[];
}) => {
    return (
        <div className="lg:hidden">
            <ul className="border border-kaiglo_grey-200 rounded-lg">
                {rejectedProducts.map((product, index) => {
                    return (
                        <li
                            key={index}
                            className={cn(
                                "flex items-center gap-3 p-3 border-kaiglo_grey-200",
                                index < rejectedProducts.length - 1 && "border-b"
                            )}
                        >
                            <Link
                                href={`/products/rejected-products?rejected-product-id=${index.toString()}`}
                                className="flex items-center gap-3 w-full"
                            >
                                <div className="w-8 h-8 bg-gray-200 rounded-[4px] shrink-0">
                                    <Image
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="rounded-[4px]"
                                    />
                                </div>
                                <h3 className="text-sm font-normal truncate">{product.productName}</h3>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default RejectedProductsTableMobile;
