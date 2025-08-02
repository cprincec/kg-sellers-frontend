"use client";

import { useModalContext } from "@/app/contexts/modalContext";
import { IconUploadImage } from "@/public/icons/icons";
import Image from "next/image";
import ImageOptionsModal from "./ImageOptionsModal";
import ToolTip from "@/app/(authenticatedRoutes)/ui/ToolTip";
import { useState } from "react";

const ProductVariantImageUploadTrigger = ({
    images,
    handleSelect,
    disabled = false,
}: {
    images: string[];
    handleSelect: (value: string) => void;
    disabled: boolean;
}) => {
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const [showTip, setShowTip] = useState(false);

    return (
        <div
            onMouseOver={() => {
                if (disabled) setShowTip(true);
            }}
            onTouchStart={() => {
                if (disabled) setShowTip(true);
            }}
            onMouseOut={() => {
                if (disabled) setShowTip(false);
            }}
            onTouchEnd={() => {
                if (disabled) setShowTip(false);
            }}
            className="relative w-max"
        >
            <button
                type="button"
                onClick={() => {
                    setModalContent(<ImageOptionsModal images={images} handleSelect={handleSelect} />);
                    setShowModal(true);
                    setOnClose(() => () => setShowModal(false));
                }}
                className="flex items-center justify-center w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] rounded-lg border border-dashed border-kaiglo_grey-disabled disabled:cursor-not-allowed"
                disabled={disabled}
            >
                <Image src={IconUploadImage} alt="upload icon" className="w-8 h-8" />
            </button>
            {showTip && (
                <ToolTip
                    showTip={showTip}
                    className="absolute  w-full h-full top-0 bottom-0 right-0"
                    tipClassName="max-w-[100px]"
                    info="Select a color before selecting an image"
                />
            )}
        </div>
    );
};

export default ProductVariantImageUploadTrigger;
