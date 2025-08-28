"use client";

import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { ChangeEvent, useRef } from "react";
import { cn } from "@/lib/utils/utils";
import { handleProductImageUpload } from "../../../lib/utils/addProduct.utils";
import ImageUploadTrigger from "./ImageUploadTrigger";
import ImagePreviewCard from "./ProductImagePreviewCard";
import { useModalContext } from "@/app/contexts/modalContext";
import CropperModal from "./CropperModal";

type Props<T extends FieldValues> = {
    mainImageKey: Path<T>;
    otherImagesKey?: Path<T>;
    isMultiple?: boolean;
    isCroppable?: boolean;
    className?: string;
};

const ProductImageField = <T extends FieldValues>({
    mainImageKey,
    otherImagesKey,
    isMultiple = true,
    isCroppable,
    className,
}: Props<T>) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { setShowModal, setModalContent, setOnClose } = useModalContext();

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
    const handleCroppableImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || !files[0]) return;

        const imageUrl = URL.createObjectURL(files[0]);
        setModalContent(<CropperModal uploadedFile={imageUrl} handleCrop={handleCrop} />);
        setShowModal(true);
        setOnClose(() => () => setShowModal(false));
        e.target.value = "";
    };

    const handleCrop = (croppedImage: string) => {
        // Main image has been uploaded
        if (mainImageValue && otherImagesKey) {
            setValue(otherImagesKey, [...otherImagesValue, croppedImage] as PathValue<
                T,
                typeof otherImagesKey
            >);
        } else {
            // main image has not been uploaded
            setValue(mainImageKey, croppedImage as PathValue<T, typeof mainImageKey>);
        }
        setShowModal(false);
        setModalContent(null);
    };

    const ImageUploadHandler = isCroppable ? handleCroppableImageUpload : handleImageUpload;

    const handleRemoveImage = (isMainImage?: boolean, index?: number) => {
        if (index === null || index === undefined) return;

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
                        isMainImage={index === 0}
                        handleRemoveImage={handleRemoveImage}
                    />
                ))}

                {/* Allow upload of only one image base on the 'isMultiple' parameter */}
                {(isMultiple && otherImagesKey) || imageUrls.length < 1 ? (
                    <ImageUploadTrigger
                        // if image is croppable, then only isMultiple is false
                        isMultiple={!isCroppable}
                        fileInputRef={fileInputRef}
                        handleImageUpload={ImageUploadHandler}
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
