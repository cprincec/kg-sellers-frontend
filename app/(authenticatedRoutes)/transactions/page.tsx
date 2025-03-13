import Header from "../dashboard/ui/navigation/Header";
import OrderHistoryToolsBar from "../orders/ui/OrderHistoryToolsBar";
import TransactionHistoryTableWrapper from "./ui/TransactionHistoryTableWrapper";

const Transactions = () => {
    return (
        <div className="pb-4 grid gap-2 lg:gap-6">
            <Header heading={"Transactions"} description={"Your current transactions activities."} />

            <div className="grid lg:gap-6 px-3 md:max-lg:bg-white">
                <OrderHistoryToolsBar
                    showSort={false}
                    actionText={"Export csv"}
                    className="px-0 lg:py-0 border-y-0"
                />

                <TransactionHistoryTableWrapper />
            </div>
        </div>
    );
};

export default Transactions;
