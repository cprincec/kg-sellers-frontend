"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconMenuDots } from "@/public/icons/icons";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IProductAction, IVariantAction } from "../../lib/interfaces/interface";
import { useRouter } from "next/navigation";
import useDuplicateProduct from "../../hooks/useDuplicateProduct";

const ActionButton = ({
    actions,
    productId,
    variantId,
    className,
    disabled = false,
}: {
    actions: IProductAction[] | IVariantAction[];
    productId: string;
    variantId?: string;
    className?: string;
    disabled?: boolean | ((action: string) => boolean);
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const { setSearchParams } = useUpdateSearchParams();
    const { duplicateProduct, isDuplicatingProduct } = useDuplicateProduct();
    const router = useRouter();

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
                            const { name, icon, actionFunc, style, link, type } = action;
                            const href = link
                                ? type === "variant"
                                    ? link(productId, variantId ?? "")
                                    : link(productId)
                                : undefined;

                            return (
                                <Button
                                    key={action.name + "-" + index}
                                    type="button"
                                    variant={"ghost"}
                                    className={cn(
                                        "flex gap-2 items-center justify-start p-2 font-normal capitalize bg-transparent cursor-pointer min-w-full",
                                        index === actions.length - 1 && "text-kaiglo_critical-600"
                                    )}
                                    onClick={() => {
                                        if (action.name === "duplicate product") {
                                            duplicateProduct(productId);
                                        }

                                        if (href) {
                                            router.replace(href);
                                            return;
                                        }

                                        if (actionFunc) {
                                            if (type === "variant")
                                                actionFunc(productId, variantId ?? "", setSearchParams);
                                            else actionFunc(productId, setSearchParams);
                                        }
                                    }}
                                    disabled={
                                        action.disabled
                                            ? action.disabled
                                            : typeof disabled === "boolean"
                                            ? disabled
                                            : disabled(action.name) || action.disabled || isDuplicatingProduct
                                    }
                                >
                                    <Image src={icon} alt="icon" className="w-6 h-6" />
                                    <span className={cn(style)}>{name}</span>
                                </Button>
                            );
                        })}
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ActionButton;
