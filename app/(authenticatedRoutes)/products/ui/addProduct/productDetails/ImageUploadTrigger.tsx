"use client";

import { IconUploadImage } from "@/public/icons/icons";
import Image from "next/image";
import { RefObject } from "react";

type Props = {
    isMultiple?: boolean;
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUploadTrigger = ({ isMultiple, fileInputRef, handleImageUpload }: Props) => {
    return (
        <div>
            <input
                type="file"
                multiple={isMultiple ?? false}
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
                <Image src={IconUploadImage} alt="upload icon" className="w-8 h-8" />
            </button>
        </div>
    );
};

export default ImageUploadTrigger;
