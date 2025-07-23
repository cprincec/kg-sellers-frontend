import {
    ICategorySpecifications,
    IPageable,
    IProduct,
    IProductMeta,
    IProductsOverview,
    ISort,
    IVariantField,
} from "./interface";

export interface IGenericResponse {
    response: string;
    message: string;
}

export interface IProductsOverviewResponse {
    response: IProductsOverview;
    message: string | null;
}

export interface IGetSpecificationsResponse {
    message: string;
    response: ICategorySpecifications;
}

export interface IProductResponse {
    message: string | null;
    response: IProduct;
}

export interface IGetPaginatedProducts {
    content: IProduct[];
    pageable: IPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: ISort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}


export interface IGetVariantFieldsResponse {
    id: string;
    tag: string;
    options: IVariantField[];
}

export interface IGetProductMetaResponse {
    response: IProductMeta;
    message: string;
}

export interface IGetProductDescriptionResponse {
    response: string;
    message: string;
}
