import Header from "../dashboard/ui/navigation/Header";
import OrderHistory from "./ui/OrderHistory";
import SalesSummary from "../dashboard/ui/metrics/SalesSummary";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const Orders = () => {
    return (
        <DashboardLayout>
            <div className="pb-4 grid gap-2 md:gap-1">
                <Header heading={"Orders"} description={"Your current orders summary and activity."} />

                <div className="grid gap-6 px-3 md:pl-1 md:pr-1 md:max-lg:p-4 lg:p-6 md:max-lg:bg-white">
                    {/* Sales Summary */}
                    <SalesSummary showEmptyState={false} />

                    {/* Order History */}
                    <OrderHistory />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Orders;
