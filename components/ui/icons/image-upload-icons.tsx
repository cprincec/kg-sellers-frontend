import { Controller } from "react-hook-form";
import { Button } from "../button";
import Image from "next/image";
import { useRef } from "react";
import { Input } from "../input";
import { Trash2 } from "lucide-react";

export const ImageGalleryIcon = ({
    strokeColor = "#151716",
    className,
}: {
    strokeColor?: string;
    className: string;
}) => {
    return (
        <svg className={className} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M35.6063 33.39C35.7574 32.8588 36.3106 32.5507 36.8418 32.7019C37.373 32.853 37.6811 33.4062 37.5299 33.9374C37.0439 35.6455 35.6862 36.9842 33.9319 37.4228L17.6769 41.4864C14.9292 42.1213 12.2338 40.4602 11.6097 37.7558L7.40887 19.5522C6.79591 16.896 8.42355 14.2383 11.0682 13.5772L14.8462 12.6327C15.382 12.4987 15.9249 12.8245 16.0589 13.3603C16.1928 13.8961 15.8671 14.439 15.3313 14.573L11.5532 15.5175C9.96646 15.9142 8.98988 17.5088 9.35766 19.1025L13.5585 37.3061C13.9329 38.9286 15.55 39.9252 17.2093 39.5419L33.4468 35.4825C34.5002 35.2192 35.3142 34.4165 35.6063 33.39ZM40.5 27.0858V11.5C40.5 9.84315 39.1569 8.5 37.5 8.5H19.5C17.8432 8.5 16.5 9.84315 16.5 11.5V23.0858L20.7929 18.7929C21.1834 18.4024 21.8166 18.4024 22.2071 18.7929L29.6275 26.2132L34.9453 22.6679C35.342 22.4035 35.8701 22.4558 36.2071 22.7929L40.5 27.0858ZM40.475 29.8892L35.3726 24.7868L30.0547 28.3321C29.6581 28.5965 29.13 28.5442 28.7929 28.2071L21.5 20.9142L16.5 25.9142V29.5C16.5 31.1569 17.8432 32.5 19.5 32.5H37.5C39.025 32.5 40.2842 31.3622 40.475 29.8892ZM19.5 6.5H37.5C40.2615 6.5 42.5 8.73858 42.5 11.5V29.5C42.5 32.2614 40.2615 34.5 37.5 34.5H19.5C16.7386 34.5 14.5 32.2614 14.5 29.5V11.5C14.5 8.73858 16.7386 6.5 19.5 6.5ZM32.5 10.5H36.5C37.6046 10.5 38.5 11.3954 38.5 12.5V16.5C38.5 17.6046 37.6046 18.5 36.5 18.5H32.5C31.3955 18.5 30.5 17.6046 30.5 16.5V12.5C30.5 11.3954 31.3955 10.5 32.5 10.5ZM32.5 12.5V16.5H36.5V12.5H32.5Z"
                fill={strokeColor}
            />
        </svg>
    );
};

// @ts-expect-error to be changed
export const ImageUploadInput = ({ name, control, rules, error }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleBrowseClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        onChange: (value: File | null) => void
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            // update input
            onChange(file);
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <div>
                    <div className="h-[210px] w-full p-2 border border-dashed border-kaiglo_success-base rounded-xl">
                        {field.value ? (
                            <div className="relative h-full flex flex-col items-center gap-4">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={URL.createObjectURL(field.value)}
                                        alt={name}
                                        fill
                                        className="rounded-lg object-fill"
                                    />
                                </div>
                                <Button
                                    variant={"ghost"}
                                    className="z-50 absolute top-4 right-4 bg-transparent p-0 w-8 h-8"
                                    onClick={() => field.onChange("")}
                                >
                                    <Trash2 className="min-w-full min-h-full text-white bg-kaiglo_critical-base p-1.5  rounded-full" />
                                </Button>
                                <div className="z-1 absolute top-0 bottom-0 right-0 left-0 bg-black rounded-lg opacity-50 flex items-center justify-center"></div>
                                <Button
                                    type="button"
                                    variant="info"
                                    className="bg-transparent underline z-1 absolute top-0 bottom-0 right-0 left-0 p-0 text-sm text-white hover:bg-transparent"
                                    onClick={handleBrowseClick}
                                >
                                    Click to browse
                                </Button>
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="mb-4 flex flex-col justify-center">
                                    <ImageGalleryIcon className="w-12 h-12 mx-auto" />
                                    <p className="text-sm font-normal">Drop file here to upload, or</p>
                                    <Button
                                        type="button"
                                        variant="info"
                                        className="bg-transparent p-0 text-sm hover:bg-transparent"
                                        onClick={handleBrowseClick}
                                    >
                                        Click to browse
                                    </Button>
                                </div>
                            </div>
                        )}
                        {/* Hidden file input */}
                        <Input
                            id={name}
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, field.onChange)}
                            className="hidden"
                            required={rules.required}
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
