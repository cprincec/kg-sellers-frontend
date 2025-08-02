import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { IAddToSalesDTO, IProductVariantDTO } from "../../../lib/interfaces/interface";

const VariantsMobile = ({
    touchedFields,
    formState,
    productVariants,
    handleChange,
}: {
    touchedFields: boolean[];
    formState: IAddToSalesDTO[];
    productVariants: IProductVariantDTO[];
    handleChange: (index: number, value: number) => void;
}) => {
    return (
        <div className="grid gap-3">
            <Accordion type="multiple" className="w-full grid gap-3">
                {productVariants.map((variant, i) => (
                    <AccordionItem
                        key={`variant-${i + 1}`}
                        value={`variant-${i + 1}`}
                        className="grid gap-3 border-none rounded-lg"
                    >
                        <AccordionTrigger className="text-sm font-medium px-2 py-3 text-kaiglo_grey-900 border border-kaiglo_grey-disabled rounded-lg">
                            Variant {i + 1}
                        </AccordionTrigger>
                        <AccordionContent className="grid gap-3 p-2">
                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-5 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled disabled:opacity-100"
                                    placeholder="Select colour"
                                    value={variant.productColor.color.color}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Colour
                                </span>
                            </div>

                            {variant.productColor.productPriceDetails[0].size && (
                                <div className="relative">
                                    <Input
                                        type="text"
                                        className="h-12 pt-5 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled disabled:opacity-100"
                                        placeholder="Select Size"
                                        value={variant.productColor.productPriceDetails[0].size}
                                        disabled
                                    />
                                    <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                        Size
                                    </span>
                                </div>
                            )}

                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-5 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled disabled:opacity-100"
                                    placeholder="Select quantity"
                                    value={variant.productColor.productPriceDetails[0].quantity}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Current quantity
                                </span>
                            </div>

                            <div className="relative">
                                <Input
                                    type="text"
                                    className="h-12 pt-5 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled disabled:opacity-100"
                                    placeholder="Select price"
                                    value={variant.productColor.productPriceDetails[0].price.toLocaleString()}
                                    disabled
                                />
                                <span className="absolute top-0 left-[13px] translate-y-2.5 font-light text-[10px] leading-[12px] text-kaiglo_grey-placeholder">
                                    Current price
                                </span>
                            </div>

                            <Input
                                type="number"
                                className="h-12 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled disabled:opacity-100"
                                placeholder="Sales quantity"
                                value={variant.productColor.productPriceDetails[0].quantity}
                                disabled
                            />

                            <Input
                                type="number"
                                className="h-12 text-sm font-normal text-kaiglo_grey-base capitalize border-kaiglo_grey-disabled"
                                placeholder="Sales/Discount Price"
                                defaultValue={
                                    touchedFields[i]
                                        ? formState[i]?.productPriceDetail[0]?.newPrice ?? ""
                                        : ""
                                }
                                onChange={(e) => handleChange(i, Number(e.target.value))}
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default VariantsMobile;

// defaultValue={
//     formState.find((_, indx) => indx === i)?.productPriceDetail[0].newPrice ??
//     undefined
// }
