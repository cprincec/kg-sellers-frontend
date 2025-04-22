import SideBarDesktop from "@/app/(authenticatedRoutes)/ui/navigation/SideBarDesktop";
import { Suspense } from "react";
import Header from "./ui/navigation/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
