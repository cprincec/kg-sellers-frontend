import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import ImageUploadInputField from "@/components/shared/imageUploadField/ImageUploadInputField";
import { Control, FieldErrors } from "react-hook-form";

const StoreDetailsFormImageFields = ({
    control,
    errors,
}: {
    control: Control<IStoreDetailsDTO>;
    errors: FieldErrors<IStoreDetailsDTO>;
}) => {
    return (
        <div className="py-4 grid lg:grid-cols-2 lg:items-baseline gap-6 lg:gap-8 lg:col-span-2 border-y border-kaiglo_grey-200">
            {/* Business logo */}
            <div>
                <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                    Business Logo<span className="text-kaiglo_critical-error font-medium">*</span>
                </p>
                <ImageUploadInputField
                    name="businessLogo"
                    control={control}
                    error={errors.businessLogo}
                    rules={{ required: true }}
                    ShowMainVariant={false}
                    height={600}
                    width={600}
                    isCroppable={true}
                />
            </div>

            {/* Banner */}
            <div>
                <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                    Store Banner
                </p>
                <ImageUploadInputField
                    name="storeBanner"
                    control={control}
                    error={errors.storeBanner}
                    rules={{ required: false }}
                    ShowMainVariant={false}
                    isCroppable={true}
                    width={1080}
                    height={320}
                />
            </div>
        </div>
    );
};

export default StoreDetailsFormImageFields;
