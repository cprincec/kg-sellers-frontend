import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

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
    storeId: string;
    productDraft: IProduct | null;
    setProductDraft: Dispatch<SetStateAction<IProduct | null>>;
    productDraftDescription: string;
    setProductDraftDescription: Dispatch<SetStateAction<string>>;
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

export interface IProductVariantsFormValues {
    images: File[];
    shippingWeight: number;
    color: string;
    size?: string;
    quantity: number;
    price: number;
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

export type IProductCategoryOptionsModalProps = {
    categories: IProductCategory[];
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    setCategoryFieldValue: Dispatch<SetStateAction<string>>;
    setValue: UseFormSetValue<IProductCategoryDTO>;
};

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

// All specificatipons belonging to a selected category
export interface ICategorySpecifications {
    id: string;
    spec: string;
    specifications: IProductSpecification[];
    tag: string;
}

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
    seo?: string;
    specifications?: IProductSpecificationDTO[];
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

/*******************************************************************
 * Product variants interfaces starts
 ******************************************************************/

export interface ProductVariantFormInterface {
    attributes: {
        key: string;
        metadata?: string;
        value: string;
    }[];
    productUrl: string;
}

export interface IProductMeta {
    id: string;
    productColorCode: IColor[];
    dialogOptions: IDialogOptions;
}

export interface IColor {
    color: string;
    colorCode: string;
}

export interface IDialogOptions {
    [key: string]: string[];
}

export interface IProductVariantDTO {
    productColor: {
        color: IColor;
        colorUrl: string;
        productPriceDetails: {
            attributes: {
                key: string;
                metadata?: string;
                value: string;
            }[];
            discount?: number;
            id?: string;
            newPrice?: number;
            price: number;
            quantity: string;
            ramSize?: string;
            size?: string;
            sku?: string;
            stockLevel?: string;
            storage?: string;
        }[];
    };
    productId: string;
    productView: {
        colorCode: string;
        productUrl: string;
    };
    weightInKG?: number;
}
/*******************************************************************
 * Product variants interfaces ends
 ******************************************************************/

/*******************************************************************
 * Product interfaces starts
 ******************************************************************/

export interface IProduct {
    id: string;
    name: string;
    productUrl: string;
    productColors: IProductColor[];
    productViews: IProductView[];
    specifications: IProductSpecificationDTO[];
    category: string;
    subCategory: string;
    secondSubCategory: string;
    thirdSubCategory: string;
    fourthSubCategory: string;
    fifthSubCategory: string;
    tag: string;
    inputTag: string;
    sales: boolean;
    featured: boolean;
    kaigloSale: string;
    freeShipping: boolean;
    productStatus: IProductStatus;
    paused: boolean;
    isDeleted: boolean;
    store: IStore;
    createdDate: string;
    views: number;
    sold: number;
    stock: number;
    seo: string;
    weightInKG: number;
}

interface IProductColor {
    color: {
        color: string;
        colorCode: string;
    };
    colorUrl: string;
    productPriceDetails: IProductPriceDetail[];
}

interface IProductPriceDetail {
    id: string;
    price: number;
    newPrice: number;
    discount: number;
    quantity: string;
    ramSize: string;
    size: string;
    sku: string;
    stockLevel: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK";
    storage: string;
    attributes: IProductAttribute[];
}

interface IProductAttribute {
    key: string;
    value: string;
    metadata: string;
}

interface IProductView {
    colorCode: string | null;
    productUrl: string;
}

interface IProductStatus {
    status: "ACTIVE" | "DRAFT" | "ARCHIVED" | "PAUSED" | string;
    updatedDate: string;
    approvedBy: string;
    note: string;
}

interface IStore {
    id: string;
    storeName: string;
    profilePic: string;
    isFollowingStore: boolean;
    createdDate: string;
    owner: IStoreOwner;
}

interface IStoreOwner {
    id: string;
    lastLoggedIn: string;
}

export interface IVariantField {
    type: unknown;
    title: string;
    input: boolean;
    dialogOption: string;
    choices: unknown;
    placeholder: string;
    required: boolean | null;
}

/*******************************************************************
 * Product interfaces ends
 ******************************************************************/
