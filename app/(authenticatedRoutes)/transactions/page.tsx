import OrderHistoryToolsBar from "../orders/ui/OrderHistoryToolsBar";
import TransactionHistoryTableWrapper from "./ui/TransactionHistoryTableWrapper";

const Transactions = () => {
    return (
        <div className="grid gap-4 p-4 lg:py-6 lg:gap-6 lg:border">
            <OrderHistoryToolsBar
                showSort={false}
                actionText={"Export csv"}
                className="p-0 lg:py-0 border-y-0"
            />

            <TransactionHistoryTableWrapper />
        </div>
    );
};

export default Transactions;
