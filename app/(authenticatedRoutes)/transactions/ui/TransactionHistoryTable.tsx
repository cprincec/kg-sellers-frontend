"use client";

import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { ITransaction } from "../lib/interface";
import TransactionHistoryTableHeader from "./TransactionHistoryTableHeader";
import TransactionHistoryTableBody from "./TransactionHistoryTableBody";
import TransactionDetails from "./TransactionDetails";
import PaginationComponent from "@/components/shared/Pagination";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const TransactionHistoryTable = ({
    transactions,
    totalPages,
    pageSize,
}: {
    transactions: ITransaction[];
    totalPages: number;
    pageSize: number;
}) => {
    const searchParams = useSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();
    const transactionId = searchParams.get("transaction-id");

    useEffect(() => {
        if (transactionId) {
            const transaction = transactions.find((t) => t.reference === transactionId);
            if (transaction) {
                setModalContent(<TransactionDetails transaction={transaction} />);
                setOnClose(() => () => deleteSearchParams(["transaction-id"]));
                setShowModal(true);
            }
        }
    }, [transactionId, transactions]);

    // const start = (page - 1) * RESULTS_PER_PAGE;
    // const end = start + RESULTS_PER_PAGE;
    // const paginatedTransactions = transactions.slice(start, end);

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full border">
                <TransactionHistoryTableHeader />
                <TransactionHistoryTableBody transactions={transactions} />
            </Table>

            <PaginationComponent
                totalPages={totalPages}
                pageSize={pageSize}
                dataLength={transactions.length}
            />
        </div>
    );
};

export default TransactionHistoryTable;
