import TootlTip from "@/app/dashboard/ui/TootTip";
import { ArrowDown, ArrowUp } from "lucide-react";

const Metric = ({
    title,
    body,
    comparism,
    tip,
    variant,
    empty,
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
    empty: boolean;
}) => {
    return (
        <section className="grid gap-3 rounded-xl border border-kaiglo_grey-100 px-4 py-3 bg-white">
            <div className="flex items-center gap-3">
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
            {!empty ? (
                <div className="grid gap-1">
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
                <strong className="text-3xl text-kaiglo_grey-900">--</strong>
            )}
        </section>
    );
};
export default Metric;
