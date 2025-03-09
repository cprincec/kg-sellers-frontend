"use client";

import PaginationComponent from "@/components/shared/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IPayoutDTO } from "../../lib/interface";
import { Button } from "@/components/ui/button";
import PayoutDetails from "./PayoutDetails";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { getPayoutStatusStyle } from "../../lib/utils/utils";

const PayoutHistoryTable = ({ payoutHistory }: { payoutHistory: IPayoutDTO[] }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // get payout index from url
    const payoutIndex = parseInt(searchParams.get("payout-index") || "-1");

    // check that payout index from url is valid
    const isValidIndex = payoutIndex >= 0 && payoutIndex < payoutHistory.length;
    const [showPayoutDetails, setShowPayoutDetails] = useState<boolean>(isValidIndex);

    const handleShowPayoutDetails = (index: number) => {
        // Update url with order id
        const params = new URLSearchParams(searchParams);
        params.set("payout-index", index.toString());
        router.replace(`${pathname}?${params.toString()}`);

        // Show payout details modal
        setShowPayoutDetails(true);
    };
    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full lg:border lg:border-kaiglo_grey-200">
                <TableHeader>
                    <TableRow className="hover:bg-kaiglo_grey-50 bg-kaiglo_grey-50">
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[20px]">
                            S/N
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 text-center whitespace-nowrap">
                            Order ID
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 text-center whitespace-nowrap">
                            Date
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Amount
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Status
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Status
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {payoutHistory.map((history, index) => {
                        const { reference, date, amount, status } = history;
                        return (
                            <TableRow
                                key={index}
                                className="cursor-pointer"
                                onClick={() => handleShowPayoutDetails(index)}
                            >
                                <TableCell className="p-3 md:text-base max-w-[20px]">{index + 1}</TableCell>
                                <TableCell className="p-3 text-sm text-center">{reference}</TableCell>
                                <TableCell className="p-3 text-sm md:text-base text-center">{date}</TableCell>
                                <TableCell className="p-3 text-sm md:text-base text-center">
                                    ₦{parseFloat(amount).toLocaleString()}
                                </TableCell>
                                <TableCell className="p-3 text-center">
                                    <span className={getPayoutStatusStyle(status)}>{status}</span>
                                </TableCell>
                                <TableCell className="p-3 text-center">
                                    <Button
                                        variant={"outline"}
                                        className="py-1 px-2 text-kaiglo_grey-900 border-kaiglo_grey-placeholder text-xs rounded-xl font-medium capitalize"
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* pagination starts */}
            <PaginationComponent dataLength={payoutHistory.length} />
            {/* pagination ends */}

            {/* Payout details modal starts */}
            {showPayoutDetails && isValidIndex && (
                <PayoutDetails
                    showPayoutDetail={showPayoutDetails}
                    setShowPayoutDetail={setShowPayoutDetails}
                    payout={payoutHistory[payoutIndex]}
                />
            )}
            {/* Payout details modal ends */}
        </div>
    );
};

export default PayoutHistoryTable;
