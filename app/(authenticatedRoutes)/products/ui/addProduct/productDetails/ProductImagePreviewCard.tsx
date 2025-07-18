"use client";

import Image from "next/image";

type Props = {
    index: number;
    previewUrl: string;
    isMainImage: boolean;
    // making isMainImage and index optional allows me to reuse this component function
    handleRemoveImage?: (isMainImage?: boolean, index?: number) => void;
    isRemovable?: boolean;
};

const ImagePreviewCard = ({
    index,
    previewUrl,
    isMainImage,
    handleRemoveImage,
    isRemovable = true,
}: Props) => {
    return (
        <div className="relative w-[90px] lg:w-[120px] h-[90px] lg:h-[120px]">
            {/* Image preview */}
            <Image
                src={previewUrl}
                alt={`Product ${index}`}
                width={120}
                height={120}
                loading="eager"
                priority
                className="rounded-xl border border-dashed border-kaiglo_grey-disabled w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] object-cover"
            />

            {/* Main image overlay */}
            {isMainImage && (
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-[90px] lg:h-[120px] flex justify-center bg-[#00000033] rounded-xl">
                    <p className="text-xs text-center absolute bottom-1.5">
                        <span className="text-xs font-medium text-kaiglo_grey-900 px-2 py-1 bg-white rounded-lg">
                            Main Image
                        </span>
                    </p>
                </div>
            )}

            {/* Button to remove image */}
            {isRemovable && (
                <button
                    type="button"
                    onClick={() => handleRemoveImage && handleRemoveImage(isMainImage, index)}
                    className="w-[20px] h-[20px] flex items-center justify-center p-1 m-0.5 absolute top-0 right-0 bg-kaiglo_critical-600 text-white text-xs px-1 rounded-full"
                >
                    <span className="font-bold text-[10px] ml-[0.3px]">✕</span>
                </button>
            )}
        </div>
    );
};

export default ImagePreviewCard;
