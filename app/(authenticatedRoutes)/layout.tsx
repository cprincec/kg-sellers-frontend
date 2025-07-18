"use client";

import SideBarDesktop from "@/app/(authenticatedRoutes)/ui/navigation/SideBarDesktop";
import { Suspense, useEffect } from "react";
import Header from "./ui/navigation/Header";
import Loader from "../ui/Loader";
import useGetStoreInfo from "../(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isFetchingStoreInfo, storeInfo } = useGetStoreInfo();
    const router = useRouter();

    useEffect(() => {
        if (!isFetchingStoreInfo && (storeInfo === null || (storeInfo && !storeInfo?.termsAndCondition))) {
            router.replace("/register/store-setup");
        }
    }, [isFetchingStoreInfo, storeInfo, router]);

    if (isFetchingStoreInfo) return <Loader />;
    if (storeInfo === undefined) return null;

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
