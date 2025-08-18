"use client";

import ProductVariantsTable from "../productVariants/ProductVariantsTable";
import { IProduct, IProductVariantDTO } from "../../../lib/interfaces/interface";
import { useSearchParams } from "next/navigation";
import { generateProductVariantDTOs } from "../../../lib/utils/addProduct.utils";
import ProductPreviewEditButton from "./ProductPreviewEditButton";

const ProductVariantsSection = ({ product }: { product: IProduct }) => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";
    const productAction = searchParams.get("product-action");
    const productVariants: IProductVariantDTO[] = generateProductVariantDTOs(product);

    return (
        <div className="grid">
            {productAction === "edit" && productId && (
                <ProductPreviewEditButton productId={productId} section="variants" />
            )}

            <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
                <h2 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h2>

                {productVariants.length ? (
                    <ProductVariantsTable showTitle={false} showActions={false} />
                ) : (
                    <h3>No variants added</h3>
                )}
            </section>
        </div>
    );
};

export default ProductVariantsSection;
