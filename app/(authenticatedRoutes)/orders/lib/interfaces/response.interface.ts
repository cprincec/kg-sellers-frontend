import { IPageable, ISort } from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";
import { IOrder } from "./interface";

export interface IGetAllOrdersResponse {
    content: IOrder[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: IPageable;
    size: number;
    sort: ISort;
    totalElements: number;
    totalPages: number;
}
