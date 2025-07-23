import { IProductCategoryDTO } from "./interfaces/interface";

export const SALES_TYPES = {
    valentiles: "valentines",
};

export const PRODUCT_STATUS = {
    active: "Active",
    paused: "Paused",
};

export const PRODUCT_CATEGORY_KEYS: (keyof IProductCategoryDTO)[] = [
    "category",
    "subCategory",
    "secondSubCategory",
    "thirdSubCategory",
    "fourthSubCategory",
    "fifthSubCategory",
] as const;
