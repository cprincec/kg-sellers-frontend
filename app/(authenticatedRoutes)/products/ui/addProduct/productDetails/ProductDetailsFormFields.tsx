import { Control, FieldErrors } from "react-hook-form";
import { IProductDetailsFormValues } from "../../../lib/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import ControlledModifiedTextArea from "@/components/controlledElements/ControlledModifiedTextArea";
import ProductImageField from "./ProductImageField";
import { Label } from "@/components/ui/label";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";

const ProductDetailsFormFields = ({
    control,
    errors,
}: {
    control: Control<IProductDetailsFormValues>;
    errors: FieldErrors<IProductDetailsFormValues>;
}) => {
    return (
        <div className="grid gap-4">
            <div className="grid gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <h3 className="text-sm md:text-base font-medium">PRODUCT IMAGE</h3>
                    <p className="text-sm">
                        Image must not exceed 700kb and 600 x 600px (size).
                        <span className="text-kaiglo_critical-base"> Upload at least 3 images</span>
                    </p>
                </div>
                <ProductImageField name="images" control={control} error={errors.images} />
            </div>

            <div className="lg:px-6 lg:pt-4 pb-6 border-b">
                <ControlledModifiedInput
                    label="PRODUCT NAME"
                    name="name"
                    control={control}
                    placeholder="Enter product name"
                    type="text"
                    error={errors.name}
                    isRequired={true}
                    className="text-base md:text-sm mt-1"
                    labelClassNames="text-sm md:text-base font-medium"
                    rules={{ required: true }}
                />
            </div>
            <div className="grid gap-3 md:gap-4 lg:px-6 lg:pt-4 pb-6 border-b">
                <h3 className="flex gap-3 items-center stext-sm md:text-base font-medium">
                    PRODUCT SPECIFICATIONS <ToolTip info="Product specifications tip" />
                </h3>
                <div className="grid lg:grid-cols-2 gap-3 md:gap-4">
                    <ControlledModifiedInput
                        label="Specification 1"
                        name="specification1"
                        control={control}
                        placeholder="Spec 1"
                        type="text"
                        error={errors.specification1}
                        isRequired={true}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-base"
                        containerClassName=""
                        rules={{ required: true }}
                    />

                    <ControlledModifiedInput
                        label="Specification 2"
                        name="specification2"
                        control={control}
                        placeholder="Spec 2"
                        type="text"
                        error={errors.specification2}
                        isRequired={false}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-base"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                    <ControlledModifiedInput
                        label="Specification 3"
                        name="specification3"
                        control={control}
                        placeholder="Spec 3"
                        type="text"
                        error={errors.specification3}
                        isRequired={false}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-base"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                    <ControlledModifiedInput
                        label="Specification 4"
                        name="specification4"
                        control={control}
                        placeholder="Spec 4"
                        type="text"
                        error={errors.specification4}
                        isRequired={false}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-base"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                    <ControlledModifiedInput
                        label="Specification 5"
                        name="specification5"
                        control={control}
                        placeholder="Spec 5"
                        type="text"
                        error={errors.specification5}
                        isRequired={false}
                        className="text-sm md:text-sm mt-1"
                        labelClassNames="text-sm md:text-base"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                </div>
            </div>

            <div className="grid gap-3 lg:px-6 lg:pt-4 pb-6 border-b">
                <div className="grid gap-2">
                    <Label className="flex gap-3 items-center text-sm md:text-base font-medium text-kaiglo_grey-900">
                        PRODUCT DESCRIPTION
                        <ToolTip info="Product description tip" />
                    </Label>
                    <ControlledModifiedTextArea
                        label="Adding a product description helps potential buyers understand the features, and unique
                     qualities of your product."
                        name="description"
                        control={control}
                        placeholder="Product Details"
                        error={errors.description}
                        isRequired={false}
                        className="text-base"
                        rows={10}
                        labelClassNames="text-sm font-medium text-kaiglo_grey-600 mb-4"
                        rules={{ required: false }}
                    />
                </div>
            </div>
            <div>
                <div className="grid gap-2 lg:px-6 lg:pt-4 pb-6 ">
                    <Label className="text-sm md:text-base font-medium text-kaiglo_grey-900">
                        PRODUCT DESCRIPTION SUMMARY
                    </Label>
                    <ControlledModifiedInput
                        label="Adding SEO to your product listings helps increase visibility in search engines, driving more organic traffic to your store"
                        name="seo"
                        control={control}
                        placeholder="Product Description Summary"
                        type="text"
                        error={errors.seo}
                        isRequired={false}
                        className="text-sm md:text-sm mt-4"
                        labelClassNames="text-sm font-medium text-kaiglo_grey-600"
                        containerClassName=""
                        rules={{ required: false }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsFormFields;
