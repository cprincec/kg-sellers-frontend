import Metric from "@/app/(authenticatedRoutes)/ui/metrics/Metric";
import { cn } from "@/lib/utils/utils";
import { StaticImageData } from "next/image";
import Link from "next/link";

type OverviewItem = {
    title: string;
    value: string;
    icon: StaticImageData;
    variant?: string;
    link?: string;
};

type Props = {
    overViewItem: OverviewItem;
    isFirst: boolean;
    isLast: boolean;
};

const ProductsOverviewCard = ({ overViewItem, isFirst, isLast }: Props) => {
    const { title, value, icon, variant, link } = overViewItem;
    const className = cn(
        "py-3 px-4 max-lg:border-x-0 max-lg:md:border-y max-lg:rounded-none",
        isLast && "max-lg:border-y-0 max-lg:rounded-b-xl",
        isFirst && "max-lg:rounded-t-xl border-y-0",
        !link && "flex-1"
    );

    const metricProps = {
        title,
        body: value,
        icon,
        variant,
        showEmptyState: false,
        className,
    };
    return link ? (
        <Link href={link} className="flex-1">
            <Metric {...metricProps} />
        </Link>
    ) : (
        <Metric {...metricProps} />
    );
};
export default ProductsOverviewCard;
