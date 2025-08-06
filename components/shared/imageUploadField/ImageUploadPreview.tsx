import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ControllerRenderProps } from "react-hook-form";

const ImageUploadPreview = ({
    field,
    name,
}: {
    field: ControllerRenderProps<IStoreDetailsDTO, keyof IStoreDetailsDTO>;
    name: keyof IStoreDetailsDTO;
}) => {
    if (!field.value) return null;

    return (
        <div className="relative h-full flex flex-col items-center gap-4">
            {/* Image Preview */}
            <div className="relative w-full h-full">
                <Image src={field.value} alt={name} fill className="rounded-lg object-cover" />
            </div>

            {/* Remove Image button */}
            <Button
                type="button"
                variant={"ghost"}
                className="z-50 absolute top-4 right-4 bg-transparent p-0 w-8 h-8"
                onClick={() => field.onChange("")}
            >
                <Trash2 className="min-w-full min-h-full text-white bg-kaiglo_critical-base p-1.5  rounded-full" />
            </Button>
            <div className="z-1 absolute top-0 bottom-0 right-0 left-0 bg-black rounded-lg opacity-50 flex items-center justify-center"></div>
        </div>
    );
};
export default ImageUploadPreview;
