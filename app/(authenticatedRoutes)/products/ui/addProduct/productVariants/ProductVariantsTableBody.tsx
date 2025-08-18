"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ActionButton from "../../productsTable/ActionButton";
import { productVariantActions } from "../../../lib/data/data";
// import { Dispatch, SetStateAction } from "react";
import { generateProductVariantDTOs } from "../../../lib/utils/addProduct.utils";
import { IProduct, IProductMeta } from "../../../lib/interfaces/interface";

const ProductVariantsTableBody = ({
    product,
    productAction,
    productMetaData,
    showSizeColumn,
    showActions,
}: {
    product: IProduct;
    productAction: string;
    productMetaData: IProductMeta;
    showActions: boolean;
    showSizeColumn: boolean;
}) => {
    const productVariants = generateProductVariantDTOs(product);

    return (
        <TableBody>
            {productVariants.map((variant, index: number) => {
                const size = variant.productColor.productPriceDetails[0].attributes.find(
                    (a) => a.key === "size"
                )?.value;

                // if (!size) setShowSizeColumn(false);

                const colorCode = variant.productColor.productPriceDetails[0].attributes.find(
                    (a) => a.key === "color"
                )?.value;

                const color = productMetaData?.productColorCode.find(
                    (colorObj) => colorObj.colorCode === colorCode
                )?.color;

                return (
                    <TableRow key={index}>
                        <TableCell className="p-3 max-w-[300px] text-sm text-wrap text-kaiglo_grey-base">
                            <div className="flex gap-3 items-center">
                                <Image
                                    src={variant.productColor.colorUrl}
                                    alt={product.name + " variant" + index + 1}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-cover"
                                />
                                <span className="mt-1.5 text-sm font-medium capitalize text-kaiglo_grey-base">
                                    {product.name}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                            {color ?? variant.productColor.color.color}
                        </TableCell>
                        {showSizeColumn && (
                            <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                                {size ?? variant.productColor.productPriceDetails[0].size}
                            </TableCell>
                        )}
                        <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                            {variant.productColor.productPriceDetails[0].quantity}
                        </TableCell>
                        <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                            {`₦${variant.productColor.productPriceDetails[0].price.toLocaleString()}`}
                        </TableCell>
                        {showActions && (
                            <TableCell className="p-3 text-sm text-center">
                                <ActionButton
                                    className="w-max m-auto"
                                    variantId={variant.productColor.productPriceDetails[0].id}
                                    productId={product.id}
                                    actions={productVariantActions}
                                    disabled={
                                        productAction !== "edit" ||
                                        ((action: string) => {
                                            if (action.toLowerCase() === "pause variant") {
                                                return (
                                                    variant.productColor.productPriceDetails[0].isPaused ??
                                                    false
                                                );
                                            }
                                            return false;
                                        })
                                    }
                                />
                            </TableCell>
                        )}
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default ProductVariantsTableBody;
