"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { IOngoingSale, IProduct } from "../../lib/interfaces/interface";
import ActionButton from "./ActionButton";
import { cn } from "@/lib/utils/utils";
import { calculateProductQuantity, formatDateDMMMYYY, getStatusStyle } from "../../lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { productActions } from "../../lib/data/data";
import { formatDistance } from "date-fns";

const ProductsTableBody = ({
    products,
    ongoingSales,
}: {
    products: IProduct[];
    ongoingSales: IOngoingSale[];
}) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {products.map((product, index: number) => {
                const saleType =
                    product.sales &&
                    ongoingSales.length &&
                    ongoingSales.find((s) => s.name.toLowerCase() === product.kaigloSale.toLowerCase());

                const daysLeft =
                    saleType && formatDistance(new Date(saleType.startDate), new Date(saleType.endDate));

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
                            onClick={() => setSearchParams([{ "product-id": product.id }])}
                        >
                            <div className="flex gap-1.5 items-center min-w-max">
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
                        <TableCell className="p-3 text-sm">
                            {/* <div> */}
                            <ul className="grid gap-2 justify-center">
                                {saleType && (
                                    <li
                                        className={cn(
                                            "font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1 lowercase first-letter:capitalize"
                                        )}
                                        style={{ color: saleType.colors.productName }}
                                    >
                                        {saleType.name}
                                    </li>
                                )}

                                {daysLeft && (
                                    <li className="text-kaiglo_grey-700 font-medium text-center border border-kaiglo_grey-200 rounded-2xl px-2 py-1 first-letter:capitalize">
                                        {daysLeft} left
                                    </li>
                                )}

                                {!saleType && <li className="text-kaiglo_grey-700 font-medium">No sales</li>}
                            </ul>
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
                                disabled={(action: string) => {
                                    console.log(action);
                                    if (action.toLowerCase() === "edit product")
                                        return product.productStatus.status === "PENDING";
                                    else return false;
                                }}
                            />
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ProductsTableBody;
