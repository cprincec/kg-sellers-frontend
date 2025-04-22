import { StaticImageData } from "next/image";

export interface ProductDtO {
    productImage: StaticImageData;
    productName: string;
    sku: string;
    description: string;
    specifications: string[];
    productImages: StaticImageData[];
    productVariants: IProductVariantDTO[];
    salesType: string;
}

export interface IProductVariant {
    color: string;
    size: string;
    quantity: number;
    amount: number;
}

export interface IProductDTO {
    productImage: StaticImageData;
    productName: string;
    sku: number;
    status: string;
    amount: number;
    stockLevel: string;
    salesType: string[];
    quantity: number;
    dateCreated: string;
}

export interface IProductCategoryFormValue {
    productCategory: string;
}

export interface IProductDetailsFormValues {
    images: File[];
    name: string;
    specification1: string;
    specification2?: string;
    specification3?: string;
    specification4?: string;
    specification5?: string;
    description: string;
    seo?: string;
}

export interface IProductVariantsFormValues {
    images: File[];
    shippingWeight: number;
    color: string;
    size?: string | undefined;
    quantity: number;
    price: number;
}

export interface IProductVariantDTO {
    image: StaticImageData;
    shippingWeight: number;
    color: string;
    size?: string | undefined;
    quantity: number;
    price: number;
}

export interface IRejectedProductDTO {
    productImage: StaticImageData;
    productName: string;
    status: string;
    amount: number;
    quantity: number;
    dateCreated: string;
}

export interface ISortOption {
    category: { label: string; value: string };
    options: { label: string; value: string }[];
}

export interface IFilterOption {
    category: { label: string; value: string };
    options: { label: string; value: string }[];
}
