export const METRIC_VARIANT_CLASSES = {
    warning: "text-kaiglo_attention-500",
    error: "text-kaiglo_critical-error",
    success: "text-kaiglo_success-base",
    default: "text-kaiglo_grey-500",
} as const;

export type MetricVariant = keyof typeof METRIC_VARIANT_CLASSES;
