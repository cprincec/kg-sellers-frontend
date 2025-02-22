const orderStatusStyles = {
    new: "bg-kaiglo_success-base text-white",
    cancelled: "bg-kaiglo_critical-50 text-kaiglo_critical-600 border border-kaiglo_critical-200",
    processing: "bg-kaiglo_warning-25 text-kaiglo_warning-500 border border-kaiglo_warning-200",
    shipped: "bg-kaiglo_info-25 text-kaiglo_info-base border border-kaiglo_info-base",
    delivered: "bg-kaiglo_success-50 text-kaiglo_success-600",
} as const;

type OrderStatusProps = {
    status: keyof typeof orderStatusStyles;
    children: React.ReactNode;
    className?: string;
};

export const OrderStatus: React.FC<OrderStatusProps> = ({ status, children, className }) => (
    <span
        className={`inline-flex items-center justify-center rounded-lg capitalize text-sm font-medium px-3 py-1 ${
            orderStatusStyles[status]
        } ${className || ""}`}
    >
        {children}
    </span>
);
