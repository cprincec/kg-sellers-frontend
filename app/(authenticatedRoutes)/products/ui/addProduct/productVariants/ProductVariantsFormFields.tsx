"use client";

import { IColor, ProductVariantsFormFieldProps } from "../../../lib/interfaces/interface";
import ModifiedSelect2 from "@/components/shared/ModifiedSelect2";
import ModifiedInput from "@/components/shared/ModifiedInput";
import ProductVariantImageUploadField from "./ProductVariantImageUploadField";
import ModifiedSelect3 from "@/components/shared/ModifiedSelect3";
import { useSearchParams } from "next/navigation";

const ProductVariantsFormFields = ({
    formData,
    setFormData,
    productMeta,
    fields,
    findFieldIndex,
    formErrors,
    product,
}: ProductVariantsFormFieldProps) => {
    const variantAction = useSearchParams().get("variant-action");
    const requiredAttributes = ["color", "quantity", "price"];
    const defaultColorValue = formData.attributes.find((a) => a.key === "color")?.value ?? "";
    const colorIndex = findFieldIndex("color");
    const colorFieldIsDisabled = variantAction === "edit";

    /******************************************************************************
     * The image selector will be disabled in these scenerios:
     * 1. if color is not yet selected
     * 2. if color is selected and a variant with same color already exists
     * in the above case, the image for that variant should already be displayed
     * instead of the trigger button
     ******************************************************************************/
    const selectedColor = colorIndex > -1 ? formData.attributes[colorIndex].value : "";
    const imageTriggerIsDisabled =
        !formData.attributes.find((a) => a.key === "color")?.value ||
        !!product.productColors?.find((variant) => variant.color.colorCode === selectedColor) ||
        colorFieldIsDisabled;

    const updateValue = (key: string, value: string) => {
        setFormData((prev) => {
            const existingIndex = findFieldIndex(key);
            const attributes = [...prev.attributes];

            const isExisting = existingIndex > -1;
            const isEmpty = value === "";

            if (isExisting && isEmpty) {
                // Remove attribute if value is cleared
                attributes.splice(existingIndex, 1);
            } else if (isExisting) {
                // Update existing attribute
                attributes[existingIndex].value = value;
            } else if (!isEmpty) {
                // Add new attribute
                attributes.push({
                    key,
                    value,
                    metadata: "",
                });
            }

            return { ...prev, attributes };
        });
    };

    return (
        <div className="grid lg:flex gap-4 w-full">
            <ProductVariantImageUploadField
                product={product}
                formData={formData}
                setFormData={setFormData}
                error={formErrors.productUrl}
                imageTriggerIsDisabled={imageTriggerIsDisabled}
            />
            <div className="grid lg:grid-cols-2 gap-4 w-full">
                <ModifiedSelect2
                    key={`${defaultColorValue}`}
                    defaultValue={defaultColorValue}
                    label={"Color"}
                    name="color"
                    placeholder="Select Colour"
                    valueKey="colorCode"
                    labelKey="color"
                    options={productMeta?.productColorCode as IColor[]}
                    onValueChange={(color) => {
                        updateValue("color", color);

                        const variantWithSameColor = product.productColors?.find(
                            (variant) => variant.color.colorCode === color
                        );
                        if (variantWithSameColor) {
                            setFormData((prev) => ({
                                ...prev,
                                productUrl: variantWithSameColor.colorUrl,
                            }));
                        } else
                            setFormData((prev) => ({
                                ...prev,
                                productUrl: "",
                            }));
                    }}
                    isRequired={true}
                    className="text-sm md:text-sm mt-1 lg:mt-2"
                    labelClassNames="text-sm md:text-sm"
                    disabled={colorFieldIsDisabled}
                />

                <ModifiedInput
                    id={"quantity"}
                    value={formData.attributes[findFieldIndex("quantity")]?.value ?? ""}
                    onValueChange={(e) => updateValue("quantity", e.target.value)}
                    label={"Quantity"}
                    placeholder={"Quantity"}
                    isRequired={true}
                    className="text-sm md:text-sm"
                    labelClassNames="text-sm md:text-sm"
                />

                <ModifiedInput
                    id={"price"}
                    value={formData.attributes[findFieldIndex("price")]?.value ?? ""}
                    onValueChange={(e) => updateValue("price", e.target.value)}
                    label={"Price"}
                    placeholder={"Price"}
                    type={"number"}
                    inputMode="numeric"
                    isRequired={true}
                    className="text-sm md:text-sm"
                    labelClassNames="text-sm md:text-sm"
                />

                {fields.map((field, index) => {
                    // Color, quantity and price are required fields for all products
                    if (!requiredAttributes.includes(field.title))
                        if (field.input === false && field.dialogOption && productMeta) {
                            const defaultValue =
                                formData.attributes.find((a) => a.key === field.title.toLowerCase())?.value ??
                                "";
                            return (
                                <ModifiedSelect3
                                    label={field.title}
                                    labelClassName="text-sm md:text-sm"
                                    className="text-sm md:text-sm mt-1 lg:mt-2"
                                    onValueChange={(value) => updateValue(field.title, value)}
                                    name={field.title}
                                    key={defaultValue}
                                    options={productMeta?.dialogOptions[field.dialogOption]}
                                    defaultValue={
                                        formData.attributes.find((a) => a.key === field.title.toLowerCase())
                                            ?.value ?? ""
                                    }
                                />
                            );
                        } else {
                            return (
                                <ModifiedInput
                                    key={index}
                                    id={field.title}
                                    value={formData.attributes[findFieldIndex(field.title)]?.value ?? ""}
                                    onValueChange={(e) => updateValue(field.title, e.target.value)}
                                    label={field.title}
                                    placeholder={`${field.title[0].toUpperCase()}${field.title.substring(1)}`}
                                    type={(field.type as string) ?? "text"}
                                    isRequired={field.required ?? false}
                                    className="text-sm md:text-sm"
                                    labelClassNames="text-sm md:text-sm"
                                />
                            );
                        }
                })}
            </div>
        </div>
    );
};

export default ProductVariantsFormFields;
