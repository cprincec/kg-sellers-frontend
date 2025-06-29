"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { IProductDTO } from "../../lib/interfaces/interface";
import ActionButton from "./ActionButton";
import { cn } from "@/lib/utils/utils";
import { getSalesTypeStyle, getStatusStyle, getStockLevelStyle } from "../../lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { productActions } from "../../lib/data/data";
import { ImageProduct1 } from "@/public/images/landingPage/images";

const ProductsTableBody = ({ products }: { products: IProductDTO[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {products.map((product, index: number) => {
                let salesType, daysLeft, noSales;

                if (product.salesType.length === 1) {
                    salesType = product.salesType[0];
                } else if (product.salesType.length === 2) {
                    salesType = product.salesType[0];
                    daysLeft = product.salesType[1];
                } else {
                    noSales = "no sales";
                    salesType = "";
                    daysLeft = "";
                }
                const image = product.productImages?.length
                    ? URL.createObjectURL(product.productImages[0])
                    : product.productImage;

                return (
                    <TableRow key={index}>
                        <TableCell className="p-3 text-base">{index + 1}</TableCell>
                        <TableCell
                            className="p-3 text-sm text-wrap max-w-[300px] cursor-pointer"
                            onClick={() => setSearchParams([{ "product-id": index.toString() }])}
                        >
                            <div className="flex gap-1.5 items-center">
                                {image ? (
                                    <Image
                                        src={image}
                                        alt={product.productName}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12"
                                    />
                                ) : (
                                    <Image
                                        src={ImageProduct1}
                                        alt={product.productName}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12"
                                    />
                                )}
                                <span className="mt-1.5 text-left">{product.productName}</span>
                            </div>
                        </TableCell>
                        <TableCell className="p-3 text-sm text-kaiglo_grey-700 font-medium text-center">
                            {product.sku}
                        </TableCell>
                        <TableCell className="p-3 text-sm">
                            <div className="relative inline-block border border-kaiglo_grey-200 rounded-xl pr-2.5 pl-1 py-1">
                                <span
                                    className={cn(
                                        "capitalize before:w-[6px] before:h-[6px] before:rounded-full before:mt-[1px] before:absolute before:left-1 before:top-1/2 before:-translate-y-1/2 pl-4 relative",
                                        getStatusStyle(product.status)
                                    )}
                                >
                                    {product.status}
                                </span>
                            </div>
                        </TableCell>

                        <TableCell className="p-3 text-sm text-kaiglo_grey-700 font-medium text-center">
                            {product.quantity}
                        </TableCell>
                        <TableCell className="p-3 text-sm capitalize">
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
                        </TableCell>
                        <TableCell className="p-3 text-sm capitalize">
                            {/* <div> */}
                            <ul className="grid gap-2 justify-center">
                                {salesType && (
                                    <li
                                        className={cn(
                                            "font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1",
                                            getSalesTypeStyle(salesType)
                                        )}
                                    >
                                        {salesType}
                                    </li>
                                )}
                                {daysLeft && (
                                    <li className="text-kaiglo_grey-700 font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1">
                                        {daysLeft}
                                    </li>
                                )}
                                {noSales && <li className="text-kaiglo_grey-700 font-medium">{noSales}</li>}
                            </ul>
                            {/* </div> */}
                        </TableCell>

                        <TableCell className="p-3 text-sm text-center">
                            ₦{product.amount.toLocaleString()}
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center">{product.dateCreated}</TableCell>
                        <TableCell className="p-3 text-sm text-center">
                            <ActionButton
                                actions={productActions}
                                className="w-max m-auto"
                                productId={index.toString()}
                            />
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ProductsTableBody;
