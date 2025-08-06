"use client";

import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ProductVariantsTableHeader = ({
    showActions,
    showSize,
}: {
    showActions?: boolean;
    showSize?: boolean;
}) => {
    return (
        <TableHeader className="w-auto">
            <TableRow className="bg-kaiglo_grey-50 hover:bg-transparent">
                <TableHead className="text-xs md:text-base p-3 font-medium text-kaiglo_grey-700 whitespace-nowrap max-w-[300px]">
                    Product
                </TableHead>
                <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                    Color
                </TableHead>
                {showSize && (
                    <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                        Size
                    </TableHead>
                )}
                <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                    Quantity
                </TableHead>
                <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                    Price
                </TableHead>
                {showActions && (
                    <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                        Action
                    </TableHead>
                )}
            </TableRow>
        </TableHeader>
    );
};

export default ProductVariantsTableHeader;
