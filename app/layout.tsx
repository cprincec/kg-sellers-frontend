"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ModalContextProvider } from "./contexts/modalContext";
import { gotham } from "@/lib/fonts";
import QueryClientProviderContext from "./contexts/QueryClientProviderContext";
import { SessionProvider } from "next-auth/react";
import { OtpContextProvider } from "./(auth)/contexts/otpContext";

// export const metadata: Metadata = {
//     title: "Kaiglo Store",
//     description: "Kaiglo Store - Your one-stop shop for all your needs",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${gotham.className}`}>
                <SessionProvider>
                    <QueryClientProviderContext>
                        <OtpContextProvider>
                            <ModalContextProvider>
                                {children} <Toaster position="top-center" />
                            </ModalContextProvider>
                        </OtpContextProvider>
                    </QueryClientProviderContext>
                </SessionProvider>
            </body>
        </html>
    );
}
