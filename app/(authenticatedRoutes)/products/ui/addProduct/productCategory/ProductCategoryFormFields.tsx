"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { IProductCategory, IProductCategoryDTO } from "../../../lib/interfaces/interface";
import { getLeafCategoryName } from "../../../lib/utils/addProduct.utils";
import { useModalContext } from "@/app/contexts/modalContext";
import ProductCategoryOptionsModal from "./ProductCategoryOptionsModal";
import { useSearchParams } from "next/navigation";

const ProductCategoryFormFields = ({ categories }: { categories: IProductCategory[] }) => {
    const {
        control,
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<IProductCategoryDTO>();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");
    const { showModal, setShowModal, setModalContent, setOnClose } = useModalContext();
    // This is the value displayed on the form field as selected by the user
    const categoryFieldValue = getLeafCategoryName(watch());

    return (
        <div className="grid gap-2">
            <Controller
                control={control}
                name="category"
                render={() => (
                    <div
                        className="grid gap-2"
                        onClick={() => {
                            if (productAction === "edit") return;

                            setModalContent(
                                <ProductCategoryOptionsModal
                                    categories={categories}
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    setValue={setValue}
                                />
                            );
                            setShowModal(true);
                            setOnClose(() => () => {
                                setShowModal(false);
                            });
                        }}
                    >
                        <Label className="text-sm md:text-base font-normal text-kaiglo_grey-700">
                            Category<span className="text-kaiglo_critical-base">*</span>
                        </Label>
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full h-[48px] justify-between rounded-lg"
                            disabled={productAction === "edit"}
                        >
                            {categoryFieldValue ? (
                                <span className="first-letter:uppercase">{categoryFieldValue}</span>
                            ) : (
                                <span className="text-sm font-normal text-kaiglo_grey-placeholder">
                                    Select category
                                </span>
                            )}
                            <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
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
