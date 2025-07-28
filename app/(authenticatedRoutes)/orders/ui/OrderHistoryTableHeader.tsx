import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OrderHistoryTableHeader = () => {
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent">
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                    S/N
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                    Order ID
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[500px]">
                    Product name
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Date of purchase
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Amount
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Payment
                </TableHead>
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                    Status
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
export default OrderHistoryTableHeader;
