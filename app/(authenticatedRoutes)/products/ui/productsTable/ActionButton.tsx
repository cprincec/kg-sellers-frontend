import { buttonVariants } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconMenuDots } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";
import { productActions } from "../../lib/data";
import { cn } from "@/lib/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ActionButton = ({ productId, className }: { productId: string; className?: string }) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <div className={className}>
            <Popover open={showDropDown} onOpenChange={setShowDropDown}>
                <PopoverTrigger className="px-1 rounded-md cursor-pointer" asChild>
                    <Image src={IconMenuDots} alt="menu dots" />
                </PopoverTrigger>
                <PopoverContent className="p-2 rounded-xl" align="end">
                    <ul className="grid gap-1">
                        {productActions.map((action, index) => {
                            const { name, icon, actionFunc } = action;

                            return (
                                <li
                                    key={name + "-" + index}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "flex gap-2 items-center justify-start p-2 font-normal capitalize bg-transparent cursor-pointer",
                                        index === productActions.length - 1 && "text-kaiglo_critical-base"
                                    )}
                                    onClick={() => actionFunc && actionFunc(productId, setSearchParams)}
                                >
                                    <Image src={icon} alt="icon" />
                                    {name}
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
