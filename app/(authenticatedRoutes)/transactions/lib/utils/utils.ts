export const getOrderStatusType = (status: string) => {
    switch (status.toLowerCase()) {
        case "cancelled":
            return "cancelled";
        case "processing":
            return "processing";
        case "shipped":
            return "shipped";
        case "delivered":
            return "delivered";
        default:
            return "new";
    }
};

// Return style class for transaction status
export const getTransactionStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
        case "in escrow":
            return "py-1 px-2 text-sm text-kaiglo_warning-500 bg-kaiglo_warning-25 border border-kaiglo_warning-200 rounded-lg";
        case "in wallet":
            return "py-1 px-2 text-sm text-kaiglo_success-600 bg-kaiglo_success-50 rounded-lg";
        default:
            return "py-1 px-2 text-sm border border-kaiglo_grey-base rounded-lg";
    }
};
