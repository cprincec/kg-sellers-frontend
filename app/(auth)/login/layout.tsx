import Loader from "@/components/shared/Loader";
import { OtpContextProvider } from "@/app/(auth)/contexts/otpContext";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <OtpContextProvider>
            <Suspense fallback={<Loader width={50} height={50} />}>{children}</Suspense>
        </OtpContextProvider>
    );
};

export default Layout;
