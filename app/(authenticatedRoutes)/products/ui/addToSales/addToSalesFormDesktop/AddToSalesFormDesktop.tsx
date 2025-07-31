"use client";

import { useState } from "react";
import { IAddToSalesDTO, IOngoingSale, IProductVariantDTO } from "../../../lib/interfaces/interface";
import { generateAddToSaleDTOFromProductVariant } from "../../../lib/utils/addProduct.utils";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import useAddToSales from "../../../hooks/useAddToSales";
import SalesTypeFieldDesktop from "./SalesTypeFieldDesktop";
import RunningPeriodDesktop from "./RunningPeriodDesktop";
import VariantsDesktop from "./VariantsDesktop";

const AddToSalesFormDesktop = ({
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
    const [selectedSale, setSelectedSale] = useState<IOngoingSale | null>(ongoingSales[0]);
    const [formState, setFormState] = useState<IAddToSalesDTO[]>(
        productVariants.map((variant) => generateAddToSaleDTOFromProductVariant(variant))
    );

    const handleChange = (indexToUpdate: number, value: number) => {
        setFormState((prev) =>
            prev.map((variant, index) =>
                index === indexToUpdate
                    ? {
                          ...variant,
                          productPriceDetail: [{ ...variant.productPriceDetail[0], newPrice: value }],
                      }
                    : variant
            )
        );
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (selectedSale)
                    addToSales({ productId, kaigloSale: selectedSale.name, payload: formState });
            }}
            className="hidden lg:grid gap-6"
        >
            <div className="grid gap-6 pb-6">
                <div className="grid gap-6">
                    {/* Sales Type */}
                    <SalesTypeFieldDesktop
                        ongoingSales={ongoingSales}
                        selectedSale={selectedSale}
                        setSelectedSale={setSelectedSale}
                    />

                    {/* Running Period */}
                    <RunningPeriodDesktop
                        startDate={selectedSale?.startDate ?? ""}
                        endDate={selectedSale?.endDate ?? ""}
                    />

                    {/* variants */}
                    <VariantsDesktop productVariants={productVariants} handleChange={handleChange} />
                </div>

                {/* Sales Quantity Disclaimer */}
                <div className="grid lg:flex gap-2">
                    <h5 className="text-xs font-bold">Sales Quantity:</h5>
                    <p className="text-xs text-kaiglo_grey-900">
                        Feel free to utilize this field at your discretion to specify quantities for sales
                        mapping.
                    </p>
                </div>
            </div>

            {/* Submit and Cancel Buttons */}
            <FormNavButtons
                submitButtonText="Add to Sales"
                cancelFunc={() => deleteSearchParams(["product-action", "product-id"], "push")}
                className="w-full grid lg:flex grid-cols-2 gap-6 justify-between lg:justify-end md:py-6"
                disabled={isAddingToSales}
            />
        </form>
    );
};

export default AddToSalesFormDesktop;
