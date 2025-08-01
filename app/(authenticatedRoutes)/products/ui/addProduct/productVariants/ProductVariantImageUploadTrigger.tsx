"use client";

import { useModalContext } from "@/app/contexts/modalContext";
import { IconUploadImage } from "@/public/icons/icons";
import Image from "next/image";
import ImageOptionsModal from "./ImageOptionsModal";

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

    return (
        <div title={disabled ? "Select a color before selecting an image" : undefined}>
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
        </div>
    );
};

export default ProductVariantImageUploadTrigger;
