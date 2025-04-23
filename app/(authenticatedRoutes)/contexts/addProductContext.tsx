"use client";

import React, { createContext, useContext, useState } from "react";
import {
    IAddProductContext,
    IProductCategoryFormValue,
    IProductDetailsFormValues,
    IProductVariantsFormValues,
} from "@/app/(authenticatedRoutes)/products/lib/interface";
import { productDetailsFormDefaultValues } from "../products/lib/defaults";

// Create context
const AddProductContext = createContext<IAddProductContext | undefined>(undefined);

// create context provider
const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [productCategory, setProductCategory] = useState<IProductCategoryFormValue>({
        productCategory: "",
    });
    const [productDetails, setProductDetails] = useState<IProductDetailsFormValues>(
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
