/**
 * Axios interceptor configuration for handling requests and responses.
 * This configuration sets up a base URL for API requests and can be extended
 **/

import axios from "axios";

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default Api;
