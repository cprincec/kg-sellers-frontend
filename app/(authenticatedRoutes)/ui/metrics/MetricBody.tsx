"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

interface Comparism {
    value: string;
    date: string;
    isPositive: boolean;
}

interface MetricBodyProps {
    body: string | number;
    IsCurrency?: boolean;
    showData?: boolean;
    canHideData?: boolean;
    actionText?: string;
    actionClassName?: string;
    comparism?: Comparism | null;
}

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
    const [loading, setLoading] = useState<boolean>(true);
    const [displayValue, setDisplayValue] = useState<string | number | null>(null);
    const isNumeric = typeof body === "number" || (!isNaN(Number(body)) && body !== "");

    useEffect(() => {
        if (!isNumeric) {
            setDisplayValue(null);
            return;
        }

        setLoading(true);

        const timeout = setTimeout(() => {
            const value = Number(body);
            const formatted = IsCurrency
                ? `₦${Math.floor(value).toLocaleString()}`
                : Math.floor(value).toLocaleString();
            setDisplayValue(formatted);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [body, IsCurrency, isNumeric]);

    const renderValue = () => {
        if (canHideData && !showData) return <p className="text-3xl">*******</p>;
        if (loading || displayValue === null) return <Skeleton className="h-7 w-28 rounded" />;
        return <p className="text-2xl text-kaiglo_grey-900 font-medium">{displayValue}</p>;
    };

    const renderComparism = () => {
        if (loading && comparism) {
            return <Skeleton className="h-5 w-36 mt-1" />;
        }

        if (!comparism) return null;

        const { isPositive, value, date } = comparism;

        return (
            <p className="flex items-center gap-1 text-sm text-kaiglo_grey-700 font-medium">
                {isPositive ? (
                    <span className="flex items-center gap-0.5 text-kaiglo_success-light">
                        <ArrowUp className="w-4 h-4" /> {value}
                    </span>
                ) : (
                    <span className="flex items-center gap-0.5 text-kaiglo_critical-error">
                        <ArrowDown className="w-4 h-4" /> {value}
                    </span>
                )}
                <span>from {date}</span>
            </p>
        );
    };

    return (
        <div className="grid gap-1 md:px-4 lg:px-2">
            <div className="flex justify-between">
                {renderValue()}

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

            {renderComparism()}
        </div>
    );
};

export default MetricBody;
