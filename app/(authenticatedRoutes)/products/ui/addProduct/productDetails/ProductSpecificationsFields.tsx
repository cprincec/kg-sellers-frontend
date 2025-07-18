"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";
import ModifiedSelect3 from "@/components/shared/ModifiedSelect3";
import { IProductSpecification, IProductSpecificationDTO } from "../../../lib/interfaces/interface";

const ProductSpecificationsFields = ({ specifications }: { specifications: IProductSpecification[] }) => {
    const {
        setValue,
        getValues,
        formState: { errors },
    } = useFormContext();

    const defaultSpecs: IProductSpecificationDTO[] = getValues("specifications") ?? [];

    return (
        <div className="grid gap-3 md:gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
            <h3 className="flex gap-3 items-center text-sm md:text-base font-medium">
                PRODUCT SPECIFICATIONS <ToolTip info="Product specifications tip" />
            </h3>

            <div className="grid lg:grid-cols-2 gap-3 md:gap-4">
                {specifications.map((spec, index) => (
                    <div key={`${spec.name}-${index}`} className="grid gap-2 text-sm md:text-sm mt-1">
                        <Label className="font-normal text-sm md:text-base capitalize">{spec.name}</Label>

                        <ModifiedSelect3
                            defaultValue={defaultSpecs.find((d) => d.name === spec.name)?.option || ""}
                            name={spec.name}
                            options={spec.options}
                            onValueChange={(value) => {
                                const currentSpecs = getValues("specifications") ?? [];
                                const updatedSpecs = currentSpecs.filter(
                                    (option: IProductSpecification) =>
                                        option.name.trim().toLowerCase() !== spec.name.trim().toLowerCase()
                                );

                                if (value !== "") {
                                    updatedSpecs.push({ name: spec.name, option: value });
                                }

                                setValue("specifications", updatedSpecs);
                            }}
                        />
                    </div>
                ))}

                {errors.specifications && (
                    <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                        {errors.specifications.message as string}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductSpecificationsFields;
