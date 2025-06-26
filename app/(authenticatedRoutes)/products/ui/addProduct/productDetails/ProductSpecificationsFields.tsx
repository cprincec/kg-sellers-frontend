"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { SampleProductSpecifications } from "../../../lib/data/data";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";
import ModifiedSelect3 from "@/components/shared/ModifiedSelect3";

const ProductSpecificationsFields = () => {
    const {
        setValue,
        getValues,
        formState: { errors },
    } = useFormContext();

    const productSpecifications = SampleProductSpecifications;

    return (
        <div className="grid gap-3 md:gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
            <h3 className="flex gap-3 items-center stext-sm md:text-base font-medium">
                PRODUCT SPECIFICATIONS <ToolTip info="Product specifications tip" />
            </h3>

            {productSpecifications.length > 0 && (
                <div className="grid lg:grid-cols-2 gap-3 md:gap-4">
                    {productSpecifications.map((specification, index: number) => (
                        <div key={index} className="grid gap-2 text-sm md:text-sm mt-1">
                            <Label className="font-normal text-sm md:text-base capitalize">
                                {specification.name}
                            </Label>
                            <ModifiedSelect3
                                name={specification.name}
                                options={specification.options}
                                onValueChange={(value) => {
                                    const selectedSpecs = getValues("specifications") || [];
                                    const copyOfSelectedSpecs = [...selectedSpecs];
                                    const specName = specification.name;

                                    // Remove the spec if the value is empty (user selected did not select any of the valid options)
                                    if (value === "null") {
                                        const filteredSpecs = copyOfSelectedSpecs.filter(
                                            (option) => option.name.toLowerCase() !== specName
                                        );
                                        setValue("specifications", filteredSpecs);
                                        return;
                                    }

                                    const newOption = {
                                        name: specification.name,
                                        option: value,
                                    };

                                    // check if specification has been selected already
                                    // if so, update it with the new selectd option
                                    // else, add the new select option
                                    const selectedOptionIndex = copyOfSelectedSpecs.findIndex(
                                        (option) =>
                                            option.name.trim().toLowerCase() ===
                                            specification.name.trim().toLowerCase()
                                    );

                                    if (selectedOptionIndex > -1) {
                                        copyOfSelectedSpecs[selectedOptionIndex] = newOption;
                                    } else {
                                        copyOfSelectedSpecs.push(newOption);
                                    }

                                    setValue("specifications", copyOfSelectedSpecs);
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
            )}
        </div>
    );
};

export default ProductSpecificationsFields;
