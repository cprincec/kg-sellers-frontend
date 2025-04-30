"use client";

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
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IProductCategoryFormValue } from "../../../lib/interface";
import { categories } from "../../../lib/data/productCategories.data";

export type CategoryNode = {
    category: string;
    subcategory?: CategoryNode[];
};

const ProductCategoryFormFields = ({
    control,
    errors,
}: {
    control: Control<IProductCategoryFormValue>;
    errors: FieldErrors<IProductCategoryFormValue>;
}) => {
    const [open, setOpen] = useState(false);
    const [path, setPath] = useState<CategoryNode[]>([]);

    const currentLevel = path.length === 0 ? categories : path[path.length - 1].subcategory ?? [];

    const isLeaf = (node: CategoryNode) => !node.subcategory || node.subcategory.length === 0;

    return (
        <div className="grid gap-2">
            <Controller
                control={control}
                name="productCategory"
                render={({ field: { value, onChange } }) => (
                    <Dialog
                        open={open}
                        onOpenChange={(val) => {
                            setOpen(val);
                            if (!val) setPath([]);
                        }}
                    >
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
                                <DialogTitle className="text-left px-3 md:px-5 py-4 font-medium text-lg text-kaiglo_grey-800">
                                    {path.length > 0 ? path[path.length - 1].category : "Select a Category"}
                                </DialogTitle>
                                <DialogDescription className="h-0 w-0 hidden" />
                            </DialogHeader>

                            <div className="px-2 py-2">
                                {path.length > 0 && (
                                    <Button
                                        onClick={() => setPath((prev) => prev.slice(0, -1))}
                                        variant="ghost"
                                        className="w-full text-kaiglo_grey-800 text-sm font-medium flex items-center gap-2 mb-3"
                                    >
                                        <ChevronLeft className="h-4 w-4" /> Back
                                    </Button>
                                )}
                                <div className="grid gap-3">
                                    {currentLevel.map((option) => (
                                        <Button
                                            key={option.category}
                                            className={cn(
                                                "justify-start px-2 md:px-6 py-4 font-medium text-base text-kaiglo_grey-800  capitalized md:rounded-none bg-transparent hover:bg-kaiglo_grey-100"
                                            )}
                                            variant={
                                                value.split(">")[value.split(">").length - 1] ===
                                                option.category
                                                    ? "ghost"
                                                    : "secondary"
                                            }
                                            onClick={() => {
                                                if (isLeaf(option)) {
                                                    const fullPath = [...path, option]
                                                        .map((n) => n.category)
                                                        .join(" > ");
                                                    onChange(fullPath);
                                                    setOpen(false);
                                                    setPath([]);
                                                } else {
                                                    setPath((prev) => [...prev, option]);
                                                }
                                            }}
                                        >
                                            {option.category}
                                        </Button>
                                    ))}
                                </div>
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
