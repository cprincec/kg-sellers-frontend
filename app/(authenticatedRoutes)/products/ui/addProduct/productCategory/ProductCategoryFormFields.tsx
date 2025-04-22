"use client";

import { productsCategoriesList } from "@/app/(authenticatedRoutes)/products/lib/data";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IProductCategoryFormValue } from "../../../lib/interface";

const ProductCategoryFormFields = ({
    control,
    errors,
}: {
    control: Control<IProductCategoryFormValue>;
    errors: FieldErrors<IProductCategoryFormValue>;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="grid gap-2">
            <Controller
                control={control}
                name="productCategory"
                render={({ field: { value, onChange } }) => (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <div className="grid gap-2">
                                <Label className="text-sm md:text-base font-normal text-kaiglo_grey-700">
                                    Category<span className="text-kaiglo_critical-base">*</span>
                                </Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full h-[48px] justify-between rounded-lg"
                                >
                                    {value ? (
                                        <span>{value}</span>
                                    ) : (
                                        <span className="text-sm font-normal text-kaiglo_grey-placeholder">
                                            Select category
                                        </span>
                                    )}
                                    <ChevronDown className="h-4 w-4 ml-2" />
                                </Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent
                            className="w-full h-full flex flex-col gap-0 px-3 md:px-0 py-3 md:left-auto md:right-0 md:translate-x-0 border-none sm:rounded-none"
                            closeBtnClassName="mt-4 mr-4"
                        >
                            <DialogHeader className="border-b">
                                <DialogTitle className="text-left px-3 md:px-5 py-4 font-medium text-lg text-kaiglo_grey-800 capitalized">
                                    Select a Category
                                </DialogTitle>
                                <DialogDescription className="h-0 w-0 hidden" />
                            </DialogHeader>
                            <div className="grid">
                                {productsCategoriesList.map((category) => (
                                    <Button
                                        key={category}
                                        variant={value === category ? "secondary" : "ghost"}
                                        className={cn(
                                            "justify-start px-3 md:px-6 py-4 font-medium text-base capitalized md:rounded-none",
                                            value !== category && "text-kaiglo_grey-800 bg-transparent"
                                        )}
                                        onClick={() => {
                                            onChange(category);
                                            setOpen(false);
                                        }}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            />

            {errors.productCategory && (
                <p className="text-sm text-red-500">{errors.productCategory.message}</p>
            )}
        </div>
    );
};

export default ProductCategoryFormFields;
