"use client";

import { Button } from "@/components/ui/button";
import { IconNoResults } from "@/public/icons/icons";
import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoResultsIcon = ({
    title,
    description,
    className,
}: {
    title?: string;
    description?: string;
    className?: string;
}) => {
    return (
        <div className={`text-center ${className}`}>
            <Image src={IconNoResults} alt="no results" className="mx-auto" width={200} height={112} />
            {title && <h3 className="mb-2 text-base text-kaiglo_grey-900 font-bold">{title}</h3>}
            {description && (
                <p className="text-base text-kaiglo_grey-900 text-center whitespace-break-spaces">
                    {description}
                </p>
            )}
        </div>
    );
};

export const TermsOfContractNotice = () => {
    const [showNotice, setShowNotice] = useState<boolean>(true);
    const router = useRouter();

    if (!showNotice) return null;

    return (
        <div className="flex justify-between items-start p-3 bg-kaiglo_info-100">
            <p className="text-sm md:text-base font-medium">
                Terms of contract agreement has been sent to your email.
            </p>
            <Button
                variant={"ghost"}
                className="w-max p-0 bg-transparent hover:scale-[1.1] cursor-pointer"
                asChild
            >
                <X
                    className="w-5 h-5"
                    onClick={() => {
                        router.replace("/dashboard");
                        setShowNotice(false);
                    }}
                />
            </Button>
        </div>
    );
};

export const BlackFridaySalesNotice = () => {
    return (
        <div className="md:p-4 lg:p-6 md:bg-white">
            <div className="flex gap-3 p-4 md:rounded-xl bg-[linear-gradient(99.21deg,#C8FFE9_0%,#C8FEFF_50%,#C0E0FD_100%)]">
                <div className="w-[70px] h-[60px] lg:w-[80px] lg:h-[80px] mt-1 lg:mt-0 bg-white rounded-lg"></div>
                <div className="w-full grid lg:grid-cols-2 lg:justify-between gap-6">
                    <div className="flex flex-col gap-1 justify-center">
                        <h2 className="text-base text-[#03331B] font-medium">Black Friday Sales</h2>
                        <p className="text-sm text-[#03331B]">
                            Black Friday sales is here again, you can add products to these campaigns
                        </p>
                    </div>
                    <Button
                        type="button"
                        variant={"outline"}
                        className="lg:w-[104px] lg:h-[34px] justify-self-start lg:justify-self-end lg:self-end border-2 text-sm font-medium border-kaiglo_grey-900 text-kaiglo_grey-900"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};
