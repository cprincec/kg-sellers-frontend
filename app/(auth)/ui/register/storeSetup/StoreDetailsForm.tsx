import { IStoreDetailsFormDTO } from "@/app/(auth)/interface";
import { storeDetailsDefaultValues } from "@/app/(auth)/lib/validations/defaults";
import { storeDetailsSchema } from "@/app/(auth)/lib/validations/schemas";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import ImageUploadInputField from "../../../../../components/shared/imageUploadField/ImageUploadInputField";
import FormNavButtons from "@/app/wallet/ui/payoutThreshold/FormNavButtons";

const StoreDetailsForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsFormDTO>({
        defaultValues: storeDetailsDefaultValues,
        resolver: yupResolver(storeDetailsSchema) as Resolver<IStoreDetailsFormDTO>,
    });

    const saveStoreDetails = () => {
        // navigateToNextStep();s
    };

    return (
        <div>
            <h2 className="mb-4 text-sm md:text-base font-medium">STORE DETAILS</h2>
            <form onSubmit={handleSubmit(saveStoreDetails)} className="grid gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 ">
                    {/* Store Name */}
                    <ControlledModifiedInput
                        label="Business name"
                        name="storeName"
                        control={control}
                        placeholder="Enter Business name"
                        type="text"
                        error={errors.storeName}
                        isRequired={true}
                        className=""
                        rules={{ required: true }}
                        data-testid="storeName"
                    />

                    {/* Email */}
                    <ControlledModifiedInput
                        label="Email"
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        placeholder="example@gmail.com"
                        type="email"
                        error={errors.email}
                        isRequired={true}
                        data-testid="email"
                    />

                    {/* Phone */}
                    <div className="relative">
                        <ControlledModifiedInput
                            label="Phone number"
                            name="phone"
                            control={control}
                            rules={{ required: true }}
                            placeholder="08097485832"
                            type="tel"
                            error={errors.phone}
                            isRequired={true}
                            data-testid="phone"
                        />
                    </div>

                    {/* Address */}
                    <ControlledModifiedInput
                        label="Business address"
                        name="address"
                        control={control}
                        placeholder="3, Ladipo Kuku Street, Ikeja, Lagos"
                        type="text"
                        error={errors.address}
                        isRequired={true}
                        className=""
                        containerClassName=""
                        rules={{ required: true }}
                        data-testid="address"
                    />

                    <div className="py-4 grid lg:grid-cols-2 lg:items-baseline gap-6 lg:gap-8 lg:col-span-2 border-y border-kaiglo_grey-200">
                        {/* Business logo */}
                        <div>
                            <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                                Business Logo<span className="text-kaiglo_critical-error font-medium">*</span>
                            </p>
                            <ImageUploadInputField
                                name="logo"
                                control={control}
                                error={errors.logo}
                                rules={{ required: true }}
                                ShowMainVariant={false}
                            />
                        </div>

                        {/* Banner */}
                        <div>
                            <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                                Store Banner<span className="text-kaiglo_critical-error font-medium">*</span>
                            </p>
                            <ImageUploadInputField
                                name="banner"
                                control={control}
                                error={errors.banner}
                                rules={{ required: false }}
                                ShowMainVariant={false}
                            />
                        </div>
                    </div>
                </div>

                <FormNavButtons
                    cancelFunc={() => console.log("Store details changes cancelled")}
                    submitButtonText={"Save Changes"}
                />
            </form>
        </div>
    );
};

export default StoreDetailsForm;
