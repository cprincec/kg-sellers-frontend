import DashboardLayout from "@/components/layouts/DashboardLayout";
import Header from "../dashboard/ui/navigation/Header";
import OrderHistoryToolsBar from "../orders/ui/OrderHistoryToolsBar";
import TransactionHistoryTableWrapper from "./ui/TransactionHistoryTableWrapper";

const Transactions = () => {
    return (
        <DashboardLayout>
            <div className="pb-4 grid gap-2 md:gap-1">
                <Header heading={"Transactions"} description={"Your current transactions activities."} />

                <div className="grid px-3 md:pl-1 md:pr-1 md:max-lg:p-4 lg:px-4 md:max-lg:bg-white">
                    <OrderHistoryToolsBar
                        showSort={false}
                        actionText={"Export csv"}
                        className="px-0 lg:py-0 border-y-0"
                    />

                    <TransactionHistoryTableWrapper />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Transactions;
