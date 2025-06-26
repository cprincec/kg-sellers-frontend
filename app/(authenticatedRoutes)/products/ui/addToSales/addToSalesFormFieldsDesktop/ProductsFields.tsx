import { Input } from "@/components/ui/input";
import { Label } from "recharts";
import { IProductVariant, ProductVariant } from "../../../lib/interfaces/interface";

type Props = {
    productVariants: IProductVariant[] | ProductVariant[];
    handleChange: (index: number, field: "salesQuantity" | "discountPrice", value: string) => void;
};

const ProductsFields = ({ productVariants, handleChange }: Props) => {
    return (
        <div className="grid gap-2">
            <Label className="font-medium text-sm text-kaiglo_grey-700">Products</Label>
            <div className="grid gap-4 py-3">
                {productVariants.map((variant, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize"
                                placeholder="Select colour*"
                                defaultValue={variant.color}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Select colour*
                            </span>
                        </div>

                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize"
                                placeholder="Select Size"
                                defaultValue={variant.size}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Select Size
                            </span>
                        </div>

                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize"
                                placeholder="Select quantity"
                                defaultValue={variant.quantity}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Current quantity
                            </span>
                        </div>

                        <div className="relative max-w-[112px]">
                            <Input
                                type="text"
                                className="h-10 pt-4 lg:text-sm font-normal text-kaiglo_grey-base capitalize"
                                placeholder="Select price"
                                defaultValue={variant.price.toLocaleString()}
                                disabled
                            />
                            <span className="absolute top-0 left-[14px] translate-y-1.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                Current price
                            </span>
                        </div>

                        <div className="max-w-[140px]">
                            <Input
                                type="number"
                                className="h-10 lg:text-sm font-normal text-kaiglo_grey-placeholder capitalize"
                                placeholder="Sales quantity"
                                onChange={(e) => handleChange(index, "salesQuantity", e.target.value)}
                            />
                        </div>

                        <div className="">
                            <Input
                                type="number"
                                className="h-10 lg:text-sm font-normal text-kaiglo_grey-placeholder capitalize"
                                placeholder="Sales/Discount Price"
                                onChange={(e) => handleChange(index, "discountPrice", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductsFields;
