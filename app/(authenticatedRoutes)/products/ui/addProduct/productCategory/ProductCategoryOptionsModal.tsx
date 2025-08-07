import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils/utils";
import { ChevronLeft } from "lucide-react";
import {
    IProductCategory,
    IProductCategoryOptionsModalProps,
    IProductSubCategory,
} from "../../../lib/interfaces/interface";
import { PRODUCT_CATEGORY_KEYS } from "../../../lib/constants";
import { useRef, useState } from "react";

const ProductCategoryOptionsModal = ({
    categories,
    setShowModal,
    setValue,
}: IProductCategoryOptionsModalProps) => {
    const [path, setPath] = useState<(IProductCategory | IProductSubCategory)[]>([]);
    const currentDepth = useRef(0);
    // Compute current level dynamically from the path
    const currentLevel = path.length
        ? path[path.length - 1].category.length
            ? path[path.length - 1].category
            : path[path.length - 2].category ?? []
        : categories;

    const handleCategoryClick = (option: IProductCategory | IProductSubCategory) => {
        let updatedPath = [...path, option];

        if (!option.category?.length) {
            const isSiblingNode = currentDepth.current === path.length - 1;
            if (isSiblingNode) updatedPath = [...path.splice(0, currentDepth.current), option];

            // Display the clicked category name in the form field
            setShowModal(false);

            // Update all category field values
            for (let i = 0; i < PRODUCT_CATEGORY_KEYS.length; i++) {
                setValue(PRODUCT_CATEGORY_KEYS[i], updatedPath[i]?.name ?? "");
            }
        } else currentDepth.current += 1;

        setPath(updatedPath);
    };

    const handleBackClick = () => {
        if (currentDepth.current <= 0) return;
        currentDepth.current -= 1;
        setPath(path.slice(0, currentDepth.current));
    };

    return (
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
            {currentDepth.current > 0 && (
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
                                key={`${option.name}-${index}`}
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
    );
};
export default ProductCategoryOptionsModal;
