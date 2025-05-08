"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IProductDTO, IProductsContext } from "@/app/(authenticatedRoutes)/products/lib/interface";
import { productsList } from "../lib/data/data";
// Create context
const ProductsContext = createContext<IProductsContext | undefined>(undefined);

// create context provider
const ProductsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProductDTO[]>([]);

    // Load products from sessionStorage once client is mounted
    useEffect(() => {
        const products = sessionStorage.getItem("products");
        if (products) {
            setProducts(JSON.parse(products));
        } else {
            setProducts([...productsList]);
        }
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

const useProductsContext = (): IProductsContext => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within an ProductsContextProvider");
    }
    return context;
};

export { ProductsContextProvider, useProductsContext };
