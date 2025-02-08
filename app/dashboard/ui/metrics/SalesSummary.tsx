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
        <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
            <h2 className="text-base text-kaiglo_grey-800 font-medium">SALES SUMMARY</h2>

            <div className="grid gap-3">
                {salesSummaryMock.map((item) => (
                    <div key={item.title}>
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
