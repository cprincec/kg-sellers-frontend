import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";
import { cn } from "@/lib/utils";

const DownloadButton = ({
    actionText = "Download",
    className,
}: {
    actionText?: string;
    className?: string;
}) => {
    return (
        <Button className={cn("text-base rounded-full hidden lg:flex py-3 px-4", className)}>
            <DownloadIcon width="24px" height="24px" />
            <span className="text-base">{actionText}</span>
        </Button>
    );
};
export default DownloadButton;
