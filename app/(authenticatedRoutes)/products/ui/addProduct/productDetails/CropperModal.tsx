"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useModalContext } from "@/app/contexts/modalContext";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { getCroppedImg } from "../../../lib/utils/addProduct.utils";

const CropperModal = ({
    uploadedFile,
    handleCrop,
}: {
    uploadedFile: string;
    handleCrop: (croppedImage: string) => void;
}) => {
    const { setModalContent, setShowModal } = useModalContext();
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedArea] = useState<Area>({ x: 0, y: 0, width: 0, height: 0 });

    const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
        setCroppedArea(croppedAreaPixels);
    }, []);

    return (
        <DialogContent className="min-w-full h-full lg:min-w-[80%] lg:w-[80%] md:h-[90%] lg:h-[90%] outline-none border-none gap-5 px-4 md:px-6 py-6 rounded-none sm:rounded-none">
            <DialogHeader className="hidden">
                <DialogTitle />
                <DialogDescription className="hidden" />
            </DialogHeader>

            <div className="flex flex-col gap-8">
                <div className="w-full h-full relative crop-container mt-12">
                    <Cropper
                        image={uploadedFile}
                        crop={crop}
                        aspect={1}
                        zoom={zoom}
                        rotation={rotation}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        restrictPosition={false}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex flex-col flex-1 gap-2 justify-center">
                            <p className="font-medium">Zoom: {zoom}x</p>
                            <Slider value={[zoom]} max={3} step={0.1} onValueChange={(v) => setZoom(v[0])} />
                        </div>

                        <div className="flex flex-col flex-1 gap-2 justify-center">
                            <p className="font-medium">Rotate: {rotation}&deg;</p>
                            <Slider
                                value={[rotation]}
                                min={0}
                                max={360}
                                step={1}
                                onValueChange={(v) => setRotation(v[0])}
                            />
                        </div>
                    </div>
                    <FormNavButtons
                        className="w-full justify-stretch lg:w-auto pt-0"
                        cancelButtonClassName="w-full"
                        submitButtonClassName="w-full"
                        cancelFunc={() => {
                            setModalContent(null);
                            setShowModal(false);
                        }}
                        submitButtonFunc={async () => {
                            try {
                                const croppedImage = await getCroppedImg(
                                    uploadedFile,
                                    croppedAreaPixels,
                                    rotation
                                );

                                if (croppedImage) handleCrop(croppedImage);
                            } catch (e) {
                                console.error(e);
                            }
                        }}
                        submitButtonType="button"
                        submitButtonText="Crop image"
                    />
                </div>
            </div>
        </DialogContent>
    );
};

export default CropperModal;
