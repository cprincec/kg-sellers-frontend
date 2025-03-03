import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = ({
    currentPage,
    totalPages,
}: {
    dataLength?: number;
    currentPage: number;
    totalPages: number;
}) => {
    console.log(totalPages);
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

    if (currentPage < totalPages) {
        pages.push(currentPage + 1);
    }

    // Ellipsis before last page if needed
    if (currentPage < totalPages - 2) {
        pages.push("...");
    }

    // Always show last page (unless you're already on it)
    if (currentPage !== totalPages) {
        pages.push(totalPages);
    }

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_3fr_1fr] justify-center lg:justify-between items-center gap-4 py-4">
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
                            href={`?page=${Math.min(totalPages, currentPage + 1)}`}
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
                            href={`?page=${Math.max(1, currentPage - 1)}`}
                            className="h-full bg-transparent"
                        />
                    </PaginationItem>
                    <PaginationItem className="h-full">
                        <PaginationNext
                            justIcon={false}
                            href={`?page=${Math.min(totalPages, currentPage + 1)}`}
                            className="h-full bg-transparent"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <p className="text-sm lg:order-first">Showing 10 results per page</p>
        </div>
    );
};

export default PaginationComponent;
