import Metric from "./Metric";

const StorePerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const weeklyPerformance = [
        {
            title: "STORE VISITORS",
            body: "240",
            comparism: {
                value: "50%",
                isPositive: false,
                date: "last week",
            },
        },
        {
            title: "ORDERS",
            body: "150",
        },
        {
            title: "PRODUCT SALES",
            body: "₦3,900,000",
        },
        {
            title: "AVG. DAILY PRODUCT SALES",
            body: "30",
        },
    ];

    return (
        <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
            <h2 className="text-base text-kaiglo_grey-800 font-medium uppercase">WEEKLY STORE PERFOMANCE</h2>

            <div className="grid gap-3">
                {weeklyPerformance.map((item) => (
                    <div key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            comparism={item.comparism || null}
                            showEmptyState={showEmptyState}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StorePerformance;
