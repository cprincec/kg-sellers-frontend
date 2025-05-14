"use client";

import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [displayValue, setDisplayValue] = useState<string | number | null>(null);
    const motionValue = useMotionValue(0);
    const isNumeric = typeof body === "number" || (!isNaN(Number(body)) && body !== "");

    useEffect(() => {
        if (!isNumeric) {
            setDisplayValue(null);
            return;
        }

        setLoading(true); // Show skeleton

        const target = Number(body);

        // Begin animation
        const controls = animate(motionValue, target, {
            duration: 1.2,
            onUpdate: (latest) => {
                setDisplayValue(
                    IsCurrency
                        ? `₦${Math.floor(latest).toLocaleString()}`
                        : Math.floor(latest).toLocaleString()
                );
            },
        });

        setLoading(false); // ❗ Immediately hide skeleton so count-up can show

        return () => controls.stop();
    }, [body, IsCurrency, isNumeric, motionValue]);

    const renderValue = () => {
        if (canHideData && !showData) return <p className="text-3xl">*******</p>;
        if (loading || displayValue === null) return <Skeleton className="h-7 w-28 rounded" />;
        return <motion.p className="text-2xl text-kaiglo_grey-900 font-medium">{displayValue}</motion.p>;
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
                    <Link
                        id="wallet-action"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "text-kaiglo_success-800 bg-kaiglo_success-50 capitalize rounded-3xl",
                            actionClassName
                        )}
                        href={
                            actionText.toLowerCase() === "set threshold"
                                ? "/wallet?set-payout-threshold=true"
                                : "/wallet?withdraw=selected-bank"
                        }
                    >
                        {actionText}
                    </Link>
                )}
            </div>

            {renderComparism()}
        </div>
    );
};

export default MetricBody;
