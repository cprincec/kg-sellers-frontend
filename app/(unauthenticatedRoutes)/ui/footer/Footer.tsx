import Link from "next/link";
import CustomerService from "./CustomerService";
import MakeMoneyWithUs from "./MakeMoneyWithUs";
import FollowUs from "./FollowUs";
import KaigloFooter from "./KaigloFooter";

const Footer = () => {
    return (
        <footer className="hidden md:grid gap-[46px] px-20 py-8">
            <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:flex justify-between items-start">
                <KaigloFooter />
                <CustomerService />
                <MakeMoneyWithUs />
                <FollowUs />
            </div>
            <p className="text-sm font-medium text-center">
                Copyright © 2024 KAIGLO STORES LIMITED. All Rights Reserved. User Agreement,{" "}
                <Link href={""} className="text-kaiglo_info-base">
                    Privacy and Cookies
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
