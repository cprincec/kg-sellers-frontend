"use client";

import { IProductDetailsDTO } from "../../../lib/interfaces/interface";

const ProductNameSection = ({ productDetails }: { productDetails: IProductDetailsDTO }) => {
    const { productName } = productDetails;

    return (
        <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
            <h2 className="text-sm md:text-base font-medium">PRODUCT NAME</h2>
            {productName ? (
                <p className="text-sm font-medium p-3 border border-kaiglo_grey-disabled rounded-lg">
                    {productName}
                </p>
            ) : (
                <p>No product name added</p>
            )}
        </section>
    );
};
export default ProductNameSection;
