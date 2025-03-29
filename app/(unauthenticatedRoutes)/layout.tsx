import { Suspense } from "react";
import LandingPageHeader from "./ui/header/LandingPageHeader";
import Footer from "./ui/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="">
                <LandingPageHeader />
                <div className="max-w-[1920px] mx-auto">{children}</div>
                <Footer />
            </div>
        </Suspense>
    );
};

export default Layout;
