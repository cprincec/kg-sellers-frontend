"use client";

import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import { useRef } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import ImageUploadPrompt from "./ImageUploadPrompt";
import ImageUploadPreview from "./ImageUploadPreview";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/utils";
import { convertToBase64 } from "@/app/(authenticatedRoutes)/products/lib/utils/addProduct.utils";

const ImageUploadInputField = ({
    name,
    control,
    rules,
    error,
    ShowMainVariant,
}: {
    ShowMainVariant?: boolean;
    name: keyof IStoreDetailsDTO;
    control: Control<IStoreDetailsDTO>;
    rules: { required?: boolean };
    error: FieldError | undefined;
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        onChange: (value: string) => void
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            // update file input
            const base64file = await convertToBase64(file);
            onChange(base64file);
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <div>
                    <div
                        className={cn(
                            "relative h-[210px] w-full p-2 border border-dashed  rounded-xl",
                            ShowMainVariant ? "border-kaiglo_success-base" : "border-kaiglo_grey-300"
                        )}
                    >
                        {field.value ? (
                            <ImageUploadPreview field={field} name={name} />
                        ) : (
                            <ImageUploadPrompt
                                ShowMainVariant={ShowMainVariant}
                                inputFieldRef={fileInputRef}
                            />
                        )}

                        {/* Hidden file input */}
                        <Input
                            id={name}
                            name={name}
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, field.onChange)}
                            className="hidden"
                            aria-hidden
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-left mt-1 font-light text-kaiglo_critical-base">
                            {error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};
export default ImageUploadInputField;
