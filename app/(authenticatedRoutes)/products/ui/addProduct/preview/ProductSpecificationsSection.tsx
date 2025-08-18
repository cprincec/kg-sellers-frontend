import { IProduct } from "../../../lib/interfaces/interface";

const ProductSpecificationsSection = ({ product }: { product: IProduct }) => {
    const { specifications } = product;

    return (
        <div className="grid gap-6">
            <section className="grid gap-3 md:gap-4 p-4 md:px-6 border-b">
                <h2 className="text-sm md:text-base font-medium">PRODUCT SPECIFICATIONS</h2>
                {specifications && specifications.length ? (
                    <ul className="grid gap-3 font-medium text-sm md:text-base list-disc list-inside">
                        {specifications.map((spec, index) => (
                            <li key={index} className="px-3 py-1 md:py-2 capitalize">
                                {spec.name} : {spec.option}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No specifications selected</p>
                )}
            </section>
        </div>
    );
};
export default ProductSpecificationsSection;
