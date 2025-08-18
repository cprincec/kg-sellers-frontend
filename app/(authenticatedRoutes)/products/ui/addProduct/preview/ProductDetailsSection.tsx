"use client";

import ProductSpecificationsSection from "./ProductSpecificationsSection";
import { IProduct } from "../../../lib/interfaces/interface";
import { generateProductDetailsDTO } from "../../../lib/utils/addProduct.utils";
import { useSearchParams } from "next/navigation";
import ProductImagesSection from "./ProductImagesSection";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductNameSection from "./ProductNameSection";
import ProductPreviewEditButton from "./ProductPreviewEditButton";

const ProductDetailsSection = ({
    product,
    productDescription,
}: {
    product: IProduct;
    productDescription: string;
}) => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";
    const productAction = searchParams.get("product-action");
    const productDetails = generateProductDetailsDTO(product, productDescription);

    return (
        <div className="grid gap-6">
            <div className="grid">
                {productAction === "edit" && productId && (
                    <ProductPreviewEditButton productId={productId} section="details" />
                )}
                {/* product images */}
                <ProductImagesSection productDetails={productDetails} />
            </div>

            {/* Product name */}
            <ProductNameSection productDetails={productDetails} />

            {/* Product specifications */}
            <ProductSpecificationsSection product={product} />

            {/* Product description */}
            <ProductDescriptionSection productDetails={productDetails} />
        </div>
    );
};
export default ProductDetailsSection;
