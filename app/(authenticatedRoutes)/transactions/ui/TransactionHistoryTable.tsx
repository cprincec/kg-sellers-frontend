"use client";

import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { ITransactionDTO } from "../lib/interface";
import TransactionHistoryTableHeader from "./TransactionHistoryTableHeader";
import TransactionHistoryTableBody from "./TransactionHistoryTableBody";
import TransactionDetails from "./TransactionDetails";
import PaginationComponent from "@/components/shared/Pagination";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const TransactionHistoryTable = ({ transactions }: { transactions: ITransactionDTO[] }) => {
    const searchParams = useSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();

    // Get page number from Url
    const pageParam = searchParams.get("page");
    const page = pageParam !== null ? parseInt(pageParam, 10) : 1;

    // Get transaction index from URL
    const transactionIndex = parseInt(searchParams.get("transaction-index") || "-1", 10);
    const isValidIndex = transactionIndex >= 0 && transactionIndex < transactions.length;

    useEffect(() => {
        if (isValidIndex) {
            setModalContent(<TransactionDetails transaction={transactions[transactionIndex]} />);
            setOnClose(() => () => deleteSearchParams(["transaction-index"]));
            setShowModal(true);
        }
    }, [isValidIndex, transactionIndex, transactions, setModalContent, setShowModal]);

    const start = (page - 1) * RESULTS_PER_PAGE;
    const end = start + RESULTS_PER_PAGE;
    const paginatedTransactions = transactions.slice(start, end);

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full border">
                <TransactionHistoryTableHeader />
                <TransactionHistoryTableBody transactions={paginatedTransactions} />
            </Table>

            <PaginationComponent dataLength={transactions.length} />
        </div>
    );
};

export default TransactionHistoryTable;
