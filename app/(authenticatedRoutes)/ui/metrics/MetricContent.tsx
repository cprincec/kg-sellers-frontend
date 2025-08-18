"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/utils";
import MetricHeader from "./MetricHeader";
import MetricBody from "./MetricBody";
import { MetricProps } from "../../lib/interface";

const MetricContent = ({
    className,
    title,
    icon,
    variant = "default",
    tip,
    body,
    IsCurrency,
    canHideData = false,
    showEmptyState = false,
    actionText,
    actionClassName,
    comparism,
}: MetricProps) => {
    const [showData, setShowData] = useState(canHideData);

    return (
        <section
            className={cn(
                "grid gap-3 rounded-xl border md:border-0 border-kaiglo_grey-100 px-4 py-3 md:p-6 lg:px-4 lg:py-3 bg-white",
                className
            )}
        >
            <MetricHeader
                title={title}
                icon={icon}
                variant={variant}
                tip={tip}
                canHideData={canHideData}
                onToggleShowData={() => setShowData((prev) => !prev)}
            />

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

export default MetricContent;
