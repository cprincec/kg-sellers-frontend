"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { IProduct } from "../../lib/interfaces/interface";
import ActionButton from "./ActionButton";
import { cn } from "@/lib/utils/utils";
import {
    calculateProductQuantity,
    formatDateDMMMYYY,
    // getSalesTypeStyle,
    getStatusStyle,
    // getStockLevelStyle,
} from "../../lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { productActions } from "../../lib/data/data";

const ProductsTableBody = ({ products }: { products: IProduct[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {products.map((product, index: number) => {
                // let salesType, daysLeft, noSales;

                // if (product.salesType.length === 1) {
                //     salesType = product.salesType[0];
                // } else if (product.salesType.length === 2) {
                //     salesType = product.salesType[0];
                //     daysLeft = product.salesType[1];
                // } else {
                //     noSales = "no sales";
                //     salesType = "";
                //     daysLeft = "";
                // }

                const sales = product.sales || "no sales";
                const quantity =
                    product.productColors && product.productColors.length
                        ? calculateProductQuantity(product)
                        : "";
                const sku =
                    product.productColors && product.productColors.length
                        ? product.productColors[0].productPriceDetails[0].sku
                        : "";
                const price =
                    product.productColors && product.productColors.length
                        ? `₦${product.productColors[0].productPriceDetails[0].price.toLocaleString()}`
                        : "";

                return (
                    <TableRow key={index}>
                        <TableCell className="p-3 text-base">{index + 1}</TableCell>
                        <TableCell
                            className="p-3 text-sm text-wrap max-w-[300px] cursor-pointer"
                            onClick={() => setSearchParams([{ "product-id": index.toString() }])}
                        >
                            <div className="flex gap-1.5 items-center">
                                {product.productUrl ? (
                                    <Image
                                        src={product.productUrl}
                                        alt={product.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12"
                                    />
                                ) : null}
                                <span className="mt-1.5 text-left">{product.name}</span>
                            </div>
                        </TableCell>
                        <TableCell className="p-3 text-sm text-kaiglo_grey-700 font-medium text-center">
                            {sku}
                        </TableCell>
                        <TableCell className="p-3 text-sm">
                            <div className="flex justify-center">
                                <div className="relative border border-kaiglo_grey-200 rounded-xl pr-2.5 pl-1 py-1">
                                    <span
                                        className={cn(
                                            "capitalize before:w-[6px] before:h-[6px] before:rounded-full before:mt-[1px] before:absolute before:left-1 before:top-1/2 before:-translate-y-1/2 pl-4 relative",
                                            getStatusStyle(product.productStatus.status)
                                        )}
                                    >
                                        {product.productStatus.status}
                                    </span>
                                </div>
                            </div>
                        </TableCell>

                        <TableCell className="p-3 text-sm text-kaiglo_grey-700 font-medium text-center">
                            {quantity}
                        </TableCell>
                        {/* <TableCell className="p-3 text-sm capitalize">
                            <div className="flex items-center justify-center">
                                 <span
                                    className={cn(
                                        "border px-2 py-1 rounded-xl",
                                        getStockLevelStyle(product.stockLevel)
                                    )}
                                >
                                    {product.stockLevel}
                                </span> 
                            </div>
                        </TableCell> */}
                        <TableCell className="p-3 text-sm capitalize">
                            {/* <div> */}
                            <ul className="grid gap-2 justify-center">
                                {/* {salesType && (
                                    <li
                                        className={cn(
                                            "font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1",
                                            getSalesTypeStyle(salesType)
                                        )}
                                    >
                                        {salesType}
                                    </li>
                                )} */}
                                {/* {daysLeft && (
                                    <li className="text-kaiglo_grey-700 font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1">
                                        {daysLeft}
                                    </li>
                                )}
                                {noSales && <li className="text-kaiglo_grey-700 font-medium">{noSales}</li>} */}
                                <li className="text-kaiglo_grey-700 font-medium">{sales}</li>
                            </ul>
                            {/* </div> */}
                        </TableCell>

                        <TableCell className="p-3 text-sm text-center">{price}</TableCell>
                        <TableCell className="p-3 text-sm text-center">
                            {formatDateDMMMYYY(product.createdDate)}
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center">
                            <ActionButton
                                actions={productActions}
                                className="w-max m-auto"
                                productId={product.id}
                            />
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ProductsTableBody;
