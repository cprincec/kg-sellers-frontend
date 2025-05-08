"use client";

import { useState } from "react";
import { IProductVariant, ProductVariant } from "../../../lib/interface";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductsFields from "./ProductsFields";

type Props = {
    productVariants: IProductVariant[] | ProductVariant[];
};

const AddToSalesFormFieldsDesktop = ({ productVariants }: Props) => {
    const [saleType, setSaleType] = useState("black-friday");
    const [formState, setFormState] = useState(
        productVariants.map(() => ({
            saleType: saleType,
            salesQuantity: "",
            discountPrice: "",
        }))
    );

    const handleChange = (index: number, field: "salesQuantity" | "discountPrice", value: string) => {
        const updated = [...formState];
        updated[index][field] = value;
        setFormState(updated);
    };

    return (
        <form className="hidden lg:grid gap-6">
            <div className="grid gap-6">
                {/* Sales Type */}
                <div className="grid gap-2">
                    <Label className="text-sm font-medium text-kaiglo_grey-700">Ongoing Sales</Label>
                    <RadioGroup defaultValue={saleType} className="flex gap-6" onValueChange={setSaleType}>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="black-friday"
                                id="black-friday"
                                className="w-6 h-6 border-2 border-kaiglo_grey-400"
                            />
                            <Label htmlFor="black-friday" className="text-base font-normal">
                                Black Friday
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="christmas-sales"
                                id="christmas-sales"
                                className="w-6 h-6 border-2 border-kaiglo_grey-400"
                            />
                            <Label htmlFor="christmas-sales" className="text-base font-normal">
                                Christmas Sales
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Running Period */}
                <div className="grid gap-2 py-2">
                    <p className="text-sm font-medium text-kaiglo_grey-700">Select date period</p>
                    <div className="grid grid-cols-2 gap-6">
                        <Input
                            type="text"
                            className="h-10 text-sm font-normal text-kaiglo_grey-placeholder"
                            placeholder="Start Date"
                            disabled
                        />

                        <Input
                            type="text"
                            className="h-10 text-sm font-normal text-kaiglo_grey-placeholder"
                            placeholder="End Date"
                            disabled
                        />
                    </div>
                </div>

                {/* Products */}
                <ProductsFields productVariants={productVariants} handleChange={handleChange} />
            </div>

            {/* Sales Quantity Disclaimer */}
            <div className="grid lg:flex gap-2">
                <h5 className="text-xs font-bold">Sales Quantity:</h5>
                <p className="text-xs text-kaiglo_grey-900">
                    Feel free to utilize this field at your discretion to specify quantities for sales
                    mapping.
                </p>
            </div>
        </form>
    );
};

export default AddToSalesFormFieldsDesktop;
