"use client";

import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import { METRIC_VARIANT_CLASSES, MetricVariant } from "../../lib/constants";
import { IconEye } from "@/public/icons/icons";
import ToolTip from "../ToolTip";
import { MetricHeaderProps } from "../../lib/interface";

const MetricHeader = ({
    title,
    icon,
    variant = "default",
    tip,
    canHideData = false,
    onToggleShowData,
}: MetricHeaderProps) => {
    return (
        <div className="flex items-center gap-3 md:px-4 lg:px-2">
            <h3
                className={cn(
                    "flex gap-1 items-center uppercase text-sm font-medium",
                    METRIC_VARIANT_CLASSES[(variant as MetricVariant) ?? "default"]
                )}
            >
                {icon && <Image src={icon} alt="icon" priority loading="eager" />}
                {title}
            </h3>

            {canHideData && onToggleShowData && (
                <Image
                    src={IconEye}
                    alt="Toggle visibility"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={onToggleShowData}
                />
            )}

            {tip && <ToolTip info={tip} />}
        </div>
    );
};

export default MetricHeader;
