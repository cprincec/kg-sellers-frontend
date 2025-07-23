"use client";

import { Dispatch, SetStateAction } from "react";
import { ProductVariantFormInterface } from "../../../lib/interfaces/interface";
import ProductVariantImageUploadTrigger from "./ProductVariantImageUploadTrigger";
import { useAddProductContext } from "../../../contexts/addProductContext";
import { useModalContext } from "@/app/contexts/modalContext";
import ImagePreviewCard from "../productDetails/ProductImagePreviewCard";

type Props = {
    formData: ProductVariantFormInterface;
    setFormData: Dispatch<SetStateAction<ProductVariantFormInterface>>;
    className?: string;
};

const ProductVariantImageUploadField = ({ formData, setFormData }: Props) => {
    const { productDraft } = useAddProductContext();
    const { setShowModal, setModalContent } = useModalContext();

    if (!productDraft) return null;

    const { productUrl, productViews } = productDraft;
    const images = [productUrl];

    if (productViews) {
        productViews.forEach((productView) => {
            if (productView.colorCode === null) images.push(productView.productUrl);
        });
    }

    const handleSelect = (newVariantImage: string) => {
        setFormData((prev) => ({
            ...prev,
            productUrl: newVariantImage,
        }));

        setShowModal(false);
        setModalContent(null);
    };

    const handleRemove = () => {
        setFormData((prev) => ({
            ...prev,
            productUrl: "",
        }));
    };

    return (
        <div>
            {formData.productUrl && (
                <ImagePreviewCard
                    index={0}
                    previewUrl={formData.productUrl}
                    isMainImage={false}
                    handleRemoveImage={handleRemove}
                    isRemovable={true}
                />
            )}

            {!formData.productUrl && (
                <ProductVariantImageUploadTrigger images={images} handleSelect={handleSelect} />
            )}
        </div>
    );
};

export default ProductVariantImageUploadField;
