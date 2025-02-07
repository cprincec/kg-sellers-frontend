"use client";

import { Button } from "@/components/ui/button";
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
            <svg
                className="mx-auto"
                width="250"
                height="150"
                viewBox="0 25 250 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M207 65C210.866 65 214 68.134 214 72C214 75.866 210.866 79 207 79H167C170.866 79 174 82.134 174 86C174 89.866 170.866 93 167 93H189C192.866 93 196 96.134 196 100C196 103.866 192.866 107 189 107H178.826C173.952 107 170 110.134 170 114C170 116.577 172 118.911 176 121C179.866 121 183 124.134 183 128C183 131.866 179.866 135 176 135H93C89.134 135 86 131.866 86 128C86 124.134 89.134 121 93 121H54C50.134 121 47 117.866 47 114C47 110.134 50.134 107 54 107H94C97.866 107 101 103.866 101 100C101 96.134 97.866 93 94 93H69C65.134 93 62 89.866 62 86C62 82.134 65.134 79 69 79H109C105.134 79 102 75.866 102 72C102 68.134 105.134 65 109 65H207ZM207 93C210.866 93 214 96.134 214 100C214 103.866 210.866 107 207 107C203.134 107 200 103.866 200 100C200 96.134 203.134 93 207 93Z"
                    fill="#E5FFE5"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96.7591 135C86.0727 135 77.4097 126.534 77.4097 116.09C77.4097 105.647 86.0727 97.1807 96.7591 97.1807C97.2135 97.1807 97.6643 97.196 98.1109 97.2262C97.8006 95.4989 97.6386 93.7202 97.6386 91.9036C97.6386 75.3883 111.027 62 127.542 62C140.727 62 151.919 70.5331 155.897 82.378C156.839 82.2795 157.796 82.2289 158.765 82.2289C173.58 82.2289 185.59 94.0421 185.59 108.614C185.59 122.459 174.751 133.881 160.964 134.981V135H111.278M107.31 135H101.184H107.31Z"
                    fill="white"
                />
                <path
                    d="M96.7591 136.25C97.4494 136.25 98.0091 135.69 98.0091 135C98.0091 134.31 97.4494 133.75 96.7591 133.75V136.25ZM98.1109 97.2262L98.0267 98.4733L99.6243 98.5811L99.3412 97.0051L98.1109 97.2262ZM155.897 82.378L154.712 82.7759L155.031 83.7254L156.027 83.6212L155.897 82.378ZM160.964 134.981L160.864 133.735L159.714 133.827V134.981H160.964ZM160.964 135V136.25H162.214V135H160.964ZM111.278 133.75C110.588 133.75 110.028 134.31 110.028 135C110.028 135.69 110.588 136.25 111.278 136.25V133.75ZM107.31 136.25C108 136.25 108.56 135.691 108.56 135C108.56 134.31 108 133.75 107.31 133.75V136.25ZM101.184 133.75C100.494 133.75 99.9341 134.31 99.9341 135C99.9341 135.691 100.494 136.25 101.184 136.25V133.75ZM96.7591 133.75C86.7358 133.75 78.6597 125.817 78.6597 116.09H76.1597C76.1597 127.251 85.4096 136.25 96.7591 136.25V133.75ZM78.6597 116.09C78.6597 106.364 86.7358 98.4307 96.7591 98.4307V95.9307C85.4096 95.9307 76.1597 104.93 76.1597 116.09H78.6597ZM96.7591 98.4307C97.1854 98.4307 97.6081 98.4451 98.0267 98.4733L98.195 95.979C97.7204 95.947 97.2416 95.9307 96.7591 95.9307V98.4307ZM99.3412 97.0051C99.0439 95.3505 98.8886 93.6457 98.8886 91.9036H96.3886C96.3886 93.7946 96.5572 95.6473 96.8806 97.4472L99.3412 97.0051ZM98.8886 91.9036C98.8886 76.0787 111.717 63.25 127.542 63.25V60.75C110.337 60.75 96.3886 74.6979 96.3886 91.9036H98.8886ZM127.542 63.25C140.174 63.25 150.9 71.4247 154.712 82.7759L157.082 81.9801C152.938 69.6415 141.28 60.75 127.542 60.75V63.25ZM156.027 83.6212C156.926 83.5272 157.84 83.4789 158.765 83.4789V80.9789C157.753 80.9789 156.752 81.0317 155.767 81.1348L156.027 83.6212ZM158.765 83.4789C172.91 83.4789 184.34 94.7519 184.34 108.614H186.84C186.84 93.3324 174.251 80.9789 158.765 80.9789V83.4789ZM184.34 108.614C184.34 121.788 174.02 132.685 160.864 133.735L161.063 136.227C175.481 135.076 186.84 123.129 186.84 108.614H184.34ZM159.714 134.981V135H162.214V134.981H159.714ZM160.964 133.75H111.278V136.25H160.964V133.75ZM107.31 133.75H101.184V136.25H107.31V133.75Z"
                    fill="#007A49"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M118.53 68.1793C118.53 96.4834 144.089 119.806 177 122.955C172.876 128.013 166.507 131.444 159.251 131.984V132H100.15C92.9792 132 81 128.987 81 115.792C81 102.598 90.313 99.5849 100.15 99.5849C100.568 99.5849 100.983 99.598 101.394 99.6239C101.109 98.1434 101.058 96.6175 100.959 95.0619C100.291 84.5537 104.888 71.3102 118.546 67C118.535 67.3929 118.53 67.7856 118.53 68.1793Z"
                    fill="#A3FFD9"
                />
                <path
                    d="M136 73C141.811 74.4254 146.4 78.6376 148 84"
                    stroke="#008000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M111 101C111 104.314 113.686 107 117 107C120.314 107 123 104.314 123 101"
                    stroke="#007A49"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M136 101C136 104.314 138.91 107 142.5 107C146.09 107 149 104.314 149 101"
                    stroke="#007A49"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path d="M123 117.5H135.567" stroke="#007A49" strokeWidth="2.5" strokeLinecap="round" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M69.1559 60.293H57.2099V62.669H65.6579L56.5059 73.757V76.001H69.3759V73.625H60.0039L69.1559 62.383V60.293ZM82.5677 75.5762H73.8797V77.3042H80.0237L73.3677 85.3682V87.0002H82.7277V85.2722H75.9117L82.5677 77.0962V75.5762Z"
                    fill="#008000"
                />
            </svg>
            {title && <h3 className="mb-2 text-base text-kaiglo_grey-900 font-bold">{title}</h3>}
            {description && <p className="text-base text-kaiglo_grey-900 text-center">{description}</p>}
        </div>
    );
};

export const TermsOfContractNotice = () => {
    const [showNotice, setShowNotice] = useState<boolean>(true);
    const router = useRouter();

    if (!showNotice) return null;

    return (
        <div className="flex justify-between items-start p-3 bg-kaiglo_info-100">
            <p className="text-sm font-medium">Terms of contract agreement has been sent to your email.</p>
            <X
                className="w-5 h-5"
                onClick={() => {
                    router.replace("/dashboard");
                    setShowNotice(false);
                }}
            />
        </div>
    );
};

export const BlackFridaySalesNotice = () => {
    return (
        <div className="flex gap-3 p-4 bg-[linear-gradient(99.21deg,#C8FFE9_0%,#C8FEFF_50%,#C0E0FD_100%)]">
            <div className="w-[70px] h-[40px] mt-1 bg-white rounded-lg"></div>
            <div className="grid gap-6">
                <div className="grid gap-1">
                    <h2 className="text-base text-[#03331B] font-medium">Black Friday Sales</h2>
                    <p className="text-sm text-[#03331B]">
                        Black Friday sales is here again, you can add products to these campaigns
                    </p>
                </div>
                <Button
                    type="button"
                    variant={"outline"}
                    className="justify-self-start border-2 text-sm font-medium border-kaiglo_grey-900 text-kaiglo_grey-900"
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};
