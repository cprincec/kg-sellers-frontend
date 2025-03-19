import { ImagePaymentMethods } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconTelegram, IconX, IconYoutube } from "@/public/icons/icons";

const FollowUs = () => {
    return (
        <div className="grid gap-8">
            <div className="grid gap-6">
                <h3 className="text-base font-bold">Follow us</h3>
                <div className="flex gap-5">
                    <Link
                        href={"https://www.facebook.com/"}
                        className="flex items-center justify-center w-8 h-8 bg-kaiglo_grey-200 rounded-full"
                    >
                        <Image src={IconFacebook} alt="facebook logo" />
                    </Link>
                    <Link
                        href={"https://www.x.com"}
                        className="flex items-center justify-center w-8 h-8 bg-kaiglo_grey-200 rounded-full"
                    >
                        <Image src={IconX} alt="x logo" />
                    </Link>
                    <Link
                        href={"https://www.instagram.com"}
                        className="flex items-center justify-center w-8 h-8 bg-kaiglo_grey-200 rounded-full"
                    >
                        <Image src={IconInstagram} alt="instagram logo" />
                    </Link>
                    <Link
                        href={"https://www.youtube.com"}
                        className="flex items-center justify-center w-8 h-8 bg-kaiglo_grey-200 rounded-full"
                    >
                        <Image src={IconYoutube} alt="youtube logo" />
                    </Link>
                    <Link
                        href={"https://www.telegram.com"}
                        className="flex items-center justify-center w-8 h-8 bg-kaiglo_grey-200 rounded-full"
                    >
                        <Image src={IconTelegram} alt="telegram logo" />
                    </Link>
                </div>
            </div>

            <div className="grid gap-4">
                <h3 className="text-base font-bold">Payment Methods</h3>
                <Image
                    src={ImagePaymentMethods}
                    alt="paystack payment methods"
                    className="w-[184px] h-[54px] "
                />
            </div>
        </div>
    );
};
export default FollowUs;
