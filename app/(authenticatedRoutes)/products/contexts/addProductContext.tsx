"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IAddProductContext, IProduct } from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import Loader from "@/app/ui/Loader";
import useGetRawProduct from "../hooks/addProduct/useGetRawProduct";
import { useRouter, useSearchParams } from "next/navigation";
import useGetProductDescription from "../hooks/addProduct/useGetProductDescription";

// Create context
const AddProductContext = createContext<IAddProductContext | undefined>(undefined);

// create context provider
const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";

    // API responses
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId ?? "");
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId);

    // Data states
    const [productDraft, setProductDraft] = useState<IProduct | null>(null);
    const [productDraftDescription, setProductDraftDescription] = useState<string>("");
    const [storeId, setStoreId] = useState("");

    // Set store id which assiociates product created to a store
    useEffect(() => {
        if (storeInfo) setStoreId(storeInfo.id);
    }, [storeInfo]);

    // Reset forms
    useEffect(() => {
        if (!productId) {
            setProductDraft(null);
            setProductDraftDescription("");
        }
    }, [productId]);

    // Initialize product draft and description
    useEffect(() => {
        if (productRaw) setProductDraft(productRaw);
        if (productDescription) setProductDraftDescription(productDescription);
    }, [productRaw, productId, productDescription]);

    useEffect(() => {
        if (storeInfo === null) {
            router.push("/create-store");
        }
    }, [storeInfo, router]);

    // Handle loading state
    if (
        isFetchingStoreInfo ||
        (productId && isFetchingProductRaw) ||
        (productId && isFetchingProductDescription)
    )
        return <Loader />;

    // No store means user does not own a store, so, cannot create a product
    if (storeInfo === undefined || storeInfo === null) return null;

    return (
        <AddProductContext.Provider
            value={{
                storeId,
                productDraft,
                setProductDraft,
                productDraftDescription,
                setProductDraftDescription,
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
