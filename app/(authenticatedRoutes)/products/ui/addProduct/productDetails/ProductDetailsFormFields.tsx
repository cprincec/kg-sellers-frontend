"use client";

import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import ProductImageField from "./ProductImageField";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";
import { Controller, useFormContext } from "react-hook-form";
import ProductSpecificationsFieldsWrapper from "./ProductSpecificationsFieldsWrapper";
import { useEffect, useRef } from "react";
import { Editor } from "@/components/blocks/editor-00/editor";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/utils";

const ProductDetailsFormFields = () => {
    const imageFieldRef = useRef<HTMLDivElement>(null);

    const {
        control,
        formState: { errors },
    } = useFormContext<IProductDetailsDTO>();

    useEffect(() => {
        if (errors.mainImage || errors.otherImages) {
            imageFieldRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [errors.mainImage, errors.otherImages]);

    return (
        <div className="grid gap-4">
            {/* Images */}
            <div ref={imageFieldRef} className="grid gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <h3 className="text-sm md:text-base font-medium">
                        <span>
                            PRODUCT IMAGE <span className="text-kaiglo_critical-error font-medium">*</span>
                        </span>
                    </h3>
                    <p className="text-sm">
                        Image must not exceed 700kb and 600 x 600px (size).
                        <span className="text-kaiglo_critical-base"> Upload at least 3 images</span>
                    </p>
                </div>

                <ProductImageField<IProductDetailsDTO>
                    mainImageKey="mainImage"
                    otherImagesKey="otherImages"
                    isCroppable={true}
                />
            </div>

            {/* Name */}
            <div className="lg:px-6 lg:pt-4 pb-6 border-b">
                <ControlledModifiedInput
                    label="PRODUCT NAME"
                    name="productName"
                    control={control}
                    placeholder="Enter product name"
                    type="text"
                    error={errors.productName}
                    isRequired={true}
                    className="text-base md:text-sm mt-1"
                    labelClassNames="text-sm md:text-base font-medium"
                    rules={{ required: true }}
                />
            </div>

            {/* Specifications */}
            <ProductSpecificationsFieldsWrapper />

            {/* Description */}
            <div className="grid gap-3 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <h3 className="flex gap-3 items-center text-sm md:text-base font-medium text-kaiglo_grey-900">
                        <span>
                            PRODUCT DESCRIPTION{" "}
                            <span className="text-kaiglo_critical-error font-medium">*</span>
                        </span>
                        <ToolTip info="Product description" />
                    </h3>
                    <Label className={cn("md:text-base text-sm font-medium text-kaiglo_grey-600 mb-4")}>
                        Adding a product description helps potential buyers understand the features, and
                        unique qualities of your product.
                    </Label>

                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => (
                            <div>
                                <Editor
                                    editorSerializedState={field.value ? JSON.parse(field.value) : null}
                                    onSerializedChange={(value) => field.onChange(JSON.stringify(value))}
                                    placeholder={"Enter product details here"}
                                />

                                {errors.description && (
                                    <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                                        {errors.description.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />
                </div>
            </div>

            {/* SEO */}
            <div>
                <div className="grid gap-2 lg:px-6 lg:pt-4 pb-6 ">
                    <h3 className="text-sm md:text-base font-medium text-kaiglo_grey-900">
                        PRODUCT DESCRIPTION SUMMARY
                    </h3>
                    <ControlledModifiedInput
                        label="input good keywords here, separated by commas, to help people find your products when they search online."
                        name="seo"
                        control={control}
                        placeholder="(e.g., hats, scarves, gloves)"
                        type="text"
                        error={errors.seo}
                        isRequired={false}
                        className="text-sm md:text-sm mt-4"
                        labelClassNames="text-sm font-medium text-kaiglo_grey-600"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsFormFields;
