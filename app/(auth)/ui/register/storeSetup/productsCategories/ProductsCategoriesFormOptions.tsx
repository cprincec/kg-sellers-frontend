import { IProductsCategoriesDTO } from "@/app/(auth)/lib/interfaces/interface";
import useGetProductsCategories from "@/app/(authenticatedRoutes)/products/hooks/addProduct/useGetProductsCategories";
import { capitalizeFirstLetters } from "@/app/lib/utils/utils";
import Loader from "@/app/ui/Loader";
import { Checkbox } from "@/components/ui/checkbox";
import { PopoverContent } from "@/components/ui/popover";
import { ControllerRenderProps } from "react-hook-form";

const ProductsCategoriesFormOptions = ({
    field,
    removeItem,
}: {
    field: ControllerRenderProps<IProductsCategoriesDTO, "category">;
    removeItem: (item: string) => void;
}) => {
    const { productsCategories, isFetchingProductsCategories } = useGetProductsCategories();

    // toggle selected category
    const toggleOption = (option: string, isSelected: boolean) => {
        const currentValues = field.value || [];
        if (isSelected) removeItem(option);
        else field.onChange([...currentValues, option]);
    };

    if (isFetchingProductsCategories) return <Loader />;

    if (!productsCategories || productsCategories.length < 1) throw new Error("No catgories found");

    return (
        <PopoverContent className="w-[--radix-popover-trigger-width] p-4" align="start" sideOffset={8}>
            <div className="grid gap-6 lg:flex lg:flex-wrap">
                {productsCategories.map((option, idx) => {
                    const isSelected = field.value.some(
                        (val: string) => val.toLowerCase() === option.name.toLowerCase()
                    );

                    return (
                        <label
                            htmlFor={`cat-${idx}`}
                            key={idx}
                            className="flex gap-2 items-center text-base text-kaiglo_grey-base font-medium lg:p-2 cursor-pointer lg:hover:bg-kaiglo_grey-100 rounded-[4px]"
                        >
                            <Checkbox
                                id={`cat-${idx}`}
                                checked={isSelected}
                                onCheckedChange={() => toggleOption(option.name, isSelected)}
                                className={`flex items-center justify-center rounded-[5px] border border-kaiglo_grey-500 data-[state=checked]:border-kaiglo_success-base data-[state=checked]:bg-transparent data-[state=checked]:text-kaiglo_success-base`}
                                checkClassName="w-[12px] h-[10px]"
                            />
                            {capitalizeFirstLetters(option.name)}
                        </label>
                    );
                })}
            </div>
        </PopoverContent>
    );
};

export default ProductsCategoriesFormOptions;
