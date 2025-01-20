import { OtpContextProvider } from "@/contexts/otpContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <OtpContextProvider>{children}</OtpContextProvider>;
};

export default Layout;
