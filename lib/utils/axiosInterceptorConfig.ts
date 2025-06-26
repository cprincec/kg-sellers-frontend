/**
 * Axios interceptor configuration for handling requests and responses.
 * This configuration sets up a base URL for API requests and can be extended
 **/

import axios, { InternalAxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

Api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const session = await getSession();

        if (session) {
            config.headers["Authorization"] = `Bearer ${session.accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

Api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default Api;
