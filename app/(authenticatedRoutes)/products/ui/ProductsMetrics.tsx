import { Fragment } from "react";
import { productsMetricsData } from "../lib/data/data";
import Metric from "../../ui/metrics/Metric";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ProductsMetrics = ({ className }: { className?: string }) => {
    return (
        <div className={cn("grid lg:flex lg:items-center lg:py-3 border rounded-xl", className)}>
            {productsMetricsData.map((item, index) => {
                const { title, value, icon, variant, link } = item;

                return (
                    <Fragment key={item.title}>
                        {link ? (
                            <Link href={`/products/${link}`} className="flex-1">
                                <Metric
                                    title={title}
                                    body={value}
                                    icon={icon}
                                    variant={variant}
                                    showEmptyState={false}
                                    className={cn(
                                        "py-3 px-4 max-lg:border-x-0 max-lg:md:border-y max-lg:rounded-none",
                                        index === productsMetricsData.length - 1 &&
                                            "max-lg:border-y-0 max-lg:rounded-b-xl",
                                        index === 0 && "max-lg:rounded-t-xl border-y-0"
                                    )}
                                />
                            </Link>
                        ) : (
                            <Metric
                                title={title}
                                body={value}
                                icon={icon}
                                variant={variant}
                                showEmptyState={false}
                                className={cn(
                                    "py-3 px-4 flex-1 max-lg:border-x-0 max-lg:md:border-y max-lg:rounded-none",
                                    index === productsMetricsData.length - 1 &&
                                        "max-lg:border-y-0 max-lg:rounded-b-xl",
                                    index === 0 && "max-lg:rounded-t-xl border-y-0"
                                )}
                            />
                        )}

                        {/* divider */}
                        {index !== productsMetricsData.length - 1 && (
                            <div className="hidden lg:block">
                                <Image
                                    src={IconVerticalLine}
                                    alt="divider"
                                    width={1}
                                    height={10}
                                    className="bg-kaiglo_grey-200 w-[2px] h-[64px]"
                                />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};
export default ProductsMetrics;
