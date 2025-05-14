"use client";

import ToolTip from "../ToolTip";
import { useState } from "react";
import Image from "next/image";
import { IconEye } from "@/public/icons/icons";
import { cn } from "@/lib/utils";
import { MetricProps } from "../../lib/interface";
import { getMetricVariant } from "../../lib/utils";
import MetricBody from "./MetricBody";

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
    icon,
}: MetricProps) => {
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
                    className={cn(
                        "flex gap-1 items-center uppercase text-sm font-medium text-kaiglo_grey-500",
                        variant && getMetricVariant(variant)
                    )}
                >
                    {icon && <Image src={icon} alt="icon" />}
                    {title}
                </h3>

                {/* Eye icon */}
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

                {/* Tool tip */}
                {tip && <ToolTip info={tip} />}
            </div>

            {!showEmptyState ? (
                <MetricBody
                    body={body}
                    IsCurrency={IsCurrency}
                    showData={showData}
                    canHideData={canHideData}
                    actionText={actionText}
                    actionClassName={actionClassName}
                    comparism={comparism}
                />
            ) : (
                <strong className="text-3xl text-kaiglo_grey-900 lg:px-4">--</strong>
            )}
        </section>
    );
};
export default Metric;
