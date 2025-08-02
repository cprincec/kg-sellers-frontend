import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";
import { cn } from "@/lib/utils/utils";

const DownloadButton = ({
    actionText = "Download",
    className,
    disabled,
}: {
    actionText?: string;
    className?: string;
    disabled?: boolean;
}) => {
    return (
        <Button
            className={cn("text-base rounded-full hidden lg:flex py-3 px-4", className)}
            disabled={disabled}
        >
            <DownloadIcon width="24px" height="24px" />
            <span className="text-base">{actionText}</span>
        </Button>
    );
};
export default DownloadButton;
