import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
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
    const size = pageSize ?? RESULTS_PER_PAGE;

    // total pages of all table data
    const total = totalPages ?? (dataLength ? dataLength / size : 1);

    // Get page number from Url;
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? parseInt(pageParam) : 1;

    // show pagination for only one page
    const pages: (number | "...")[] = [];

    // Always show page 1 (unless you're already on page 1)
    if (currentPage !== 1 && pages[0] !== 1 && pages[1] !== 1) {
        pages.push(1);
    }

    // Ellipsis after page 1 if needed
    if (currentPage > 3) {
        pages.push("...");
    }

    pages.push(currentPage);

    if (currentPage < total) {
        pages.push(currentPage + 1);
    }

    // Ellipsis before last page if needed
    if (currentPage < total - 2) {
        pages.push("...");
    }

    // Always show last page (unless you're already on it)
    if (currentPage !== totalPages && !pages.includes(currentPage) && total > size) {
        pages.push(total);
    }

    return (
        <div
            className={cn(
                "flex flex-col lg:grid lg:grid-cols-[1fr_3fr_1fr] justify-center lg:justify-between items-center gap-4 py-4",
                className
            )}
        >
            <Pagination>
                <PaginationContent>
                    <PaginationItem className="h-full">
                        <PaginationPrevious
                            justIcon={true}
                            href={`?page=${Math.max(1, currentPage - 1)}`}
                            className="h-full"
                        />
                    </PaginationItem>

                    {pages.map((page, index) => (
                        <PaginationItem key={index}>
                            {page === "..." ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink href={`?page=${page}`} isActive={currentPage === page}>
                                    {page}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem className="h-full">
                        <PaginationNext
                            justIcon={true}
                            href={`?page=${Math.min(total, currentPage + 1)}`}
                            className="h-full"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <Pagination className="hidden lg:block h-full">
                <PaginationContent className="flex items-center justify-end h-full">
                    <PaginationItem className="h-full">
                        <PaginationPrevious
                            justIcon={false}
                            href={`?page=${Math.max(1, total - 1)}`}
                            className="h-full bg-transparent"
                        />
                    </PaginationItem>
                    <PaginationItem className="h-full">
                        <PaginationNext
                            aria-disabled
                            justIcon={false}
                            href={`?page=${Math.min(total, currentPage + 1)}`}
                            className="h-full bg-transparent"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <p className="text-sm lg:order-first">Showing {size} results per page</p>
        </div>
    );
};

export default PaginationComponent;
