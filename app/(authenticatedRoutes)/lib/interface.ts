import { StaticImageData } from "next/image";

export interface MetricProps {
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
    icon?: StaticImageData;
}
