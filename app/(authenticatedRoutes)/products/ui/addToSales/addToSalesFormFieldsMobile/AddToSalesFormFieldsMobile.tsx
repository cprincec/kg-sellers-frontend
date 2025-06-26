import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IconCalendar2 } from "@/public/icons/icons";
import { IProductVariant, ProductVariant } from "../../../lib/interfaces/interface";
import ProductVariantsFields from "./ProductVariantsFields";

const AddToSalesFormFieldsMobile = ({
    productVariants,
}: {
    productVariants: IProductVariant[] | ProductVariant[];
}) => {
    return (
        <div className="grid lg:hidden gap-5 w-full">
            {/* Ongoing Sales */}
            <div className="grid gap-2">
                <p className="text-base font-medium text-kaiglo_grey-800">Ongoing Sales</p>
                <div className="flex justify-between font-medium text-base bg-kaiglo_grey-50 px-2 py-3 rounded-lg text-kaiglo_grey-placeholder border border-kaiglo_grey-200">
                    Black Friday <span className="text-sm font-normal">Nov 1 2024 - 28 Nov 2024</span>
                </div>
            </div>

            {/* Running Period */}
            <div className="grid gap-3 py-2">
                <p className="text-base font-medium text-kaiglo_grey-800">Select running period</p>
                <div className="grid gap-4">
                    <div className="relative">
                        <Input
                            type="text"
                            className="h-12 text-sm font-normal text-kaiglo_grey-placeholder"
                            placeholder="Start Date"
                            disabled
                        />
                        <Image
                            src={IconCalendar2}
                            alt="calendar icon"
                            className="absolute top-0 translate-y-1/2 right-3 w-6 h-6"
                        />
                    </div>

                    <div className="relative">
                        <Input
                            type="text"
                            className="h-12 text-sm font-normal text-kaiglo_grey-placeholder"
                            placeholder="End Date"
                            disabled
                        />
                        <Image
                            src={IconCalendar2}
                            alt="calendar icon"
                            className="absolute top-0 translate-y-1/2 right-3 w-6 h-6"
                        />
                    </div>
                </div>
            </div>

            {/* Variant Accordions */}
            <ProductVariantsFields productVariants={productVariants} />

            {/* Sales Quantity Disclaimer */}
            <div className="grid gap-2">
                <h5 className="text-xs font-medium">Sales Quantity:</h5>
                <p className="text-xs text-kaiglo_grey-600">
                    Feel free to utilize this field at your discretion to specify quantities for sales
                    mapping.
                </p>
            </div>
        </div>
    );
};

export default AddToSalesFormFieldsMobile;
