import { IStoreDetailsFormDTO } from "@/app/(auth)/interface";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ControllerRenderProps } from "react-hook-form";

const ImageUploadPreview = ({
    field,
    name,
}: {
    field: ControllerRenderProps<IStoreDetailsFormDTO, keyof IStoreDetailsFormDTO>;
    name: keyof IStoreDetailsFormDTO;
}) => {
    if (!field.value || !(field.value instanceof Blob)) return null;
    return (
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
                type="button"
                variant={"ghost"}
                className="z-50 absolute top-4 right-4 bg-transparent p-0 w-8 h-8"
                onClick={() => field.onChange(null)}
            >
                <Trash2 className="min-w-full min-h-full text-white bg-kaiglo_critical-base p-1.5  rounded-full" />
            </Button>
            <div className="z-1 absolute top-0 bottom-0 right-0 left-0 bg-black rounded-lg opacity-50 flex items-center justify-center"></div>
        </div>
    );
};
export default ImageUploadPreview;
