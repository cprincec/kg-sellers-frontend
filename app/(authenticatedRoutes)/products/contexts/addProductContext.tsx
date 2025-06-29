"use client";

import React, { createContext, useContext, useState } from "react";
import {
    IAddProductContext,
    IProductCategoryDTO,
    IProductDetailsDTO,
    IProductVariantsFormValues,
} from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";
import { productDetailsFormDefaultValues } from "../lib/defaults";

// Create context
const AddProductContext = createContext<IAddProductContext | undefined>(undefined);

// create context provider
const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [productCategory, setProductCategory] = useState<IProductCategoryDTO>({
        category: "",
    });

    const [productDetails, setProductDetails] = useState<IProductDetailsDTO | undefined>(
        productDetailsFormDefaultValues
    );
    const [productVariants, setProductVariants] = useState<IProductVariantsFormValues[]>([]);

    return (
        <AddProductContext.Provider
            value={{
                productCategory,
                setProductCategory,
                productDetails,
                setProductDetails,
                productVariants,
                setProductVariants,
            }}
        >
            {children}
        </AddProductContext.Provider>
    );
};

const useAddProductContext = (): IAddProductContext => {
    const context = useContext(AddProductContext);
    if (!context) {
        throw new Error("useAddProductContext must be used within an AddProductContextProvider");
    }
    return context;
};

export { AddProductContextProvider, useAddProductContext };
