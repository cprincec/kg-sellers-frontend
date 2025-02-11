import clsx from "clsx";
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
        <section className="grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl bg-kaiglo_grey-100 lg:bg-white">
            <h2 className="md:p-[12px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200 uppercase">
                PRODUCT SUMMARY
            </h2>

            <div className="grid lg:grid-cols-3 gap-2">
                {productSummaryMock.map((item, index) => (
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
