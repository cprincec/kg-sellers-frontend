// import { ControlledModifiedSelectProps } from "@/interfaces/controlledElements.interface";
// import { Controller, FieldValues } from "react-hook-form";
// import { useCallback } from "react";
// // import ModifiedMultiSelect from "../shared/ModifiedSelect";

// const ControlledModifiedSelect = <TFormValue extends FieldValues>({
//     name,
//     placeholder,
//     control,
//     rules,
//     error,
//     options,
//     required,
// }: ControlledModifiedSelectProps<TFormValue>) => {
//     const renderSelect = useCallback(
//         ({ field }) => (
//             <div>
//                 {/* <ModifiedMultiSelect
//                     options={options}
//                     selectedValue={field.value}
//                     onChange={field.onChange}
//                     placeholder={placeholder}
//                     required={required}
//                 /> */}
//                 {error && (
//                     <p className="text-sm mt-1 font-light text-kaiglo_critical-base">{error.message}</p>
//                 )}
//             </div>
//         ),
//         [options, placeholder, required, error]
//     );

//     return (
//         <div>
//             <Controller name={name} control={control} rules={rules} render={renderSelect} />
//         </div>
//     );
// };
// export default ControlledModifiedSelect;

// // const ControlledModifiedSelect = <TFormValue extends FieldValues>({
// //   name,
// //   placeholder,
// //   control,
// //   rules,
// //   error,
// //   options,
// //   onChange,
// //   required,
// // }: ControlledModifiedSelectProps<TFormValue>) => {
// //   const renderSelect = useCallback(
// //     ({ field }: { field: any }) => (
// //       <div>
// //         <ModifiedSelect
// //           options={options}
// //           selectedValue={field.value}
// //           onChange={field.onChange}
// //           placeholder={placeholder}
// //           required={required}
// //         />
// //         {error && (
// //           <p className="text-[10px] mt-1 font-light text-kaiglo_critical-base">
// //             {error.message}
// //           </p>
// //         )}
// //       </div>
// //     ),
// //     [options, placeholder, required, error],
// //   );

// //   return (
// //     <div>
// //       <Controller
// //         name={name}
// //         control={control}
// //         rules={rules}
// //         render={renderSelect}
// //       />
// //     </div>
// //   );
// // };
// // export default ControlledModifiedSelect;
