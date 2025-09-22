import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IWallet } from "../../lib/interface";
import PaginationComponent from "@/components/shared/Pagination";
import { format } from "date-fns";
import { NoResultsIcon } from "@/app/(authenticatedRoutes)/dashboard/ui/icons";

const WalletHistoryTable = ({
    walletHistory,
    totalPages,
    pageSize,
}: {
    totalPages: number;
    pageSize: number;
    walletHistory: IWallet[];
}) => {
    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full lg:border lg:border-kaiglo_grey-200">
                <TableHeader>
                    <TableRow className="hover:bg-kaiglo_grey-50 bg-kaiglo_grey-50">
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[50px]">
                            S/N
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Order ID
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Date
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Amount
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Status
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {walletHistory.length > 0 ? (
                        walletHistory.map((walletHistory, index) => {
                            const { orderNumber, inWalletDate, amount, status } = walletHistory;
                            return (
                                <TableRow key={index} className="cursor-pointer">
                                    <TableCell className="p-3 md:text-base max-w-[50px]">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="p-3 text-sm text-center">{orderNumber}</TableCell>
                                    <TableCell className="p-3 text-sm md:text-base text-center">
                                        {format(inWalletDate, "dd MMM yyyy")}
                                    </TableCell>
                                    <TableCell className="p-3 text-sm md:text-base text-center">
                                        ₦{amount.toLocaleString()}
                                    </TableCell>
                                    <TableCell className="p-3 text-center">
                                        <span className="py-1 px-2 bg-kaiglo_success-100 text-kaiglo_success-600 text-sm rounded-xl capitalize">
                                            {status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <div className="min-h-[350px] flex items-center justify-center">
                                    <NoResultsIcon title="No wallet data" />
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <PaginationComponent totalPages={totalPages} pageSize={pageSize} />
        </div>
    );
};

export default WalletHistoryTable;
