import Metric from "./Metric";
import { VerticalLineIcon2 } from "../orders/icons";

const SalesSummary = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const salesSummaryMock = [
        {
            title: "COMPLETED SALES",
            body: "₦200,000",
            tip: "Processing sales are orders that have been placed by a user",
            comparism: {
                value: "1.3%",
                isPositive: true,
                date: "last week",
            },
        },

        {
            title: "PROCESSING SALES",
            body: "₦100,000",
            tip: "Processing sales are orders that have been placed by a user",
        },
    ];

    return (
        // <section className="grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl bg-kaiglo_grey-100 lg:bg-white">
        <section className="grid gap-2 md:gap-0 py-3 md:py-4 px-2 lg:px-0 rounded-xl lg:bg-white border border-kaiglo_grey-200">
            <h2 className="md:p-[8px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                SALES SUMMARY
            </h2>

            <div className="grid lg:grid-cols-[1fr_2%_1fr] gap-2 lg:gap-4 lg:px-4 lg:py-3">
                {salesSummaryMock.map((item, index) => (
                    <div key={item.title} className="flex items-center">
                        <div className="flex-1">
                            <Metric
                                title={item.title || ""}
                                body={item.body || ""}
                                tip={item.tip || ""}
                                comparism={item.comparism || null}
                                showEmptyState={showEmptyState}
                            />
                        </div>
                        {index !== salesSummaryMock.length - 1 && (
                            <div className="hidden lg:flex items-center justify-center mx-2">
                                <VerticalLineIcon2 />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SalesSummary;
