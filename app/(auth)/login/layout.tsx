import { OtpContextProvider } from "@/app/(auth)/contexts/otpContext";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <OtpContextProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </OtpContextProvider>
    );
};

export default Layout;
