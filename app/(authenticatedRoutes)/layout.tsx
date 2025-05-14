import SideBarDesktop from "@/app/(authenticatedRoutes)/ui/navigation/SideBarDesktop";
import { Suspense } from "react";
import Header from "./ui/navigation/Header";
import Loader from "../ui/Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="md:grid grid-flow-col">
                {/* Navigation Bar */}
                <SideBarDesktop />

                <div className="md:w-[65%] lg:w-[83%] ml-auto">
                    <Header />
                    <div>{children}</div>
                </div>
            </div>
        </Suspense>
    );
};

export default Layout;
