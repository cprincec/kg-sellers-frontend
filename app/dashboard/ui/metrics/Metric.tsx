import { ArrowDown, ArrowUp } from "lucide-react";
import TootlTip from "../TootTip";
import clsx from "clsx";

const Metric = ({
    title,
    body,
    comparism,
    tip,
    variant,
    showEmptyState,
    className,
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
    className?: string;
}) => {
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
                {tip && <TootlTip info={tip} />}
            </div>
            {!showEmptyState ? (
                <div className="grid gap-1 md:px-4 lg:px-2">
                    <p className="text-2xl text-kaiglo_grey-900 font-medium">{body}</p>
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
