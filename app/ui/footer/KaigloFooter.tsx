import { IconKaigloLogo } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";

const KaigloFooter = () => {
    return (
        <div className="grid gap-5">
            <Image src={IconKaigloLogo} alt="kaiglo logo" />

            <div className="grid gap-4">
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    About us
                </Link>
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    Privacy Policy
                </Link>
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};
export default KaigloFooter;
