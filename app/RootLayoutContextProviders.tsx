"use client";

import { Toaster } from "@/components/ui/sonner";
import { ModalContextProvider } from "./contexts/modalContext";
import QueryClientProviderContext from "./contexts/QueryClientProviderContext";
import { SessionProvider } from "next-auth/react";
import { OtpContextProvider } from "./(auth)/contexts/otpContext";

const RootLayoutContextProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <QueryClientProviderContext>
                <OtpContextProvider>
                    <ModalContextProvider>
                        {children}
                        <Toaster position="top-center" />
                    </ModalContextProvider>
                </OtpContextProvider>
            </QueryClientProviderContext>
        </SessionProvider>
    );
};

export default RootLayoutContextProviders;
