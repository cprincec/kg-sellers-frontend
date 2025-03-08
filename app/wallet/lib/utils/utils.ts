// Return appropriate styling for payout given payout status
export const getPayoutStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
        case "successful":
            return "font-medium py-1 px-2 bg-kaiglo_success-100 text-kaiglo_success-600 text-xs lg:text-sm rounded-xl capitalize";
        case "pending":
            return "font-medium py-1 px-2 text-xs lg:text-sm text-kaiglo_critical-base bg-kaiglo_critical-100 rounded-lg capitalize";
        default:
            return "";
    }
};
