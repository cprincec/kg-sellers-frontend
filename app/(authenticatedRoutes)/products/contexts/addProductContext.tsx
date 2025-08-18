// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { IAddProductContext } from "@/app/(authenticatedRoutes)/products/lib/interfaces/interface";
// import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
// import Loader from "@/app/ui/Loader";

// // Create context
// const AddProductContext = createContext<IAddProductContext | undefined>(undefined);

// // create context provider
// const AddProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     // API responses
//     // const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();

//     // Handle loading state
//     if (isFetchingStoreInfo) return <Loader />;

//     // No store means user does not own a store, so, cannot create a product
//     if (storeInfo === undefined || storeInfo === null) return null;

//     return (
//         <AddProductContext.Provider
//             value={
//                 {
//                     // storeId,
//                 }
//             }
//         >
//             {children}
//         </AddProductContext.Provider>
//     );
// };

// const useAddProductContext = (): IAddProductContext => {
//     const context = useContext(AddProductContext);
//     if (!context) {
//         throw new Error("useAddProductContext must be used within an AddProductContextProvider");
//     }

//     return context;
// };

// export { AddProductContextProvider, useAddProductContext };
