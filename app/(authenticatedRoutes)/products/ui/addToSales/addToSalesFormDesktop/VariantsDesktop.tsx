import { Input } from "@/components/ui/input";
import { Label } from "recharts";
import { IProductVariantDTO } from "../../../lib/interfaces/interface";

type Props = {
    productVariants: IProductVariantDTO[];
    handleChange: (index: number, value: number) => void;
};

const VariantsDesktop = ({ productVariants, handleChange }: Props) => {
    return (
        <div className="grid gap-2">
            <Label className="font-medium text-sm text-kaiglo_grey-700">Products</Label>
            <div className="grid gap-4 py-3">
                {productVariants.map((variant, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-200 disabled:opacity-100"
                                placeholder="Select colour"
                                value={variant.productColor.color.color}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Colour
                            </span>
                        </div>

                        {variant.productColor.productPriceDetails[0].size && (
                            <div className="relative max-w-[112px]">
                                <Input
                                    type="text"
                                    className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-200 disabled:opacity-100"
                                    placeholder="Select Size"
                                    value={variant.productColor.productPriceDetails[0].size}
                                    disabled
                                />
                                <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Size
                                </span>
                            </div>
                        )}

                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-200 disabled:opacity-100"
                                placeholder="Select quantity"
                                value={variant.productColor.productPriceDetails[0].quantity}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Current quantity
                            </span>
                        </div>

                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-200 disabled:opacity-100"
                                placeholder="Select price"
                                value={variant.productColor.productPriceDetails[0].price.toLocaleString()}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Current price
                            </span>
                        </div>

                        <div className="">
                            <Input
                                type="number"
                                className="h-10 lg:text-sm font-normal text-kaiglo_grey-base capitalize disabled:opacity-100"
                                placeholder="Sales quantity"
                                defaultValue={variant.productColor.productPriceDetails[0].quantity}
                                disabled
                            />
                        </div>

                        <div>
                            <Input
                                type="number"
                                className="h-10 lg:text-sm font-normal text-kaiglo_grey-base capitalize"
                                placeholder="Sales/Discount Price"
                                onChange={(e) => handleChange(index, Number(e.target.value))}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default VariantsDesktop;
