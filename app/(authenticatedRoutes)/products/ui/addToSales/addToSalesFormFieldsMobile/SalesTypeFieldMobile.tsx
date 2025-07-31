"use client";

import { IOngoingSale } from "../../../lib/interfaces/interface";
import { Dispatch, SetStateAction } from "react";
import ModifiedSelect3 from "@/components/shared/ModifiedSelect3";

const SalesTypeFieldMobile = ({
    setSelectedSale,
    ongoingSales,
}: {
    setSelectedSale: Dispatch<SetStateAction<IOngoingSale | null>>;
    ongoingSales: IOngoingSale[];
}) => {
    return (
        <div className="grid gap-2">
            <p className="text-base font-medium text-kaiglo_grey-800">Ongoing Sales</p>
            <ModifiedSelect3
                className="font-normal text-base bg-kaiglo_grey-50 px-2 py-3 rounded-lg text-kaiglo_grey-base border border-kaiglo_grey-disabled"
                name="ongoing-sales"
                key={"ongoing-sales"}
                options={ongoingSales.map((s) => s.name)}
                defaultValue={""}
                isRequired={true}
                placeholder="Select an ongoing sale"
                onValueChange={(value) =>
                    setSelectedSale(
                        () => ongoingSales.find((s) => s.name.toLowerCase() === value.toLowerCase()) ?? null
                    )
                }
            />
        </div>
    );
};

export default SalesTypeFieldMobile;
