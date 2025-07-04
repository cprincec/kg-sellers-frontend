"use client";

import { StoreSetupContextProvider } from "../../contexts/storeSetupContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <StoreSetupContextProvider>{children}</StoreSetupContextProvider>;
};

export default Layout;
