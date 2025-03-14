import { IconAppstore, IconPlaystore } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";

const MakeMoneyWithUs = () => {
    return (
        <div className="grid gap-8">
            <div className="grid gap-6">
                <h3 className="text-base font-bold">Make money with us</h3>
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    Sell on Kaiglo
                </Link>
            </div>
            <div className="grid gap-4">
                <h3 className="text-base font-bold">Get our mobile App</h3>
                <div className="flex gap-4">
                    <Image src={IconPlaystore} alt="kaiglo logo" className="w-[89px] h-[32px]" />
                    <Image src={IconAppstore} alt="kaiglo logo" className="w-[89px] h-[32px]" />
                </div>
            </div>
        </div>
    );
};
export default MakeMoneyWithUs;
