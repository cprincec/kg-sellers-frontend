import { CategoryNode } from "../ui/addProduct/productCategory/ProductCategoryFormFields";
import { categories } from "./data/productCategories.data";

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

export const getPathFromCategoryPath = (categoryPath: string[]): CategoryNode[] => {
    const path: CategoryNode[] = [];
    let currentLevel = categories;

    for (const categoryName of categoryPath) {
        const node = currentLevel.find((cat) => cat.category === categoryName);
        if (!node) break; // stop if something is missing (robust fallback)

        path.push(node);
        currentLevel = node.subcategory || [];
    }

    return path;
};
