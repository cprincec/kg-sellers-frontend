import { cn } from "@/lib/utils";
import { getProductVariantColor } from "../../lib/utils";
import { IProductVariantDTO } from "../../lib/interface";

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
                                    className={cn(
                                        "hidden md:block w-3 h-3 rounded-[2px]",
                                        getProductVariantColor(variant.color, true)
                                    )}
                                ></div>

                                <p
                                    className={cn(
                                        "text-sm font-medium text-kaiglo_grey-700 capitalize",
                                        getProductVariantColor(variant.color)
                                    )}
                                >
                                    {variant.color}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Size</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => (
                            <p
                                key={"variant size-" + index + 1}
                                className="justify-self-start text-sm font-medium text-kaiglo_grey-700 md:text-center md:bg-kaiglo_grey-100 p-1 rounded-lg capitalize"
                            >
                                {variant.size}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="grid gap-2 w-[120px]">
                    <h4 className="text-sm font-normal text-kaiglo_grey-500">Quantity</h4>
                    <div className="grid gap-2">
                        {productVariants.map((variant, index) => (
                            <p key={"variant quantity-" + index + 1} className="text-sm text-kaiglo_grey-700">
                                {variant.quantity}
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
                                ₦{variant.amount.toLocaleString()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductVariants;
