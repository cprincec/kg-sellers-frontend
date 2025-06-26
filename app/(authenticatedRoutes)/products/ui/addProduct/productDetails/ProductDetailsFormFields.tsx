"use client";

import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import ControlledModifiedTextArea from "@/components/controlledElements/ControlledModifiedTextArea";
import ProductImageField from "./ProductImageField";
import { Label } from "@/components/ui/label";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";
import { useFormContext } from "react-hook-form";
import ProductSpecificationsFields from "./ProductSpecificationsFields";

const ProductDetailsFormFields = () => {
    // Get methods from form context
    const {
        control,
        formState: { errors },
    } = useFormContext<IProductDetailsDTO>();

    return (
        <div className="grid gap-4">
            {/* Images */}
            <div className="grid gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <h3 className="text-sm md:text-base font-medium">PRODUCT IMAGE</h3>
                    <p className="text-sm">
                        Image must not exceed 700kb and 600 x 600px (size).
                        <span className="text-kaiglo_critical-base"> Upload at least 3 images</span>
                    </p>
                </div>

                <ProductImageField<IProductDetailsDTO>
                    mainImageKey="mainImage"
                    otherImagesKey="otherImages"
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
            <ProductSpecificationsFields />

            {/* Description */}
            <div className="grid gap-3 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <Label className="flex gap-3 items-center text-sm md:text-base font-medium text-kaiglo_grey-900">
                        PRODUCT DESCRIPTION
                        <ToolTip info="Product description tip" />
                    </Label>
                    <ControlledModifiedTextArea
                        label="Adding a product description helps potential buyers understand the features, and unique
                     qualities of your product."
                        name="description"
                        control={control}
                        placeholder="Product Details"
                        error={errors.description}
                        isRequired={false}
                        className="text-base"
                        rows={10}
                        labelClassNames="text-sm font-medium text-kaiglo_grey-600 mb-4"
                        rules={{ required: false }}
                    />
                </div>
            </div>

            {/* SEO */}
            <div>
                <div className="grid gap-2 lg:px-6 lg:pt-4 pb-6 ">
                    <Label className="text-sm md:text-base font-medium text-kaiglo_grey-900">
                        PRODUCT DESCRIPTION SUMMARY
                    </Label>
                    <ControlledModifiedInput
                        label="Adding SEO to your product listings helps increase visibility in search engines, driving more organic traffic to your store"
                        name="seo"
                        control={control}
                        placeholder="Product Description Summary"
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
