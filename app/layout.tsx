import type { Metadata } from "next";
import "./globals.css";
import { StoreSetupContextProvider } from "@/app/(auth)/contexts/storeSetupContext";
import { Toaster } from "@/components/ui/sonner";
import { ModalContextProvider } from "./contexts/modalContext";
import { ProductsContextProvider } from "./(authenticatedRoutes)/products/contexts/productsContext";
import { gotham } from "@/lib/fonts";
import QueryClientProviderContext from "./contexts/QueryClientProviderContext";

export const metadata: Metadata = {
    title: "Kaiglo Store",
    description: "Kaiglo Store - Your one-stop shop for all your needs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${gotham.className}`}>
                <QueryClientProviderContext>
                    <ProductsContextProvider>
                        <ModalContextProvider>
                            <StoreSetupContextProvider>
                                {children} <Toaster position="top-center" />
                            </StoreSetupContextProvider>
                        </ModalContextProvider>
                    </ProductsContextProvider>
                </QueryClientProviderContext>
            </body>
        </html>
    );
}
