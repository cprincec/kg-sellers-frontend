"use client";

import { IAddToSalesDTO, IOngoingSale, IProductVariantDTO } from "../../../lib/interfaces/interface";
import ProductVariantsFields from "./VariantsMobile";
import RunningPeriodMobile from "./RunningPeriodMobile";
import { generateAddToSaleDTOFromProductVariant } from "../../../lib/utils/addProduct.utils";
import { useState } from "react";
import useAddToSales from "../../../hooks/useAddToSales";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import SalesTypeFieldMobile from "./SalesTypeFieldMobile";

const AddToSalesFormMobile = ({
    productVariants,
    ongoingSales,
    productId,
}: {
    productVariants: IProductVariantDTO[];
    ongoingSales: IOngoingSale[];
    productId: string;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const { addToSales, isAddingToSales } = useAddToSales();
    const [selectedSale, setSelectedSale] = useState<IOngoingSale | null>(null);
    const [formState, setFormState] = useState<IAddToSalesDTO[]>(
        productVariants.map((variant) => generateAddToSaleDTOFromProductVariant(variant))
    );
    const [touchedFields, setTouchedFields] = useState<boolean[]>([]);

    const handleChange = (index: number, value: number) => {
        setFormState((prev) =>
            prev.map((variant, i) =>
                i === index
                    ? {
                          ...variant,
                          productPriceDetail: [{ ...variant.productPriceDetail[0], newPrice: value }],
                      }
                    : variant
            )
        );

        // Mark as touched
        setTouchedFields((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (selectedSale)
                    addToSales({ productId, kaigloSale: selectedSale.name, payload: formState });
            }}
            className="grid lg:hidden gap-6"
        >
            <div className="grid gap-5 w-full">
                {/* Ongoing Sales */}
                <SalesTypeFieldMobile setSelectedSale={setSelectedSale} ongoingSales={ongoingSales} />

                {/* Running Period */}
                <RunningPeriodMobile
                    startDate={selectedSale?.startDate ?? ""}
                    endDate={selectedSale?.endDate ?? ""}
                />

                {/* Variant Accordions */}
                <ProductVariantsFields
                    touchedFields={touchedFields}
                    formState={formState}
                    handleChange={handleChange}
                    productVariants={productVariants}
                />

                {/* Sales Quantity Disclaimer */}
                <div className="grid gap-2">
                    <h5 className="text-xs font-medium">Sales Quantity:</h5>
                    <p className="text-xs text-kaiglo_grey-600">
                        Feel free to utilize this field at your discretion to specify quantities for sales
                        mapping.
                    </p>
                </div>
            </div>

            {/* Submit and Cancel Buttons */}
            <FormNavButtons
                submitButtonText="Add to Sales"
                cancelFunc={() => deleteSearchParams(["product-action", "product-id"], "push")}
                className="w-full grid lg:flex grid-cols-2 gap-6 justify-between lg:justify-end"
                disabled={isAddingToSales}
            />
        </form>
    );
};

export default AddToSalesFormMobile;
