"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/utils";
import { buttonVariants } from "@/components/ui/button";

const ProductPreviewEditButton = ({
    productId,
    section,
}: {
    productId: string;
    section: "variants" | "category" | "information" | "details";
}) => {
    const sections = {
        category: "product-category",
        information: "product-details",
        details: "product-details",
        variants: "product-variants",
    };

    if (!sections[section]) return null;

    return (
        <Link
            href={`/products/add-product?step=${sections[section]}&product-id=${productId}&product-action=edit`}
            className={cn(buttonVariants({ variant: "secondary" }), "font-medium ml-auto mr-2")}
        >
            Edit product {section}
        </Link>
    );
};

export default ProductPreviewEditButton;
