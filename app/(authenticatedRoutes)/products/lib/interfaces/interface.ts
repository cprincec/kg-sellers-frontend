import { IStoreInfo } from "@/app/(auth)/lib/interfaces/interface";
import { StaticImageData } from "next/image";
import { Dispatch, FormEvent, SetStateAction } from "react";
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
    storeInfo: IStoreInfo;
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
export type ProductActionTypes = "DELETE" | "PAUSE" | "ACTIVATE" | "DUPLICATE";

export interface IBaseAction {
    name: string;
    icon: StaticImageData;
    style?: string;
    disabled?: boolean;
    type: "product" | "variant";
}

export interface IProductAction extends IBaseAction {
    type: "product";
    actionFunc?: (productId: string, setSearchParams: (params: { [key: string]: string }[]) => void) => void;
    link?: (productId: string) => string;
}

export interface IVariantAction extends IBaseAction {
    type: "variant";
    actionFunc?: (
        productId: string,
        variantId: string,
        setSearchParams: (params: { [key: string]: string }[]) => void
    ) => void;
    link?: (productId: string, variantId: string) => string;
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

export type ProductCategoryFormProps = {
    isFetchingProductRaw: boolean;
    storeId: string;
    productId: string;
    productAction: string;
    product: IProduct | undefined;
    defaultValues: IProductCategoryDTO;
    categories: IProductCategory[];
    className?: string;
};

export type ProductCategoryOptionsModalProps = {
    categories: IProductCategory[];
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
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

export type ProductVariantsFormContentProps = {
    productMeta: IProductMeta;
    product: IProduct;
    variantId: string;
    formData: ProductVariantFormInterface;
    setFormData: Dispatch<SetStateAction<ProductVariantFormInterface>>;
    formErrors: ProductVariantFormErrors;
    isSavingProductVariant: boolean;
    isEditingProductVariant: boolean;
    fields: IVariantField[];
    handleSubmit: (e: FormEvent) => void;
};

export type ProductVariantsFormFieldProps = {
    formData: ProductVariantFormInterface;
    setFormData: Dispatch<SetStateAction<ProductVariantFormInterface>>;
    productMeta: IProductMeta;
    fields: IVariantField[];
    findFieldIndex: (key: string) => number;
    formErrors: ProductVariantFormErrors;
    product: IProduct;
};

export interface ProductVariantFormInterface {
    attributes: {
        key: string;
        metadata?: string;
        value: string;
    }[];
    productUrl: string;
}

export interface ProductVariantFormErrors {
    productUrl: string;
    color: string;
    quantity: string;
    price: string;
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

export interface IProductVariantPriceDetail {
    attributes: IProductAttribute[];
    discount?: number;
    id?: string;
    isPaused?: boolean;
    newPrice?: number;
    price: number;
    quantity: string;
    ramSize?: string;
    size?: string;
    sku?: string;
    stockLevel?: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK" | string;
    storage?: string;
}

export interface IProductVariantDTO {
    productColor: {
        color: IColor;
        colorUrl: string;
        productPriceDetails: IProductVariantPriceDetail[];
    };
    productId: string;
    productView: {
        colorCode: string;
        productUrl: string;
    };
    weightInKG?: number;
}

export interface IEditProductVariant {
    coloUrl: string;
    productId: string;
    productPriceDetail: IProductVariantPriceDetail;
}

/*******************************************************************
 * Product variants interfaces ends
 ******************************************************************/

/*******************************************************************
 * Product interfaces starts
 ******************************************************************/
export type productVariantsFormProps = {
    product: IProduct;
    defaultValues: ProductVariantFormInterface;
    productAction: string;
    productId: string;
    variantAction: string;
    variantId: string | undefined | null;
    fields: IVariantField[];
    productMeta: IProductMeta;
    className?: string;
};

export type productVariantsTableProps = {
    product: IProduct;
    productAction: string;
    productMetaData: IProductMeta;
    showActions: boolean;
    showSizeColumn: boolean;
};

export interface IProduct {
    category: string;
    createdDate: string;
    featured: boolean;
    fifthSubCategory: string;
    freeShipping: boolean;
    fourthSubCategory: string;
    id: string;
    inputTag: string;
    isDeleted: boolean;
    kaigloSale: string;
    name: string;
    paused: boolean;
    productColors: IProductColor[] | null;
    productDescriptionSummary: string;
    productRating: IProductRating;
    productStatus: IProductStatus;
    productUrl: string;
    productUrlDuplicate: string;
    productViews: IProductView[] | null;
    productViewsDuplicate: IProductView[] | null;
    qname: string;
    salesTag: string;
    sales: boolean;
    secondSubCategory: string;
    seo: string;
    sold: number;
    specifications: IProductSpecificationDTO[];
    stock: number;
    store: IStore;
    subCategory: string;
    tag: string;
    thirdSubCategory: string;
    updatedDate: "";
    views: number;
    weightInKG?: number;
}

export interface IProductRating {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
}

export interface IProductColor {
    color: {
        color: string;
        colorCode: string;
    };
    colorUrl: string;
    productPriceDetails: IProductPriceDetail[];
}

export interface IProductPriceDetail {
    id: string;
    isPaused: boolean;
    price: number;
    newPrice: number;
    discount: number;
    quantity: string;
    ramSize: string;
    size: string;
    sku: string;
    stockLevel: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK" | string;
    storage: string;
    attributes: IProductAttribute[];
}

export interface IProductAttribute {
    key: string;
    value: string;
    metadata?: string;
}

export interface IProductView {
    colorCode: string | null;
    productUrl: string;
}

export interface IProductStatus {
    status: StatusTypes;
    updatedDate: string;
    approvedBy: string;
    note: string;
}

export type StatusTypes = "ACTIVE" | "DRAFT" | "PAUSED" | "PENDING" | "REJECTED";

export interface IStore {
    id: string;
    storeName: string;
    profilePic: string;
    isFollowingStore: boolean;
    createdDate: string;
    owner: IStoreOwner;
}

export interface IStoreOwner {
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

export interface IPageable {
    sort: ISort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface ISort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

/*******************************************************************
 * Product interfaces ends
 ******************************************************************/

/*******************************************************************
 * Ongoing sales starts
 ******************************************************************/

export interface IOngoingSale {
    imageUrl: string;
    name: string;
    description: string;
    banners: IBanners;
    colors: IColors;
    startDate: string;
    endDate: string;
}

export interface IBanners {
    mobileHome: string;
    mobileSalesPage: string;
    desktopHome: string;
    desktopHome2: string;
    desktopSalesPage: string;
    background: string;
}

export interface IColors {
    background: string;
    productCard: string;
    productName: string;
    priceContainer: string;
    priceText: string;
    slashedPriceText: string;
    itemCountBG: string;
    itemCountText: string;
}

export interface IAddToSalesDTO {
    colorCode: string;
    productPriceDetail: IProductPriceDetail[];
}

/*******************************************************************
 * Ongoing sales ends
 ******************************************************************/
