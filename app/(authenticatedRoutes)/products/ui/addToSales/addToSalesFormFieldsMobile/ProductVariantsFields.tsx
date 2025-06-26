import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { IProductVariant, ProductVariant } from "../../../lib/interfaces/interface";

const ProductVariantsFields = ({
    productVariants,
}: {
    productVariants: IProductVariant[] | ProductVariant[];
}) => {
    return (
        <div className="grid gap-3">
            <Accordion type="multiple" className="w-full grid gap-3">
                {productVariants.map((variant, i) => (
                    <AccordionItem
                        key={i}
                        value={`variant-${i}`}
                        className="grid gap-3 border border-kaiglo_grey-200 rounded-lg"
                    >
                        <AccordionTrigger className="text-sm font-medium px-2 py-3 text-kaiglo_grey-900 border-kaiglo_grey-200 rounded-lg">
                            Variant {i + 1}
                        </AccordionTrigger>
                        <AccordionContent className="grid gap-3 p-2">
                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-4 text-sm font-normal text-kaiglo_grey-base capitalize"
                                    placeholder="Select colour*"
                                    defaultValue={variant.color}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Select colour*
                                </span>
                            </div>

                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-4 text-sm font-normal text-kaiglo_grey-base capitalize"
                                    placeholder="Select Size"
                                    defaultValue={variant.size}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Select Size
                                </span>
                            </div>

                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-4 text-sm font-normal text-kaiglo_grey-base capitalize"
                                    placeholder="Select quantity"
                                    defaultValue={variant.quantity}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Current quantity
                                </span>
                            </div>

                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-4 text-sm font-normal text-kaiglo_grey-base capitalize"
                                    placeholder="Select price"
                                    defaultValue={variant.price.toLocaleString()}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Current price
                                </span>
                            </div>

                            <div className="">
                                <Input
                                    type="number"
                                    className="h-12 text-sm font-normal text-kaiglo_grey-placeholder capitalize"
                                    placeholder="Sales quantity"
                                />
                            </div>

                            <div className="">
                                <Input
                                    type="number"
                                    className="h-12 text-sm font-normal text-kaiglo_grey-placeholder capitalize"
                                    placeholder="Sales/Discount Price"
                                />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
export default ProductVariantsFields;
