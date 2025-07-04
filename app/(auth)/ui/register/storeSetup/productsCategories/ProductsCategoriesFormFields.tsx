"use client";

import { Label } from "@/components/ui/label";
import { Popover } from "@/components/ui/popover";
import ProductsCategoriesFormTrigger from "./ProductsCategoriesFormTrigger";
import ProductsCategoriesFormOptions from "./ProductsCategoriesFormOptions";
import { useState } from "react";
import { IProductsCategoriesDTO } from "@/app/(auth)/lib/interfaces/interface";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";

const ProductsCategoriesFormFields = ({
    field,
    removeItem,
    errors,
}: {
    errors: FieldErrors<IProductsCategoriesDTO>;
    field: ControllerRenderProps<IProductsCategoriesDTO, "category">;
    removeItem: (item: string) => void;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="grid gap-2">
            <Label className="text-sm md:text-base text-kaiglo_grey-700 capitalize font-normal">
                Category <span className="text-kaiglo_critical-error font-medium">*</span>
            </Label>

            <Popover open={open} onOpenChange={setOpen}>
                <ProductsCategoriesFormTrigger fieldValue={field.value} open={open} removeItem={removeItem} />
                <ProductsCategoriesFormOptions removeItem={removeItem} field={field} />
            </Popover>

            {errors?.category && (
                <p className="text-sm md:text-base mt-3 font-normal text-kaiglo_critical-base">
                    {errors.category.message}
                </p>
            )}
        </div>
    );
};

export default ProductsCategoriesFormFields;
