import { Suspense } from "react";
import LandingPageHeader from "./ui/LandingPageHeader";
import Footer from "./ui/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="max-w-[1920px] mx-auto">
                <LandingPageHeader />
                {children}
                <Footer />
            </div>
        </Suspense>
    );
};

export default Layout;
