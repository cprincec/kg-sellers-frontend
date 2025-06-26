// import { IStoreDetailsFormDTO } from "@/app/(auth)/lib/interfaces/interface";
// import ImageUploadInputField from "@/components/shared/imageUploadField/ImageUploadInputField";
// import { Control, FieldErrors } from "react-hook-form";

// const StoreDetailsFormImageFields = ({
//     control,
//     errors,
// }: {
//     control: Control<IStoreDetailsFormDTO>;
//     errors: FieldErrors<IStoreDetailsFormDTO>;
// }) => {
//     return (
//         <div className="py-4 grid lg:grid-cols-2 lg:items-baseline gap-6 lg:gap-8 lg:col-span-2 border-y border-kaiglo_grey-200">
//             {/* Business logo */}
//             <div>
//                 <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
//                     Business Logo<span className="text-kaiglo_critical-error font-medium">*</span>
//                 </p>
//                 <ImageUploadInputField
//                     name="logo"
//                     control={control}
//                     error={errors.logo}
//                     rules={{ required: true }}
//                     ShowMainVariant={false}
//                 />
//             </div>

//             {/* Banner */}
//             <div>
//                 <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
//                     Store Banner<span className="text-kaiglo_critical-error font-medium">*</span>
//                 </p>
//                 <ImageUploadInputField
//                     name="banner"
//                     control={control}
//                     error={errors.banner}
//                     rules={{ required: false }}
//                     ShowMainVariant={false}
//                 />
//             </div>
//         </div>
//     );
// };

// export default StoreDetailsFormImageFields;
