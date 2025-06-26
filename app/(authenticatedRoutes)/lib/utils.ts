export const getHeaderTitleAndDescription = (pathname: string) => {
    const headers: Record<string, { title: string; description: string }> = {
        dashboard: { title: "Overview", description: "Track, manage your orders." },
        wallet: { title: "Wallet", description: "" },
        orders: { title: "Orders", description: "Your current orders summary and activity." },
        products: { title: "Products", description: "" },
        settings: { title: "Settings", description: "" },
        transactions: { title: "Transaction history", description: "Your current transactions activities." },
    };

    return headers[pathname] || { title: "Overview", description: "Track, manage your orders." };
};

export const getMetricVariant = (variant: string) => {
    if (!variant) return "text-kaiglo_grey-500";

    const variants: Record<string, string> = {
        warning: "text-kaiglo_attention-500",
        error: "text-kaiglo_critical-error",
        success: "text-kaiglo_success-base",
    };

    return variants[variant];
};

/**
 * Generates profile initials from a full name or email.
 * @param {string} email - The user's email address.
 * @param {string} [fullName] - The user's full name (optional).
 * @return {string} - A string containing the initials from the full name or the first letter of the email if no full name is provided.
 */
export const getProfileInitialsFromFullNameOrEmail = (email: string, fullName?: string) => {
    if (!fullName?.trim()) {
        return email[0];
    }

    const names = fullName.trim().split(/\s+/); // split by any amount of spaces
    const firstInitial = names[0]?.[0] || "";
    const lastInitial = names[1]?.[0] || "";

    return `${firstInitial}${lastInitial}`;
};

export const formatCurrency = (val: number | string) => `₦${Number(val).toLocaleString("en-NG")}`;
