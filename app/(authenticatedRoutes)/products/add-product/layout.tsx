import { AddProductContextProvider } from "@/app/(authenticatedRoutes)/contexts/addProductContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <AddProductContextProvider>{children}</AddProductContextProvider>;
};

export default Layout;
