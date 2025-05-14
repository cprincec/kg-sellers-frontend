import { OtpContextProvider } from "@/app/(auth)/contexts/otpContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <OtpContextProvider>{children}</OtpContextProvider>;
};

export default Layout;
