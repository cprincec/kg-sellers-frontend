import * as React from "react";

import { ButtonProps } from "@/app/(auth)/lib/interfaces/interface";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:border-[1.5px] focus-visible:border-kaiglo_success-600 focus-visible:shadow-input-shadow focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-kaiglo_brand-base text-white hover:bg-kaiglo_brand-base/80",
                secondary: "bg-kaiglo_success-50 text-kaiglo_brand-base hover:bg-kaiglo_success-100/80",
                critical: "bg-kaiglo_critical-100 text-kaiglo_critical-base hover:bg-kaiglo_critical-100/80",
                critical_solid: "bg-kaiglo_critical-base text-white hover:bg-kaiglo_critical-base/80",
                outline: "border border-kaiglo_grey bg-transparent",
                attention:
                    "bg-kaiglo_attention-100 text-kaiglo_attention-base hover:bg-kaiglo_attention-100/80",
                attention_solid: "bg-kaiglo_attention-base text-white hover:bg-kaiglo_attention-base/80",
                purple: "bg-kaiglo_purple-100 text-kaiglo_purple-base hover:bg-kaiglo_purple-100/80",
                purple_solid: "bg-kaiglo_purple-base text-white hover:bg-kaiglo_purple-base/80",
                info: "bg-kaiglo_info-100 text-kaiglo_info-base hover:bg-kaiglo_info-200/80",
                info_solid: "bg-kaiglo_info-base text-white hover:bg-kaiglo_info-base/80",
                ghost: "bg-kaiglo_grey-100 text-black",
                link: "text-kaiglo_brand-base underline-offset-4 hover:underline",
                accent: "bg-kaiglo_accent-base text-black hover:bg-kaiglo_accent-base/80",
            },
            size: {
                default: "px-4 py-2",
                sm: "rounded-md px-3 text-xs",
                lg: "rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                tabIndex={-1}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
