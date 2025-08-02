"use client";

import { IProductDetailsDTO } from "../../lib/interfaces/interface";

const ProductDetailsSpecificationsSection = ({ product }: { product: IProductDetailsDTO }) => {
    return (
        <section className="grid gap-2">
            <h3 className="font-medium text-sm text-kaiglo_grey-900">Specifications</h3>
            {product.specifications?.length ? (
                <ul className="grid gap-2 list-disc pl-7">
                    {product.specifications?.map((specification) => (
                        <li
                            key={specification.name}
                            className="px-3 py-2 text-sm font-medium capitalize pl-0"
                        >
                            {specification.name}: {specification.option}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Specifications added</p>
            )}
        </section>
    );
};

export default ProductDetailsSpecificationsSection;
