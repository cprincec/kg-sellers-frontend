"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IProductDTO, IProductsContext } from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";
import { productsList } from "../lib/data/data";
import { usePathname } from "next/navigation";

// Create context
const ProductsContext = createContext<IProductsContext | undefined>(undefined);

// create context provider
const ProductsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProductDTO[]>([]);
    const [loading, setLoading] = useState(true);

    //  make sure context is only available in products route
    const pathname = usePathname();
    const isProductsRoute = pathname.startsWith("/products");

    // Load products from sessionStorage once client is mounted
    useEffect(() => {
        const products = sessionStorage.getItem("products");
        if (products) {
            setProducts(JSON.parse(products));
            setLoading(false);
        } else {
            setProducts([...productsList]);
            setLoading(false);
        }
    }, []);

    // Don't inject context logic globally
    if (!isProductsRoute) {
        return <>{children}</>;
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                loading,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

const useProductsContext = (): IProductsContext => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within ProductsContextProvider");
    }
    return context;
};

export { ProductsContextProvider, useProductsContext };
