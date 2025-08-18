"use client";

import { Dispatch, SetStateAction } from "react";
import { IProduct, ProductVariantFormInterface } from "../../../lib/interfaces/interface";
import ProductVariantImageUploadTrigger from "./ProductVariantImageUploadTrigger";
import { useModalContext } from "@/app/contexts/modalContext";
import ImagePreviewCard from "../productDetails/ProductImagePreviewCard";

type Props = {
    product: IProduct;
    formData: ProductVariantFormInterface;
    setFormData: Dispatch<SetStateAction<ProductVariantFormInterface>>;
    className?: string;
    error?: string;
    imageTriggerIsDisabled: boolean;
};

const ProductVariantImageUploadField = ({
    product,
    formData,
    setFormData,
    error,
    imageTriggerIsDisabled,
}: Props) => {
    const { setShowModal, setModalContent } = useModalContext();
    const { productUrl, productViews } = product;

    // product 'otherImages' are contained in the productViews property
    const images = !productUrl
        ? []
        : productViews && productViews.length
        ? [productUrl, ...productViews.map((v) => v.productUrl)]
        : [productUrl];

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
                    // Allow images to be removed only if field is enabled
                    isRemovable={imageTriggerIsDisabled === false ? true : false}
                />
            )}

            {!formData.productUrl && (
                <ProductVariantImageUploadTrigger
                    disabled={imageTriggerIsDisabled}
                    images={images}
                    handleSelect={handleSelect}
                />
            )}

            {!formData.productUrl && error && (
                <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                    {error}
                </p>
            )}
        </div>
    );
};

export default ProductVariantImageUploadField;
