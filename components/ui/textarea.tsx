import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[300px] w-full rounded-lg shadow-none border border-kaiglo_grey-disabled focus:outline-none focus:border-[1.5px] focus:border-kaiglo_success-600 focus:shadow-input-shadow bg-transparent px-3 py-1 text-sm md:text-base text-kaiglo_grey-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-kaiglo_grey-placeholder focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
