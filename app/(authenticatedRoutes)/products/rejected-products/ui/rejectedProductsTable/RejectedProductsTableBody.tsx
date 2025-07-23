"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import { IRejectedProductDTO } from "../../../lib/interfaces/interface";
import { IconEdit, IconTrash2 } from "@/public/icons/icons";
import Link from "next/link";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const RejectedProductsTableBody = ({ rejectedProducts }: { rejectedProducts: IRejectedProductDTO[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {rejectedProducts.map((product, index: number) => {
                return (
                    <TableRow key={index}>
                        <TableCell className="p-3 text-base">{index + 1}</TableCell>
                        <TableCell
                            className="p-3 text-sm text-wrap max-w-[300px] cursor-pointer"
                            onClick={() => setSearchParams([{ "rejected-product-id": index.toString() }])}
                        >
                            <div className="grid grid-flow-col gap-1.5 items-center">
                                <Image
                                    src={product.productImage}
                                    alt={product.productName}
                                    width={48}
                                    height={48}
                                />
                                <span className="mt-1.5">{product.productName}</span>
                            </div>
                        </TableCell>
                        <TableCell className="p-3 text-sm text-kaiglo_grey-700 font-medium text-center">
                            {product.quantity}
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center">{product.dateCreated}</TableCell>
                        <TableCell className="p-3 text-sm text-center">₦{product.amount}</TableCell>
                        <TableCell className="p-3 text-sm">
                            <div className="w-min m-auto flex justify-center border border-kaiglo_grey-200 rounded-lg">
                                <span className={cn("capitalize px-3 py-1 text-kaiglo_critical-600")}>
                                    {product.status}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center">
                            <div className="w-max m-auto flex gap-6">
                                <Image src={IconEdit} alt="Edit" />
                                <Link
                                    href={`/products/rejected-products?product-action=delete-product&id=${index}`}
                                >
                                    <Image src={IconTrash2} alt="Trash" />
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default RejectedProductsTableBody;
