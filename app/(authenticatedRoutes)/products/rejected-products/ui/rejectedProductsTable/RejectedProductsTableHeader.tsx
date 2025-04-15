import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RejectedProductsTableHeader = () => {
    return (
        <TableHeader className="">
            <TableRow className="bg-kaiglo_grey-50 hover:bg-transparent">
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                    S/N
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[300px]">
                    Product
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Quantity
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Date created
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Amount
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Status
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Action
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
export default RejectedProductsTableHeader;
