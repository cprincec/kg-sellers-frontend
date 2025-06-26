import { StaticImageData } from "next/image";

// Shared type
export interface Comparism {
    value: string;
    date: string;
    isPositive: boolean;
}

// Props for MetricHeader
export interface MetricHeaderProps {
    title: string;
    icon?: StaticImageData;
    variant?: string;
    tip?: string;
    canHideData?: boolean;
    onToggleShowData?: () => void;
}

// Props for MetricBody
export interface MetricBodyProps {
    body: string | number;
    IsCurrency?: boolean;
    showData?: boolean;
    canHideData?: boolean;
    actionText?: string;
    actionClassName?: string;
    comparism?: Comparism;
}

// Props for full Metric component
export interface MetricProps
    extends Omit<MetricBodyProps, "showData">,
        Omit<MetricHeaderProps, "onToggleShowData"> {
    showEmptyState?: boolean;
    className?: string;
    link?: string;
}
