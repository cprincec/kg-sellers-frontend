"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import ToolTip from "../ToolTip";
import { useState } from "react";
import Image from "next/image";
import { IconEye } from "@/public/icons/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Metric = ({
    title,
    body,
    IsCurrency = false,
    comparism,
    tip,
    variant,
    showEmptyState,
    canHideData = false,
    className,
    actionText,
    actionClassName,
}: {
    title: string;
    body: string;
    IsCurrency?: boolean;
    tip?: string;
    comparism?: {
        value: string;
        isPositive: boolean;
        date: string;
    } | null;
    variant?: string;
    showEmptyState: boolean;
    canHideData?: boolean;
    className?: string;
    actionText?: string;
    actionClassName?: string;
}) => {
    const [showData, setShowData] = useState<boolean>(canHideData);

    return (
        <section
            className={cn(
                "grid gap-3 rounded-xl border md:border-0 border-kaiglo_grey-100 px-4 py-3 md:p-6 lg:px-4 lg:py-3 bg-white",
                className
            )}
        >
            <div className="flex items-center gap-3 md:px-4 lg:px-2">
                <h3
                    className={`uppercase text-sm font-medium ${
                        variant?.toLowerCase() === "warning"
                            ? "text-kaiglo_attention-500"
                            : variant?.toLowerCase() === "error"
                            ? "text-kaiglo_critical-error"
                            : "text-kaiglo_grey-600"
                    }`}
                >
                    {title}
                </h3>
                {/* Eye icon starts */}
                {canHideData && (
                    <Image
                        src={IconEye}
                        alt="eye"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => setShowData((prev) => !prev)}
                    />
                )}
                {/* Eye icon ends */}

                {/* Tool tip starts */}
                {tip && <ToolTip info={tip} />}
                {/* Tool tip starts */}
            </div>
            {!showEmptyState ? (
                <div className="grid gap-1 md:px-4 lg:px-2">
                    <div className="flex justify-between">
                        {canHideData ? (
                            showData ? (
                                <p className="text-2xl text-kaiglo_grey-900 font-medium">
                                    {IsCurrency ? `₦${parseFloat(body).toLocaleString()}` : body}
                                </p>
                            ) : (
                                <p className="text-3xl">*******</p>
                            )
                        ) : (
                            <p className="text-2xl text-kaiglo_grey-900 font-medium">
                                {IsCurrency ? `₦${parseFloat(body).toLocaleString()}` : body}
                            </p>
                        )}

                        {actionText && (
                            <Link
                                id="wallet-action"
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
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
            ) : (
                <strong className="text-3xl text-kaiglo_grey-900 lg:px-4">--</strong>
            )}
        </section>
    );
};
export default Metric;
