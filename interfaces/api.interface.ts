import { AxiosRequestConfig } from "axios";

export type ApiObjType = Record<string, string | undefined | number | string[] | number[]>;

export type MutationRequestProp<T> = {
    url: string;
    payload?: T;
    config?: AxiosRequestConfig;
};

export type GetRequestProp<T extends ApiObjType> = {
    url: string;
    params: T | undefined;
};
