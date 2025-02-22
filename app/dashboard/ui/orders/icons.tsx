import { IconCalendar, IconDownload, IconSortDesc } from "@/public/icons/icons";

import Image from "next/image";

export const SortDescIcon = ({ className }: { className?: string }) => {
    return <Image src={IconSortDesc} alt="sort" className={className} width={20} height={20} />;
};

export const CalendarIcon = ({ className }: { className?: string }) => {
    return <Image src={IconCalendar} alt="calendar" className={className} width={20} height={20} />;
};

export const DownloadIcon = ({
    className,
    width,
    height,
}: {
    className?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <Image
            src={IconDownload}
            alt="download"
            className={className || ""}
            width={parseInt(width || "24")}
            height={parseInt(height || "24")}
        />
    );
};