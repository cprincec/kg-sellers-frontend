"use client";

import {
    Pagination,
    PaginationButton,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { cn } from "@/lib/utils/utils";
import { useSearchParams } from "next/navigation";

// Refactor this component after working on all other tables
const PaginationComponent = ({
    totalPages,
    pageSize,
    dataLength,
    className,
}: {
    totalPages?: number;
    pageSize?: number;
    dataLength?: number;
    className?: string;
}) => {
    const searchParams = useSearchParams();
    const { setSearchParams } = useUpdateSearchParams();
    const size = pageSize ?? RESULTS_PER_PAGE;

    // total pages of all table data
    const total = totalPages ?? (dataLength ? dataLength / size : 1);

    if (total <= 1) return null;

    // Get page number from Url;
    const pageParam = searchParams.get("page");
    const currentPage = Number(pageParam) || 1;

    // show pagination for only one page
    const pages: (number | "...")[] = [];
    const MAX = 10;
    if (total <= MAX) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        pages.push(1);

        const INTERVAL = 4;
        let start = 1;
        let end = start + INTERVAL;

        if (currentPage === 1 || currentPage < INTERVAL) {
            start = 2;
            end = INTERVAL + 1;
        } else if (currentPage % INTERVAL === 0) {
            start = currentPage;
            end = start + INTERVAL;
        } else {
            start = Math.floor(currentPage / INTERVAL) * INTERVAL;
            end = start + INTERVAL;
        }

        if (start >= INTERVAL) {
            pages.push("...");
        }

        for (let i = start; i < end; i++) {
            if (i !== 1 && i < total) pages.push(i);
        }

        // Ellipsis before last page if needed
        if (currentPage < total - INTERVAL) {
            pages.push("...");
        }

        pages.push(total);
    }

    return (
        <div
            className={cn(
                "flex flex-col lg:flex lg:flex-row justify-center lg:justify-between items-center gap-4 py-4 lg:py-6 lg:mt-5",
                className
            )}
        >
            <Pagination>
                <PaginationContent>
                    <PaginationItem className="h-9 w-9">
                        <PaginationPrevious
                            justIcon={true}
                            onClick={() => setSearchParams([{ page: `${Math.max(1, currentPage - 1)}` }])}
                            className="hover:bg-kaiglo_grey-200 h-9 w-9"
                            disabled={currentPage === 1}
                        />
                    </PaginationItem>

                    {pages.map((page, index) => {
                        const isActive = currentPage === page;
                        return (
                            <PaginationItem key={index}>
                                {page === "..." ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationButton
                                        onClick={() => setSearchParams([{ page: `${page}` }])}
                                        isActive={isActive}
                                        className={`px-3 py-2 disabled:opacity-100 ${
                                            !isActive && "hover:bg-kaiglo_grey-200"
                                        }`}
                                    >
                                        {page}
                                    </PaginationButton>
                                )}
                            </PaginationItem>
                        );
                    })}
                    <PaginationItem className="h-9 w-9">
                        <PaginationNext
                            justIcon={true}
                            onClick={() => setSearchParams([{ page: `${Math.min(currentPage + 1, total)}` }])}
                            className="h-9 w-9 hover:bg-kaiglo_grey-200"
                            disabled={currentPage === total}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <Pagination className="hidden lg:flex justify-end h-full max-w-max">
                <PaginationContent className="flex justify-end gap-3 flex-wrap">
                    <PaginationItem className="w-[100px]">
                        <PaginationPrevious
                            justIcon={false}
                            onClick={() => setSearchParams([{ page: `${Math.max(1, currentPage - 1)}` }])}
                            className="bg-transparent px-3 py-2 hover:bg-kaiglo_grey-200 w-[100px]"
                            disabled={currentPage === 1}
                        />
                    </PaginationItem>
                    <PaginationItem className="w-[100px]">
                        <PaginationNext
                            aria-disabled
                            justIcon={false}
                            onClick={() => setSearchParams([{ page: `${Math.min(currentPage + 1, total)}` }])}
                            className="bg-transparent px-3 py-2 hover:bg-kaiglo_grey-200 w-[100px]"
                            disabled={currentPage === total}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <p className="text-sm lg:order-first shrink-0">Showing {size} results per page</p>
        </div>
    );
};

export default PaginationComponent;
