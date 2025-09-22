"use client";

import { IconTooltip } from "@/public/icons/icons";
import Image from "next/image";

const ToolTip = ({
    heading,
    info,
    className,
    tipClassName,
    showTip,
}: {
    heading?: string;
    info: string;
    className?: string;
    tipClassName?: string;
    showTip?: boolean;
}) => {
    return (
        <div className="group relative cursor-pointer">
            <Image
                src={IconTooltip}
                alt="tooltip"
                className={`w-5 h-5 ${className}`}
                width={20}
                height={20}
            />

            <div
                className={`z-50 ${
                    !showTip && "hidden group-hover:block"
                } absolute left-1/2 transform -translate-x-1/2 animate-fadeIn ${
                    tipClassName && tipClassName
                }`}
            >
                <div className="w-[12px] h-[12px] rotate-45 bg-kaiglo_grey-200 mx-auto"></div>
                {heading && <h3 className="text-kaiglo_grey-700 text-sm font-medium">{heading}</h3>}
                <p className="relative -top-2 bg-kaiglo_grey-200 text-kaiglo_grey-800 p-3 rounded-lg text-sm min-w-[250px]">
                    {info}
                </p>
            </div>
        </div>
    );
};
export default ToolTip;
