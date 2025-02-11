import clsx from "clsx";
import Metric from "./Metric";

const SalesSummary = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const salesSummaryMock = [
        {
            title: "COMPLETED SALES",
            body: "₦200,000",
            tip: "Processing sales are orders that have been placed by a user",
        },

        {
            title: "PROCESSING SALES",
            body: "₦100,000",
            tip: "Processing sales are orders that have been placed by a user",
        },
    ];

    return (
        <section className="grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl bg-kaiglo_grey-100 lg:bg-white">
            <h2 className="md:p-[12px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200">
                SALES SUMMARY
            </h2>

            <div className="grid lg:grid-cols-2 gap-2">
                {salesSummaryMock.map((item, index) => (
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
                            tip={item.tip || ""}
                            showEmptyState={showEmptyState}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SalesSummary;
