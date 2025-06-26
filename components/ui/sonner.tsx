"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:pr-8 group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:text-[1rem] group-[.toaster]:border-none group-[.toaster]:shadow-lg",
                    success: "group-[.toaster]:bg-kaiglo_success-base group-[.toaster]:text-white",
                    error: "group-[.toaster]:!bg-[#FF242C] !text-white group-[.toaster]:border-none",
                    description: "group-[.toast]:text-white text-[.9rem]",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                    closeButton: "!top-4 !left-auto !right-0.5",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
