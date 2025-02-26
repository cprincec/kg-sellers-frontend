export const getOrderStatusType = (status: string) => {
    switch (status.toLowerCase()) {
        case 'cancelled':
            return 'cancelled';
        case 'processing':
            return 'processing';
        case 'shipped':
            return 'shipped';
        case 'delivered':
            return 'delivered';
        default:
            return 'new';
    }
};
