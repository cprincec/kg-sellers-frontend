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
