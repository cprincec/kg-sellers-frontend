"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import ToolTip from "../ToolTip";
// import { useState } from "react";
import Image from "next/image";
import { IconEye } from "@/public/icons/icons";

const Metric = ({
    title,
    body,
    comparism,
    tip,
    variant,
    showEmptyState,
    canHideData = false,
    className,
    actionText,
    actionClassName,
    action,
}: {
    title: string;
    body?: string;
    tip?: string;
    comparism?: {
        value: string;
        isPositive: boolean;
        date: string;
    } | null;
    variant?: string;
    showEmptyState: boolean;
    canHideData: boolean;
    className?: string;
    actionText?: string;
    actionClassName?: string;
    action?: () => void;
}) => {
    // const [showData, setShowData] = useState<boolean>(false);

    return (
        <section
            className={clsx(
                "grid gap-3 rounded-xl border md:border-0 border-kaiglo_grey-100 px-4 py-3 md:p-6 lg:px-4 lg:py-3 bg-white",
                className && className
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
                {canHideData && (
                    <Image src={IconEye} alt="eye" width={24} height={24} className="cursor-pointer" />
                )}
                {tip && <ToolTip info={tip} />}
            </div>
            {!showEmptyState ? (
                <div className="grid gap-1 md:px-4 lg:px-2">
                    <div className="flex justify-between">
                        <p className="text-2xl text-kaiglo_grey-900 font-medium">{body}</p>
                        {actionText && action && (
                            <Button className={clsx(actionClassName)} onClick={() => action()}>
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
            ) : (
                <strong className="text-3xl text-kaiglo_grey-900 lg:px-4">--</strong>
            )}
        </section>
    );
};
export default Metric;
