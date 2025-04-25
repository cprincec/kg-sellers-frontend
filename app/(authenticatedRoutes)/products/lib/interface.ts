import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ProductDtO {
    productImage: StaticImageData;
    productName: string;
    sku: string;
    description: string;
    specifications: string[];
    productImages: StaticImageData[];
    productVariants: ProductVariant[];
    salesType: string;
}

export interface IAddProductContext {
    productCategory: IProductCategoryFormValue;
    setProductCategory: Dispatch<SetStateAction<IProductCategoryFormValue>>;
    productDetails: IProductDetailsFormValues;
    setProductDetails: Dispatch<SetStateAction<IProductDetailsFormValues>>;
    productVariants: IProductVariantsFormValues[];
    setProductVariants: Dispatch<SetStateAction<IProductVariantsFormValues[]>>;
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
    size?: string;
    quantity: number;
    price: number;
}

export interface ProductVariant {
    images: File[];
    shippingWeight: number;
    color: string;
    size?: string;
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

/*********************************
 * Action button interface
 *********************************/
export interface IAction {
    name: string;
    icon: StaticImageData;
    actionFunc?: (productId: string, setSearchParams: (params: { [key: string]: string }[]) => void) => void;
    style?: string;
}
