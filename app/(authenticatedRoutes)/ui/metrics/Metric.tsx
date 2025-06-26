"use client";

import { MetricProps } from "../../lib/interface";
import Link from "next/link";
import MetricContent from "./MetricContent";

const Metric = (props: MetricProps) => {
    const { link } = props;

    const content = <MetricContent {...props} />;

    return link ? <Link href={link}>{content}</Link> : content;
};

export default Metric;
