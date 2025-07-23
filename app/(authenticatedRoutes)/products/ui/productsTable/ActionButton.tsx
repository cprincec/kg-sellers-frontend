import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconMenuDots } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IAction } from "../../lib/interfaces/interface";
import Link from "next/link";

const ActionButton = ({
    actions,
    productId,
    variantId,
    className,
    disabled = false,
}: {
    actions: IAction[];
    productId: string;
    variantId?: string;
    className?: string;
    disabled?: boolean;
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <div className={className}>
            <Popover open={showDropDown} onOpenChange={setShowDropDown}>
                <PopoverTrigger className="px-1 rounded-md cursor-pointer" asChild>
                    <Button variant={"ghost"} className="px-1 py-0 bg-transparent">
                        <Image src={IconMenuDots} alt="menu dots" className="h-min" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-2 rounded-xl" align="end">
                    <ul className="grid gap-1">
                        {actions.map((action, index) => {
                            const { name, icon, actionFunc, style, link } = action;
                            const href = link ? link(productId, variantId ?? variantId) : undefined;

                            return (
                                <li key={name + "-" + index}>
                                    {href ? (
                                        <Link href={href}>
                                            <Button
                                                type="button"
                                                variant={"ghost"}
                                                className={cn(
                                                    "flex gap-2 items-center justify-start p-2 font-normal capitalize bg-transparent cursor-pointer min-w-full",
                                                    index === actions.length - 1 && "text-kaiglo_critical-600"
                                                )}
                                                disabled={disabled || action.disabled}
                                            >
                                                <Image src={icon} alt="icon" className="w-6 h-6" />
                                                <span className={cn(style)}>{name}</span>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Button
                                            type="button"
                                            variant={"ghost"}
                                            className={cn(
                                                "flex gap-2 items-center justify-start p-2 font-normal capitalize bg-transparent cursor-pointer min-w-full",
                                                index === actions.length - 1 && "text-kaiglo_critical-600"
                                            )}
                                            onClick={() =>
                                                actionFunc && actionFunc(productId, setSearchParams)
                                            }
                                            disabled={disabled || action.disabled}
                                        >
                                            <Image src={icon} alt="icon" className="w-6 h-6" />
                                            <span className={cn(style)}>{name}</span>
                                        </Button>
                                    )}
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
