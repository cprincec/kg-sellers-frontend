"use client";

import { ArrowBackLink } from "@/app/(auth)/ui/buttons";
import RejectedProductsTable from "./ui/rejectedProductsTable/RejectedProductsTable";
import Image from "next/image";
import { IconArrowBackShort } from "@/public/icons/icons";
import Link from "next/link";

const RejectedProducts = () => {
    return (
        <div className="border min-h-screen">
            <div className="grid gap-6">
                <div className="flex md:grid gap-4 items-center px-4 md:px-6 pt-8 pb-6 border-b">
                    <div>
                        <ArrowBackLink
                            href="/products"
                            text="Back"
                            className="hidden md:flex bg-transparent w-min text-sm text-kaiglo_grey-700 pl-6"
                        />
                        <Link href={"/products"}>
                            <Image src={IconArrowBackShort} alt="Arrow back" className="md:hidden" />
                        </Link>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold md:font-medium">Rejected products</h1>
                </div>
                <RejectedProductsTable />
            </div>
        </div>
    );
};
export default RejectedProducts;
