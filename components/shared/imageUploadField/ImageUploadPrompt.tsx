"use client";

import { Button } from "@/components/ui/button";
import { ImageGalleryIcon } from "./image-upload-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconUpload } from "@/public/icons/icons";

const ImageUploadPrompt = ({
    ShowMainVariant = true,
    inputFieldRef,
}: {
    ShowMainVariant?: boolean;
    inputFieldRef: React.RefObject<HTMLInputElement | null>;
}) => {
    const handleBrowseClick = () => {
        if (inputFieldRef.current) {
            inputFieldRef.current.click();
        }
    };
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="mb-4 flex flex-col gap-3 justify-center text-center">
                {ShowMainVariant ? (
                    <ImageGalleryIcon className="w-12 h-12 m-auto" />
                ) : (
                    <div className="mx-auto mb-1">
                        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-kaiglo_grey-200 shadow-[0px_0px_0px_6px_#F3F6FC]">
                            <Image
                                src={IconUpload}
                                alt="upload icon"
                                width={18}
                                height={18}
                                className="-mt-0.5 -mr-0.5 "
                            />
                        </div>
                    </div>
                )}
                {ShowMainVariant && <p className="text-sm font-normal">Drop file here to upload, or</p>}
                <Button
                    type="button"
                    variant="info"
                    className={cn(
                        "bg-transparent font-normal p-0 text-sm hover:bg-transparent",
                        !ShowMainVariant && "text-kaiglo_success-base text-base"
                    )}
                    onClick={() => handleBrowseClick()}
                >
                    {ShowMainVariant ? "Click to browse" : "Click to upload"}
                </Button>
                <p>PNG, JPEG, JPG (max. 2MB)</p>
            </div>
        </div>
    );
};
export default ImageUploadPrompt;
