import { Suspense } from "react";
import SideBarDesktop from "./ui/navigation/SideBarDesktop";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="md:grid grid-flow-col md:bg-kaiglo_grey-100">
                {/* Navigation Bar */}
                <SideBarDesktop />

                <div className="md:w-[65%] lg:w-[80%] ml-auto">{children}</div>
            </div>
        </Suspense>
    );
};

export default Layout;
