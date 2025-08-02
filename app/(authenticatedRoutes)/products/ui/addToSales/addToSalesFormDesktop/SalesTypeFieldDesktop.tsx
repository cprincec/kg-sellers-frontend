"use client";

import { Dispatch, SetStateAction } from "react";
import { IOngoingSale } from "../../../lib/interfaces/interface";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SalesTypeFieldDesktop = ({
    selectedSale,
    setSelectedSale,
    ongoingSales,
}: {
    selectedSale: IOngoingSale | null;
    setSelectedSale: Dispatch<SetStateAction<IOngoingSale | null>>;
    ongoingSales: IOngoingSale[];
}) => {
    return (
        <div className="grid gap-2">
            <Label className="text-sm font-medium text-kaiglo_grey-700">Ongoing Sales</Label>
            <RadioGroup
                defaultValue={selectedSale?.name}
                className="flex gap-6"
                onValueChange={(value) =>
                    setSelectedSale(
                        () => ongoingSales.find((s) => s.name.toLowerCase() === value.toLowerCase()) ?? null
                    )
                }
            >
                {ongoingSales.map((sale) => {
                    return (
                        <div key={sale.name} className="flex items-center gap-2">
                            <RadioGroupItem
                                value={sale.name}
                                id={sale.name}
                                className="w-6 h-6 border-2 border-kaiglo_grey-400"
                            />
                            <Label htmlFor={sale.name} className="text-base font-normal capitalize">
                                {sale.name}
                            </Label>
                        </div>
                    );
                })}
            </RadioGroup>
        </div>
    );
};

export default SalesTypeFieldDesktop;
