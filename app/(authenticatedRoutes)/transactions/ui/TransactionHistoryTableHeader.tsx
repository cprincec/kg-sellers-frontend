import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TransactionHistoryTableHeader = () => {
    const fields = [
        "Order ID",
        "Quantity",
        "Sub-total",
        "Rate",
        "Commission",
        "Status",
        "Date",
        "Payout amount",
    ];
    return (
        <TableHeader>
            <TableRow className="hover:bg-transparent">
                <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap">
                    S/N
                </TableHead>

                {fields.map((field) => (
                    <TableHead
                        key={field}
                        className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap"
                    >
                        {field}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
};
export default TransactionHistoryTableHeader;
