import { Control, Controller, FieldError, FieldValues, Merge, Path } from "react-hook-form";
import { useRef } from "react";
import Image from "next/image";
import { IconUploadImage } from "@/public/icons/icons";

type Props<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

const ProductImageField = <T extends FieldValues>({ name, control, error }: Props<T>) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const images: File[] = field.value;

                const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
                    console.log("handler: ", event);
                    const files = event.target.files;
                    if (!files) return;

                    const selectedFiles = Array.from(files);
                    const updated = [...images, ...selectedFiles];

                    field.onChange(updated);
                };

                const removeImage = (indexToRemove: number) => {
                    const updated = images.filter((_, index) => index !== indexToRemove);
                    field.onChange(updated);
                };

                return (
                    <div className="grid gap-4 w-auto">
                        <div className="flex gap-4 w-fit flex-wrap">
                            {images.map((file: File, index: number) => {
                                const previewUrl = URL.createObjectURL(file);
                                const isMainImage = index === 0;
                                return (
                                    <div key={index} className="relative">
                                        <Image
                                            src={previewUrl}
                                            alt={`Product ${index}`}
                                            width={120}
                                            height={120}
                                            className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] object-cover"
                                        />
                                        {isMainImage && (
                                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[90px] lg:h-[120px] flex justify-center bg-[#00000033] rounded-xl">
                                                <p className="text-xs text-center absolute bottom-1.5">
                                                    <span className="text-xs font-medium text-kaiglo_grey-900 px-2 py-1 bg-white rounded-lg">
                                                        Main Image
                                                    </span>
                                                </p>
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="w-[20px] h-[20px] flex items-center justify-center p-1 m-0.5 absolute top-0 right-0 bg-kaiglo_critical-600 text-white text-xs px-1 rounded-full"
                                        >
                                            <span className="font-bold text-[10px] ml-[0.3px]">✕</span>
                                        </button>
                                    </div>
                                );
                            })}
                            <div>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    hidden
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="flex items-center justify-center w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] rounded-lg border border-dashed border-kaiglo_grey-disabled"
                                >
                                    <Image
                                        src={IconUploadImage}
                                        alt="upload image icon"
                                        className="w-8 h-8"
                                    />
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-sm text-left mt-1 font-light text-kaiglo_critical-base">
                                {error.message}
                            </p>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default ProductImageField;
