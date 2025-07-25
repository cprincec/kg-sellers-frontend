import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils/utils";
import { buttonVariants } from "@/components/ui/button";
import { ButtonProps } from "@/app/(auth)/lib/interfaces/interface";
import Link from "next/link";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
    ({ className, ...props }, ref) => (
        <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
    )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
    ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> &
    React.ComponentProps<typeof Link>;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
    <Link
        aria-current={isActive ? "page" : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? "primary" : "ghost",
                size,
            }),
            "rounded-full text-[10px] flex",
            !isActive && "bg-transparent",
            className
        )}
        {...props}
    />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
    justIcon,
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { justIcon: boolean }) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="sm"
        className={cn("gap-1 border text-base", className)}
        {...props}
    >
        {justIcon && <ChevronLeft className="h-4 w-4" />}
        {!justIcon && <span className="hidden lg:block">Previous</span>}
    </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
    justIcon,
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { justIcon: boolean }) => (
    <PaginationLink
        aria-label="Go to next page"
        size="sm"
        className={cn("gap-1 border text-base", className)}
        {...props}
    >
        {!justIcon && <span className="hidden lg:block">Next</span>}
        {justIcon && <ChevronRight className="h-4 w-4" />}
    </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
    <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
};
