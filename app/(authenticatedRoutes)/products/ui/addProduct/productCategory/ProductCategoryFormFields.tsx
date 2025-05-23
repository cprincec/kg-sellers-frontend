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
import { useState, useEffect } from "react";
import { Control, Controller, FieldErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { IProductCategoryFormValue } from "../../../lib/interface";
import { categories } from "../../../lib/data/productCategories.data";
import { getPathFromCategoryPath } from "../../../lib/utils";

export type CategoryNode = {
    category: string;
    subcategory?: CategoryNode[];
};

const ProductCategoryFormFields = ({
    control,
    errors,
    setValue,
    getValues,
}: {
    control: Control<IProductCategoryFormValue>;
    errors: FieldErrors<IProductCategoryFormValue>;
    setValue: UseFormSetValue<IProductCategoryFormValue>;
    getValues: UseFormGetValues<IProductCategoryFormValue>;
}) => {
    const [open, setOpen] = useState(false);
    const [path, setPath] = useState<CategoryNode[]>([]);
    const [selectedPath, setSelectedPath] = useState<string[]>([]);

    // Initialize selected path when dialog opens
    useEffect(() => {
        if (open) {
            const productCategoryPath = getValues("productCategoryPath");
            setSelectedPath(productCategoryPath || []);
            const initialPath = getPathFromCategoryPath(productCategoryPath);
            setPath(initialPath);
        } else {
            setPath([]);
        }
    }, [open, getValues]);

    const currentLevel = path.length === 0 ? categories : path[path.length - 1].subcategory || [];

    const isLeaf = (node: CategoryNode) => !node.subcategory || node.subcategory.length === 0;

    const isInSelectedPath = (node: CategoryNode) => {
        // Check if this node is part of the selected path
        return selectedPath.includes(node.category);
    };

    const isCurrentInPath = (node: CategoryNode) => {
        // Check if this node is the next expected node in the navigation path
        if (path.length === 0) return false;

        // Compare against the current navigation path, not selectedPath
        return path[path.length - 1].category === node.category;
    };

    const handleBackClick = () => {
        setPath((prev) => prev.slice(0, -1));
        // Don't update selectedPath here to maintain the final selection
    };

    const handleCategoryClick = (option: CategoryNode) => {
        if (isLeaf(option)) {
            // Don't include the leaf in the path as per your requirement
            const finalPath = [...path.map((p) => p.category)];
            setValue("productCategory", option.category);
            setValue("productCategoryPath", finalPath);
            setSelectedPath(finalPath); // Update the selectedPath state
            setOpen(false);
        } else {
            const newPath = [...path, option];
            setPath(newPath);
            const newPathValues = newPath.map((p) => p.category);
            setValue("productCategoryPath", newPathValues);
            setSelectedPath(newPathValues); // Update the selectedPath state
        }
    };

    return (
        <div className="grid gap-2">
            <Controller
                control={control}
                name="productCategory"
                render={({ field: { value } }) => (
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
                            className="w-full md:w-[400px] h-full flex flex-col gap-0 px-3 md:px-0 py-3 md:left-auto md:right-0 md:translate-x-0 border-none sm:rounded-none"
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
                                        onClick={handleBackClick}
                                        variant="ghost"
                                        className="w-full text-kaiglo_grey-800 text-sm font-medium flex items-center gap-2 mb-3"
                                    >
                                        <ChevronLeft className="h-4 w-4" /> Back
                                    </Button>
                                )}
                                <div className="grid gap-3">
                                    {currentLevel.map((option, index) => (
                                        <Button
                                            key={`${option.category}-${index}`}
                                            className={cn(
                                                "justify-start px-2 md:px-6 py-4 font-medium text-base text-kaiglo_grey-800 capitalized md:rounded-none bg-transparent hover:bg-kaiglo_grey-100",
                                                isInSelectedPath(option) &&
                                                    "bg-kaiglo_success-50 text-kaiglo_brand-base",
                                                isCurrentInPath(option) &&
                                                    "bg-kaiglo_success-100/80 text-kaiglo_brand-base"
                                            )}
                                            onClick={() => handleCategoryClick(option)}
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
