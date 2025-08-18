"use client";

import { IProduct } from "../../../lib/interfaces/interface";

const SeoSection = ({ product }: { product: IProduct }) => {
    const { seo } = product;

    return (
        <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10">
            <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION SUMMARY (SEO)</h2>
            {seo ? (
                <ul className="flex flex-wrap gap-3 font-medium text-sm md:text-base list-disc list-inside">
                    {seo?.split(",").map((item, index) => (
                        <li
                            key={index}
                            className="flex gap-2 p-2 items-center justify-center text-sm md:text-base text-kaiglo_grey-800 font-normal bg-kaiglo_grey-50 border border-kaiglo_grey-200 rounded-lg"
                        >
                            <span className="capitalize">{item}</span>
                            <span className="font-semi">✕</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No product description summary added</p>
            )}
        </section>
    );
};
export default SeoSection;
