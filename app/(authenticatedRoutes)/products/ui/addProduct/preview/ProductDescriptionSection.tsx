"use client";

import { IProductDetailsDTO } from "../../../lib/interfaces/interface";

const ProductDescriptionSection = ({ productDetails }: { productDetails: IProductDetailsDTO }) => {
    const { description } = productDetails;

    return (
        <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
            <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION</h2>
            {description ? (
                <p className="text-sm md:text-base text-kaiglo_grey-900 font-medium">{description}</p>
            ) : (
                <h3>No product description added</h3>
            )}
        </section>
    );
};
export default ProductDescriptionSection;
