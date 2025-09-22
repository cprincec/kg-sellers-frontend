import "./globals.css";
import { gotham } from "@/lib/fonts";
import { Metadata } from "next";
import RootLayoutContextProviders from "./RootLayoutContextProviders";

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
            <body className={gotham.className}>
                <RootLayoutContextProviders>{children}</RootLayoutContextProviders>
            </body>
        </html>
    );
}
