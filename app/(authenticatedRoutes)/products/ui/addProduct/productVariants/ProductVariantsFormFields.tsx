import { Control, FieldErrors } from "react-hook-form";
import { IProductVariantsFormValues } from "../../../lib/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Button } from "@/components/ui/button";
import ProductImageField from "../productDetails/ProductImageField";

const ProductVariantsFormFields = ({
    control,
    errors,
}: {
    control: Control<IProductVariantsFormValues>;
    errors: FieldErrors<IProductVariantsFormValues>;
}) => {
    return (
        <div className="grid lg:flex gap-4 w-full">
            <ProductImageField name="images" control={control} error={errors.images} />

            <div className="grid lg:grid-cols-2 gap-4 w-full">
                <div className="grid gap-2 lg:order-last lg:col-span-2">
                    <ControlledModifiedInput
                        label="Shipping weight"
                        name="shippingWeight"
                        control={control}
                        placeholder="Enter weight in k.g"
                        type="number"
                        error={errors.shippingWeight}
                        isRequired={true}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-sm"
                        labelDescription={
                            <Button
                                type="button"
                                variant={"ghost"}
                                className="hidden lg:flex lg:order-2 bg-transparent font-normal text-kaiglo_success-700 text-sm justify-self-start p-1 pl-0"
                            >
                                See weight guideline
                            </Button>
                        }
                        labelContainerClassName="flex items-baseline justify-between"
                        rules={{ required: true }}
                    />
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="lg:hidden lg:order-2 bg-transparent font-normal text-kaiglo_success-700 text-sm justify-self-start p-1 pl-0"
                    >
                        See weight guideline
                    </Button>
                </div>
                <ControlledModifiedInput
                    label="Color"
                    name="color"
                    control={control}
                    placeholder="Select color"
                    type="text"
                    error={errors.color}
                    isRequired={true}
                    className="text-sm md:text-sm mt-1"
                    labelClassNames="text-sm md:text-sm"
                    rules={{ required: true }}
                />
                <ControlledModifiedInput
                    label="Size"
                    name="size"
                    control={control}
                    placeholder="Select size"
                    type="text"
                    error={errors.size}
                    isRequired={false}
                    className="text-sm md:text-sm mt-1"
                    labelClassNames="text-sm md:text-sm"
                    rules={{ required: false }}
                />
                <ControlledModifiedInput
                    label="Quantity"
                    name="quantity"
                    control={control}
                    placeholder="Quantity"
                    type="text"
                    error={errors.shippingWeight}
                    isRequired={true}
                    className="text-sm md:text-sm mt-1"
                    labelClassNames="text-sm md:text-sm"
                    rules={{ required: true }}
                />
                <ControlledModifiedInput
                    label="Price"
                    name="price"
                    control={control}
                    placeholder="Price"
                    type="number"
                    error={errors.price}
                    isRequired={true}
                    className="text-sm md:text-sm mt-1"
                    labelClassNames="text-sm md:text-sm"
                    rules={{ required: true }}
                />
            </div>
        </div>
    );
};

export default ProductVariantsFormFields;
