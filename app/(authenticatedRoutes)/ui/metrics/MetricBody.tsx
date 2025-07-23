"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { MetricBodyProps } from "../../lib/interface";
import { formatCurrency } from "../../lib/utils";

const MetricBody = ({
    body,
    IsCurrency,
    showData = true,
    canHideData = false,
    actionText,
    actionClassName,
    comparism,
}: MetricBodyProps) => {
    const { setSearchParams } = useUpdateSearchParams();

    // Show empty state if body is undefined or null
    const isMissing = body === null || body === undefined;
    const displayValue = isMissing ? "--" : IsCurrency ? formatCurrency(body) : body;

    return (
        <div className="grid gap-1 md:px-4 lg:px-2">
            <div className="flex justify-between">
                {canHideData && !showData ? (
                    <p className="text-3xl">*******</p>
                ) : (
                    <p className="text-2xl text-kaiglo_grey-900 font-medium">{displayValue}</p>
                )}

                {actionText && (
                    <Button
                        id="wallet-action"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "text-kaiglo_success-800 bg-kaiglo_success-50 capitalize rounded-3xl hover:bg-kaiglo_success-100",
                            actionClassName
                        )}
                        onClick={() => {
                            if (actionText.toLowerCase() === "set threshold") {
                                setSearchParams([{ "set-payout-threshold": "true" }]);
                            } else {
                                setSearchParams([{ withdraw: "selected-bank" }]);
                            }
                        }}
                    >
                        {actionText}
                    </Button>
                )}
            </div>

            {comparism && (
                <p className="flex items-center gap-1 text-sm text-kaiglo_grey-700 font-medium">
                    {comparism.isPositive ? (
                        <span className="flex items-center gap-0.5 text-kaiglo_success-light">
                            <ArrowUp className="w-4 h-4" /> {comparism.value}
                        </span>
                    ) : (
                        <span className="flex items-center gap-0.5 text-kaiglo_critical-error">
                            <ArrowDown className="w-4 h-4" /> {comparism.value}
                        </span>
                    )}
                    <span>from {comparism.date}</span>
                </p>
            )}
        </div>
    );
};

export default MetricBody;
