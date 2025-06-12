/**
 * This file contains generic functions to make API requests using Axios.
 * It includes functions for POST, DELETE, and GET requests,
 * allowing for both simple and parameterized requests.
 **/

import { ApiObjType, PostRequestProp, GetRequestProp } from "@/interfaces/api.interface";
import Api from "@/lib/utils/axiosInterceptorConfig";

export const postRequest = async <TRequest, TResponse>({ url, payload }: PostRequestProp<TRequest>) => {
    const response = await Api.post<TResponse>(url, payload);

    const { data: availData } = response;

    return availData;
};

export const deleteRequest = async <TResponse>({ url }: { url: string }) => {
    const { data } = await Api.delete<TResponse>(url);

    return data;
};

export const getRequestWithQueryParams = async <TResquest extends ApiObjType, TResponse>({
    url,
    params,
}: GetRequestProp<TResquest>) => {
    const response = await Api.get<TResponse>(url, { params });

    const { data: availData } = response;

    return availData;
};

export const getRequest = async <TResponse>({ url }: { url: string }) => {
    try {
        const response = await Api.get<TResponse>(url);

        return response.data;
    } catch (error: unknown) {
        throw error;
    }
};
