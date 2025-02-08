import Metric from "./Metric";

const ProductSummary = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const productSummaryMock = [
        {
            title: "ACTIVE INVENTORY",
            body: "100",
            tip: "Processing sales are orders that have been placed by a user",
        },

        {
            title: "LOW INVENTORY",
            body: "76",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "warning",
        },
        {
            title: "OUT OF STOCK",
            body: "24",
            tip: "Processing sales are orders that have been placed by a user",
            variant: "error",
        },
    ];
    return (
        <section className="grid gap-3 p-2 rounded-xl bg-kaiglo_grey-50">
            <h2 className="text-base text-kaiglo_grey-800 font-medium uppercase">PRODUCT SUMMARY</h2>

            <div className="grid gap-3">
                {productSummaryMock.map((item) => (
                    <div key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            tip={item.tip || ""}
                            variant={item.variant || ""}
                            showEmptyState={showEmptyState}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSummary;
