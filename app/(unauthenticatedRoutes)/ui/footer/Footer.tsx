import Link from "next/link";
import CustomerService from "./CustomerService";
import MakeMoneyWithUs from "./MakeMoneyWithUs";
import FollowUs from "./FollowUs";
import KaigloFooter from "./KaigloFooter";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-20 lg:px-6 py-8">
            <div className="hidden md:grid gap-[46px] max-w-[1230px] mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:flex justify-between items-start">
                    <KaigloFooter />
                    <CustomerService />
                    <MakeMoneyWithUs />
                    <FollowUs />
                </div>
                <p className="text-sm font-medium text-center">
                    Copyright © {currentYear} KAIGLO STORES LIMITED. All Rights Reserved. User Agreement,{" "}
                    <Link href={""} className="text-kaiglo_info-base">
                        Privacy and Cookies
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
