import {
    IconCancelCircle,
    IconGlobe,
    IconPackage2,
    IconPackageOutOfStock,
    IconPackageProcess2,
} from "@/public/icons/icons";
import { IProductsOverview } from "../interfaces/interface";

type StatusTypes = "active" | "paused" | "rejected";

export const getStatusStyle = (status: string): string => {
    const staustLowerCase = status.toLowerCase();
    const styles: Record<StatusTypes, string> = {
        active: "before:bg-kaiglo_success-500 text-kaiglo_success-500",
        paused: "before:bg-kaiglo_warning-500 text-kaiglo_warning-500",
        rejected: "text-kaiglo_critical-600",
    };

    return styles[staustLowerCase as StatusTypes] || styles.active;
};

type StockLevel = "in stock" | "out of stock" | "low stock";

export const getStockLevelStyle = (stockLevel: string): string => {
    const stockLevelLowerCase = stockLevel.toLowerCase();

    const styles: Record<StockLevel, string> = {
        "in stock": "border-kaiglo_info-base bg-kaiglo_info-100 text-kaiglo_info-base",
        "out of stock": "border-kaiglo_critical-error bg-kaiglo_critical-50 text-kaiglo_critical-600",
        "low stock": "border-kaiglo_warning-300 bg-kaiglo_warning-50 text-kaiglo_warning-500",
    };

    return styles[stockLevelLowerCase as StockLevel] || styles["in stock"];
};

type variantColor = "red" | "green" | "blue";

export const getProductVariantColor = (variantColor: string, listStyle: boolean = false): string => {
    const variantColorLowerCase = variantColor.toLowerCase();

    const styles: Record<variantColor, string> = {
        red: listStyle ? "bg-red-500" : "text-red-500",
        green: listStyle ? "bg-green-500" : "text-green-500",
        blue: listStyle ? "bg-blue-500" : "text-blue-500",
    };

    return (
        styles[variantColorLowerCase as variantColor] ||
        (listStyle ? "bg-kaiglo_grey-700" : "text-kaiglo_grey-700")
    );
};

type SalesTypes = "valentine's" | "black friday" | "flash sales";

export const getSalesTypeStyle = (salesType: string): string => {
    const salesTypeLowerCase = salesType.toLowerCase();
    const styles: Record<SalesTypes, string> = {
        "valentine's": "text-kaiglo_critical-500",
        "black friday": "text-[#550FB6]",
        "flash sales": "text-kaiglo_info-base",
    };

    return styles[salesTypeLowerCase as SalesTypes] || "text-kaiglo_grey-700";
};

export const generateProductsOverviewArray = (data: IProductsOverview | undefined) => {
    if (!data) return [];

    return [
        {
            title: "Total Products",
            value: data.totalProducts,
            icon: IconPackage2,
        },
        {
            title: "LIVE ON SITE",
            value: data.liveProducts,
            icon: IconGlobe,
            variant: "success",
        },
        {
            title: "Under Review",
            value: data.reviewProducts,
            icon: IconPackageProcess2,
            variant: "warning",
        },
        {
            title: "Out of Stock",
            value: data.outOfStockProducts,
            icon: IconPackageOutOfStock,
            variant: "error",
        },
        {
            title: "Rejected",
            value: data.rejectedProducts,
            icon: IconCancelCircle,
            link: "/products/rejected-products",
        },
    ];
};
