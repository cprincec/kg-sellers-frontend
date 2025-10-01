"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { IProductPerformance } from "../../lib/interface";
import { NoResultsIcon } from "../icons";
import { useState } from "react";
import {
    LeftPagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 5;

const ProductPerformanceTable = ({ data }: { data: IProductPerformance[] }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate pagination
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = data.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    };

    return (
        <div className="space-y-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[180px]">Product</TableHead>
                        <TableHead className="text-center whitespace-nowrap lg:hidden">Qty sold</TableHead>
                        <TableHead className="text-center whitespace-nowrap hidden lg:table-cell">
                            Quantity sold
                        </TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((product, index) => {
                            const { productName, sku, productUrl, qty, amount } = product;
                            return (
                                <TableRow key={index}>
                                <TableCell className="">
                                    <div className="flex gap-1.5">
                                        <Image 
                                            src={productUrl} 
                                            alt="headphone" 
                                            width={40} 
                                            height={40}
                                            className="shrink-0"
                                        />
                                        <div className="grid min-w-0 flex-1">
                                            <h4 className="text-sm font-normal truncate" title={productName}>
                                                {productName}
                                            </h4>
                                            <p className="text-xs truncate" title={sku}>{sku}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                    <TableCell className="text-center">{qty}</TableCell>
                                    <TableCell>₦{amount.toLocaleString()}</TableCell>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3}>
                                <NoResultsIcon
                                    className="flex flex-col items-center justify-center py-6"
                                    title="No results yet"
                                    description="Data will begin populating as soon as you commence making sales"
                                />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Pagination Controls */}
            {data.length > ITEMS_PER_PAGE && (
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-4">
                    <LeftPagination>
                        <PaginationContent>
                            <PaginationItem className="h-9 w-9">
                                <PaginationPrevious
                                    justIcon={true}
                                    onClick={handlePreviousPage}
                                    className="hover:bg-kaiglo_grey-200 h-9 w-9"
                                    disabled={currentPage === 1}
                                />
                            </PaginationItem>

                            <PaginationItem>
                                <span className="text-sm font-medium px-3">
                                    Page {currentPage} of {totalPages}
                                </span>
                            </PaginationItem>

                            <PaginationItem className="h-9 w-9">
                                <PaginationNext
                                    justIcon={true}
                                    onClick={handleNextPage}
                                    className="h-9 w-9 hover:bg-kaiglo_grey-200"
                                    disabled={currentPage === totalPages}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </LeftPagination>

                    <p className="text-sm shrink-0">
                        Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length} products
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductPerformanceTable;
