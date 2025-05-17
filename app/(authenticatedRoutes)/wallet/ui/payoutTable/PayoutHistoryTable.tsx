"use client";

import PaginationComponent from "@/components/shared/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IPayoutDTO } from "../../lib/interface";
import { Button } from "@/components/ui/button";
import PayoutDetails from "./PayoutDetails";
import { useSearchParams } from "next/navigation";
import { getPayoutStatusStyle } from "../../lib/utils/utils";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useEffect } from "react";

const PayoutHistoryTable = ({ payoutHistory }: { payoutHistory: IPayoutDTO[] }) => {
    const searchParams = useSearchParams();
    const { setSearchParams, deleteSearchParams } = useUpdateSearchParams();

    const { setShowModal, setModalContent, setOnClose } = useModalContext();

    useEffect(() => {
        // Check if payout index is present in the URL
        // and if it is valid
        const payoutIndex = searchParams.get("payout-index");

        if (
            !payoutIndex ||
            isNaN(Number(payoutIndex)) ||
            parseInt(payoutIndex) < 0 ||
            parseInt(payoutIndex) >= payoutHistory.length
        )
            return;

        // Show payout details modal
        setModalContent(<PayoutDetails payout={payoutHistory[parseInt(payoutIndex)]} />);
        setShowModal(true);
        setOnClose(() => () => deleteSearchParams(["payout-index"]));
    }, [searchParams, payoutHistory, setModalContent, setShowModal]);

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
                                onClick={() => setSearchParams([{ "payout-index": index.toString() }])}
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

            {/* pagination */}
            <PaginationComponent dataLength={payoutHistory.length} />
        </div>
    );
};

export default PayoutHistoryTable;
