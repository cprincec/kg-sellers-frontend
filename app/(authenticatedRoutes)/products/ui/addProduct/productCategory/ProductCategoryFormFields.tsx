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
import { cn } from "@/lib/utils/utils";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Control, Controller, FieldErrors, UseFormReset, UseFormSetValue } from "react-hook-form";
import {
    IProductCategory,
    IProductCategoryDTO,
    IProductSubCategory,
} from "../../../lib/interfaces/interface";
import { useAddProductContext } from "../../../contexts/addProductContext";

const ProductCategoryFormFields = ({
    categories,
    control,
    errors,
    setValue,
    reset,
}: {
    categories: IProductCategory[];
    control: Control<IProductCategoryDTO>;
    errors: FieldErrors<IProductCategoryDTO>;
    setValue: UseFormSetValue<IProductCategoryDTO>;
    reset: UseFormReset<IProductCategoryDTO>;
}) => {
    const [selectedCategories, setSelectedCategories] = useState<(IProductCategory | IProductSubCategory)[]>(
        []
    );
    const { productCategory } = useAddProductContext();

    const BASE_DEPTH = 0;
    const currentDepth = useRef<number>(0);

    const categoriesKeys: (keyof IProductCategoryDTO)[] = [
        "category",
        "subCategory",
        "secondSubCategory",
        "thirdSubCategory",
        "fourthSubCategory",
        "fifthSubCategory",
    ];

    const [open, setOpen] = useState<boolean>(false);
    const [currentLevel, setCurrentLevel] = useState<IProductCategory[] | IProductSubCategory[]>(categories);
    const [categoryFieldValue, setCategoryFieldValue] = useState<string | null>(
        Object.values(productCategory).pop() || null
    );

    const isLeafNode = (node: IProductCategory | IProductSubCategory) =>
        !node.category || node.category.length === 0;

    const handleCategoryClick = (option: IProductCategory | IProductSubCategory) => {
        let updatedSelectedCategories = [];

        // Check for leaf node
        const isLeaf = isLeafNode(option);

        // if leaf node
        if (isLeaf) {
            // check if option is on same depth as last selected option
            const isOnSameDepth = selectedCategories.length - 1 === currentDepth.current;

            if (isOnSameDepth) {
                // update list of selected categories with selected option object
                // while updating, replace the last selected option with the clicked option
                // since they are on the same depth
                updatedSelectedCategories = [...selectedCategories.slice(0, currentDepth.current), option];
            } else {
                // update list of selected categories with selected option object
                updatedSelectedCategories = [...selectedCategories, option];
            }

            // Display the clicked category name in the form field
            setCategoryFieldValue(option.name);

            // Close the modal
            setOpen(false);

            // Reset selections stored in form
            reset();

            // update category field form value with names of all selected category
            updatedSelectedCategories.forEach((category, index) => {
                setValue(categoriesKeys[index], category.name);
            });
        }
        // if not leaf node
        else {
            // update list of selected categories with selected option object
            updatedSelectedCategories = [...selectedCategories, option];

            // update current level
            setCurrentLevel(option.category);

            // update current depth
            currentDepth.current += 1;
            console.log(currentDepth);
        }

        setSelectedCategories(updatedSelectedCategories);
    };

    const handleBackClick = () => {
        const canGoBack = currentDepth.current > BASE_DEPTH;

        if (!canGoBack) return;
        // decrement current depth
        currentDepth.current -= 1;

        // remove last category from seleted categories list
        const updatedSelectedCategories = selectedCategories.slice(0, currentDepth.current);

        // Set the current level based on the new depth
        const parent = updatedSelectedCategories[currentDepth.current - 1];
        const prevLevel = parent ? parent.category : categories;

        setCurrentLevel(prevLevel);
        setSelectedCategories(updatedSelectedCategories);
    };

    useEffect(() => {
        if (open) {
            currentDepth.current = BASE_DEPTH;
            setCurrentLevel(categories);
            setSelectedCategories([]);
        }
    }, [open]);

    return (
        <div className="grid gap-2">
            <Controller
                control={control}
                name="category"
                render={() => (
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
                                    {categoryFieldValue ? (
                                        <span>{categoryFieldValue}</span>
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
                                    Select a Category
                                </DialogTitle>
                                <DialogDescription className="h-0 w-0 hidden" />
                            </DialogHeader>
                            {currentDepth.current > BASE_DEPTH && (
                                <div className="p-2 pb-0">
                                    <Button
                                        onClick={() => handleBackClick()}
                                        variant="ghost"
                                        className="w-full text-kaiglo_grey-800 text-base font-medium flex items-center gap-2 px-2 md:px-6 py-2"
                                    >
                                        <ChevronLeft className="h-4 w-4" /> Back
                                    </Button>
                                </div>
                            )}
                            <div className="p-2 overflow-y-auto">
                                <div className="grid gap-3">
                                    {currentLevel.map((option, index) => {
                                        return (
                                            <Button
                                                key={`${option.category}-${index}`}
                                                className={cn(
                                                    "justify-start px-2 md:px-6 py-4 font-medium text-base text-kaiglo_grey-800 capitalized md:rounded-none bg-transparent hover:bg-kaiglo_grey-100"
                                                )}
                                                onClick={() => handleCategoryClick(option)}
                                            >
                                                {option.name}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            />
            {errors.category && (
                <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                    {errors.category.message}
                </p>
            )}
        </div>
    );
};

export default ProductCategoryFormFields;
