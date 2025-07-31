import { cn } from "@/lib/utils/utils";
import { IProductVariantDTO } from "../../lib/interfaces/interface";

const ProductVariants = ({ productVariants }: { productVariants: IProductVariantDTO[] }) => {
    return (
        <section className="grid gap-2">
            <h3 className="text-sm font-medium">Product variants</h3>
            <div className="flex flex-wrap gap-4">
                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Color</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => (
                            <div key={"variant color-" + index + 1} className="flex items-center gap-1">
                                <div
                                    className={cn("hidden md:block w-3 h-3 rounded-[2px]")}
                                    style={{ backgroundColor: variant.productColor.color.color }}
                                ></div>

                                <p
                                    className={cn("text-sm font-medium text-kaiglo_grey-700 capitalize")}
                                    style={{ color: variant.productColor.color.color }}
                                >
                                    {variant.productColor.color.color}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Size</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => {
                            if (variant.productColor.productPriceDetails[0].size)
                                return (
                                    <p
                                        key={"variant size-" + index + 1}
                                        className="justify-self-start text-sm font-medium text-kaiglo_grey-700 md:text-center md:bg-kaiglo_grey-100 p-1 rounded-lg capitalize"
                                    >
                                        {variant.productColor.productPriceDetails[0].size}
                                    </p>
                                );
                        })}
                    </div>
                </div>

                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Quantity</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => (
                            <p key={"variant quantity-" + index + 1} className="text-sm text-kaiglo_grey-700">
                                {variant.productColor.productPriceDetails[0].quantity}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Amount</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => (
                            <p
                                key={"variant amount-" + index + 1}
                                className="text-sm font-medium text-kaiglo_grey-700 capitalize"
                            >
                                ₦{variant.productColor.productPriceDetails[0].price.toLocaleString()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductVariants;
