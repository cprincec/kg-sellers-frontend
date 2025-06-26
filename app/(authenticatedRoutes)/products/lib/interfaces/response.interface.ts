import { IProductsOverview } from "./interface";

export interface IGenericResponse {
    response: string;
    message: string;
}

export interface IProductsOverviewResponse {
    response: IProductsOverview;
    message: string | null;
}
