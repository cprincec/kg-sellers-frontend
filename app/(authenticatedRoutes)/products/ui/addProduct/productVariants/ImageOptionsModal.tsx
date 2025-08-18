import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ImagePreviewCard from "../productDetails/ProductImagePreviewCard";

const ImageOptionsModal = ({
    images,
    handleSelect,
}: {
    images: string[];
    handleSelect: (value: string) => void;
}) => {
    return (
        <DialogContent className="w-[90%] md:min-w-[400px] m-auto outline-none gap-5 px-4 md:px-6 py-6 rounded-2xl">
            <DialogHeader className="flex-row space-y-0 gap-0">
                <DialogTitle className="text-xl text-kaiglo_grey-900 font-medium text-left">
                    Select an image for this variant
                </DialogTitle>
                <DialogDescription className="hidden" />
            </DialogHeader>
            <div className="flex flex-wrap gap-5 -mt-0 overflow-auto">
                {images.length ? (
                    images.map((url, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(url)}
                            className="border-2 border-transparent hover:border-2 hover:border-kaiglo_brand-base cursor-pointer rounded-xl"
                        >
                            <ImagePreviewCard
                                index={index}
                                previewUrl={url}
                                isMainImage={false}
                                isRemovable={false}
                            />
                        </div>
                    ))
                ) : (
                    <p>
                        No images have been added to this product. Navigate to the the previous page to add an
                        image.
                    </p>
                )}
            </div>
        </DialogContent>
    );
};

export default ImageOptionsModal;
