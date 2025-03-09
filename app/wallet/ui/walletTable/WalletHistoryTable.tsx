import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IWalletDTO } from "../../lib/interface";
import PaginationComponent from "@/components/shared/Pagination";

const WalletHistoryTable = ({ walletHistory }: { walletHistory: IWalletDTO[] }) => {
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
                    {walletHistory.map((walletHistory: IWalletDTO, index: number) => {
                        const { orderId, date, amount, status } = walletHistory;
                        return (
                            <TableRow
                                key={index}
                                className="cursor-pointer"
                                // onClick={() => handleShowOrderDetails(index)}
                            >
                                <TableCell className="p-3 md:text-base max-w-[50px]">{index + 1}</TableCell>
                                <TableCell className="p-3 text-sm text-center">{orderId}</TableCell>
                                <TableCell className="p-3 text-sm md:text-base text-center">{date}</TableCell>
                                <TableCell className="p-3 text-sm md:text-base text-center">
                                    ₦{parseFloat(amount).toLocaleString()}
                                </TableCell>
                                <TableCell className="p-3 text-center">
                                    <span className="py-1 px-2 bg-kaiglo_success-100 text-kaiglo_success-600 text-sm rounded-xl capitalize">
                                        {status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            <PaginationComponent dataLength={walletHistory.length} />

            {/* {showOrderDetails && isValidIndex && (
                <OrderDetails
                    showOrderDetail
                    setShowOrderDetail={setShowOrderDetails}
                    order={orders[orderIndex]}
                />
            )} */}
        </div>
    );
};

export default WalletHistoryTable;
