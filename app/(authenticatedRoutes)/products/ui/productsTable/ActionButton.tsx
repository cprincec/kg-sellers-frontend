import { buttonVariants } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconMenuDots } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IAction } from "../../lib/interface";

const ActionButton = ({
    actions,
    productId,
    className,
}: {
    actions: IAction[];
    productId: string;
    className?: string;
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <div className={className}>
            <Popover open={showDropDown} onOpenChange={setShowDropDown}>
                <PopoverTrigger className="px-1 rounded-md cursor-pointer" asChild>
                    <Image src={IconMenuDots} alt="menu dots" />
                </PopoverTrigger>
                <PopoverContent className="w-fit p-2 rounded-xl" align="end">
                    <ul className="grid gap-1">
                        {actions.map((action, index) => {
                            const { name, icon, actionFunc, style } = action;

                            return (
                                <li
                                    key={name + "-" + index}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "flex gap-2 items-center justify-start p-2 font-normal capitalize bg-transparent cursor-pointer",
                                        index === actions.length - 1 && "text-kaiglo_critical-600 "
                                    )}
                                    onClick={() => actionFunc && actionFunc(productId, setSearchParams)}
                                >
                                    <Image src={icon} alt="icon" className="w-6 h-6" />
                                    <span className={cn(style)}>{name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ActionButton;
