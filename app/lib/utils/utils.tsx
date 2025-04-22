import { toast } from "sonner";
import Image, { StaticImageData } from "next/image";
import { IconToastSuccess } from "@/public/icons/icons";

type ShowSuccessToastOptions = {
    message: string;
    duration?: number;
    icon?: StaticImageData | string;
};

export const showSuccessToast = ({
    message,
    duration = 5000,
    icon = IconToastSuccess,
}: ShowSuccessToastOptions) => {
    toast(
        <div className="md:w-max flex items-center gap-3 px-4 py-3 bg-[#04901EED] text-white text-xs md:text-base rounded-lg animate-slide-down">
            <Image src={icon} alt="success" width={20} height={20} />
            <p className="text-white whitespace-normal">{message}</p>
        </div>,
        {
            duration,
            unstyled: true,
        }
    );
};
