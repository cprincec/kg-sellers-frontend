"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
// import { useModalContext } from "@/app/contexts/modalContext";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-[12px] w-full outline-none", className)}
        // className={cn(
        //     "relative top-0 right-0 left-0 bottom-0 inset-0 z-50 bg-black/50 backdrop-blur-[12px] bg-red-500 w-full outline-none",
        //     className
        // )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
        showCloseButton?: boolean;
        styleXBtn?: boolean;
        closeBtnClassName?: string;
        subClassName?: string;
        animationDirection?: "left" | "right";
    }
>(
    (
        {
            className,
            subClassName,
            children,
            closeBtnClassName,
            animationDirection = "right",
            styleXBtn = false,
            showCloseButton = true,
            ...props
        },
        ref
    ) => {
        // const { setShowModal } = useModalContext();
        return (
            <DialogPortal>
                <DialogOverlay
                    className={cn(
                        animationDirection === "left"
                            ? "data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left"
                            : "data-[state=open]:animate-slide-in-right-overlay data-[state=closed]:animate-slide-out-right-overlay"
                    )}
                />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed grid inset-0 z-50 w-full bg-transparent",
                        // "fixed top-1/2 left-1/2 z-50 w-full max-w-lg ",
                        animationDirection === "left"
                            ? "data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left"
                            : "data-[state=open]:animate-slide-in-right-overlay data-[state=closed]:animate-slide-out-right-overlay",
                        "sm:rounded-lg",
                        className
                    )}
                    {...props}
                >
                    <div
                        className={cn(
                            "relative grid gap-4 border p-6 sm:rounded-lg bg-background",
                            subClassName
                        )}
                    >
                        {children}

                        {showCloseButton && (
                            <DialogPrimitive.Close
                                className={cn(
                                    "absolute right-4 top-4 h-5 w-5 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                                    styleXBtn && "right-6",
                                    closeBtnClassName
                                )}
                                aria-label="Close"
                            >
                                <X
                                    className={cn(
                                        "h-6 w-6 outline-none rounded-full",
                                        styleXBtn && "h-8 w-8 p-1.5 bg-kaiglo_success-1"
                                    )}
                                />
                                {/* <span className="sr-only">Close</span> */}
                            </DialogPrimitive.Close>
                        )}
                    </div>
                </DialogPrimitive.Content>
            </DialogPortal>
        );
    }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
        {...props}
    />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold leading-none tracking-tight", className)}
        {...props}
    />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
