"use client";

import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { useRef } from "react";
import { cn } from "@/lib/utils/utils";
import { handleProductImageUpload } from "../../../lib/utils/addProduct.utils";
import ImageUploadTrigger from "./ImageUploadTrigger";
import ImagePreviewCard from "./ProductImagePreviewCard";

type Props<T extends FieldValues> = {
    mainImageKey: Path<T>;
    otherImagesKey?: Path<T>;
    isMultiple?: boolean;
    className?: string;
};

const ProductImageField = <T extends FieldValues>({
    mainImageKey,
    otherImagesKey,
    isMultiple = true,
    className,
}: Props<T>) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        setError,
        clearErrors,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<T>();
    const mainImageError = errors?.[mainImageKey];
    const otherImagesError = otherImagesKey ? errors?.[otherImagesKey] : undefined;

    const mainImageValue = watch(mainImageKey);
    const otherImagesValue = otherImagesKey ? watch(otherImagesKey) || [] : [];

    const imageUrls = [mainImageValue, ...(Array.isArray(otherImagesValue) ? otherImagesValue : [])].filter(
        Boolean
    );

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleProductImageUpload({
            e,
            mainImageKey,
            otherImagesKey,
            mainImageValue,
            otherImagesValue,
            setValue,
            setError,
            clearErrors,
        });
    };

    const handleRemoveImage = (isMainImage: boolean, index: number) => {
        if (isMainImage) {
            // replace main image with first image in 'other images' array
            setValue(mainImageKey, otherImagesValue[0] || "");

            if (otherImagesKey && otherImagesValue.length > 0)
                // update 'other images' array
                setValue(
                    otherImagesKey,
                    ([...otherImagesValue].slice(1) || []) as PathValue<T, typeof otherImagesKey>
                );
        } else {
            if (otherImagesKey)
                setValue(
                    otherImagesKey,
                    otherImagesValue.filter((_, i) => i !== index - 1) as PathValue<T, typeof otherImagesKey>
                );
        }

        clearErrors(mainImageKey);
        if (otherImagesKey) clearErrors(otherImagesKey);
    };

    return (
        <div className={cn("grid gap-4 w-auto", className)}>
            <div className="flex gap-4 w-fit flex-wrap">
                {imageUrls.map((url: string, index: number) => (
                    <ImagePreviewCard
                        key={index}
                        index={index}
                        previewUrl={url}
                        isMainImage={index === 0 && isMultiple}
                        handleRemoveImage={handleRemoveImage}
                    />
                ))}

                {/* Allow upload of only one image base on the 'isMultiple' parameter */}
                {(isMultiple && otherImagesKey) || imageUrls.length < 1 ? (
                    <ImageUploadTrigger
                        isMultiple={isMultiple}
                        fileInputRef={fileInputRef}
                        handleImageUpload={handleImageUpload}
                    />
                ) : null}
            </div>

            {/* Display Image errors */}
            {(mainImageError || otherImagesError) && (
                <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                    {(mainImageError || otherImagesError)?.message as string}
                </p>
            )}
        </div>
    );
};

export default ProductImageField;
