import { AddProductContextProvider } from "./contexts/addProductContext";
import { ProductsContextProvider } from "./contexts/productsContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProductsContextProvider>
            <AddProductContextProvider>{children}</AddProductContextProvider>
        </ProductsContextProvider>
    );
};

export default Layout;
