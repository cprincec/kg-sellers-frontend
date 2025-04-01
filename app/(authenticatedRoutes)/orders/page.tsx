import OrderHistory from "./ui/OrderHistory";
import SalesSummary from "../dashboard/ui/SalesSummary";

const Orders = () => {
    return (
        <div className="grid gap-6 px-3 md:p-4 lg:p-6 max-md:mt-4 lg:border">
            {/* Sales Summary */}
            <SalesSummary showEmptyState={false} />

            {/* Order History */}
            <OrderHistory />
        </div>
    );
};

export default Orders;
