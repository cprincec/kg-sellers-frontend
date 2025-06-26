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

export interface IProductsContext {
    products: IProductDTO[];
    setProducts: Dispatch<SetStateAction<IProductDTO[]>>;
    loading: boolean;
    setloading?: Dispatch<SetStateAction<boolean>>;
}

export interface IAddProductContext {
    productCategory: IProductCategoryDTO;
    setProductCategory: Dispatch<SetStateAction<IProductCategoryDTO>>;
    productDetails: IProductDetailsDTO | undefined;
    setProductDetails: Dispatch<SetStateAction<IProductDetailsDTO | undefined>>;
    productVariants: IProductVariantsFormValues[];
    setProductVariants: Dispatch<SetStateAction<IProductVariantsFormValues[]>>;
}

export interface IProductVariant {
    images: File[] | StaticImageData[];
    color: string;
    size: string;
    quantity: number;
    amount: number;
    price: number;
    shippingWeight: number;
}

export interface IProductDTO {
    productImage?: StaticImageData;
    productName: string;
    sku: number;
    status: string;
    amount: number;
    stockLevel: string;
    salesType: string[];
    quantity: number;
    dateCreated: string;
    productImages?: File[];
    productVariants: ProductVariant[];
    description: string;
    specifications: string[];
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
    amount: number;
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

/******************************************
 * Product overiew interfaces
 *****************************************/

export interface IProductsOverview {
    totalProducts: string;
    liveProducts: string;
    reviewProducts: string;
    outOfStockProducts: string;
    rejectedProducts: string;
}

/******************************************
 * Product overiew interfaces ends
 ******************************************/

/*********************************
 * Action button interface
 *********************************/
export interface IAction {
    name: string;
    icon: StaticImageData;
    actionFunc?: (productId: string, setSearchParams: (params: { [key: string]: string }[]) => void) => void;
    style?: string;
    // disabled?: (product: IProductDTO) => boolean;
}

/*******************************************************************
 * Product category interfaces starts
 ******************************************************************/
export interface IProductCategory {
    id: string;
    name: string;
    productCount: number;
    category: IProductSubCategory[];
    sku?: string;
    isALegacy?: boolean;
    metaTagDescription?: string;
}

export interface IProductSubCategory {
    name: string;
    metaTagDescription?: string;
    tag: string;
    inputTag: string;
    productCount: number;
    isALegacy?: boolean;
    category: IProductSubCategory[];
}

// product category DTOs starts

export interface IProductCategoryDTO {
    category: string;
    subCategory?: string;
    secondSubCategory?: string;
    thirdSubCategory?: string;
    fourthSubCategory?: string;
    fifthSubCategory?: string;
}

// product category DTOs ends

// product category api responses starts

export interface IGetAllProductsCategoriesResponse {
    message: string;
    response: IProductCategory[];
}

// product category api responses ends

export interface IProductCategoryTree {
    [mainCategory: string]: {
        [subCategory1: string]: {
            [subCategory2: string]: string[];
        };
    };
}

/*******************************************************************
 * Product category interfaces ends
 ******************************************************************/

/*******************************************************************
 * Product details/info interfaces starts
 ******************************************************************/
export interface IProductDetails {
    mainImage: string;
    otherImages: string[];
    productName: string;
    description: string;
    seo?: string;
    specifications?: IProductSpecification[];
}

export interface IProductDetailsDTO {
    mainImage: string;
    otherImages: string[];
    productName: string;
    description: string;
    seo: string;
    specifications: IProductSpecificationDTO[];
}

export interface IProductSpecificationDTO {
    name: string;
    option: string;
}

export interface IProductSpecification {
    name: string;
    options: string[];
}

/*******************************************************************
 * Product details/info interfaces ends
 ******************************************************************/
