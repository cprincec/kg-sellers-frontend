import clsx from "clsx";
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
        // <section className="grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl bg-kaiglo_grey-100 lg:bg-white">
        <section className="grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl lg:bg-white">
            <h2 className="md:p-[12px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200 uppercase">
                WEEKLY STORE PERFOMANCE
            </h2>

            <div className="grid lg:grid-cols-4 gap-2">
                {weeklyPerformance.map((item, index) => (
                    <div
                        key={item.title}
                        className={clsx(
                            "lg:m-6 lg:mt-8 lg:mr-0",
                            index !== 0 && "lg:border-l-2 lg:border-kaiglo_grey-200 lg:rounded-none"
                        )}
                    >
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
