import { Suspense } from "react";
import LandingPageHeader from "./ui/header/LandingPageHeader";
import Footer from "./ui/footer/Footer";
import Loader from "../ui/Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="">
                <LandingPageHeader />
                <div className="max-w-[1920px] mx-auto">{children}</div>
                <Footer />
            </div>
        </Suspense>
    );
};

export default Layout;
