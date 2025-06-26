// Convert image from 'File' to Base64 string
export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export const validateImageDimensions = (
    file: File,
    maxWidth: number,
    maxHeight: number
): Promise<boolean> => {
    return new Promise((resolve) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            if (!e.target?.result) return resolve(false);
            img.src = e.target.result as string;
        };

        img.onload = () => {
            const isValid = img.width <= maxWidth && img.height <= maxHeight;
            resolve(isValid);
        };

        img.onerror = () => resolve(false);

        reader.readAsDataURL(file);
    });
};

// Upload product image
// Validation added
import {
    FieldValues,
    Path,
    PathValue,
    UseFormSetValue,
    UseFormSetError,
    UseFormClearErrors,
} from "react-hook-form";

type HandleUploadParams<T extends FieldValues> = {
    e: React.ChangeEvent<HTMLInputElement>;
    mainImageKey: Path<T>;
    otherImagesKey?: Path<T>;
    mainImageValue: string;
    otherImagesValue: string[];
    setValue: UseFormSetValue<T>;
    setError: UseFormSetError<T>;
    clearErrors: UseFormClearErrors<T>;
};

export async function handleProductImageUpload<T extends FieldValues>({
    e,
    mainImageKey,
    otherImagesKey,
    mainImageValue,
    otherImagesValue,
    setValue,
    setError,
    clearErrors,
}: HandleUploadParams<T>) {
    const files = e.target.files;
    if (!files || files.length < 1) return;

    const newImagesArray = Array.from(files);

    const MAX_FILE_SIZE = 700 * 1024; // 700KB
    const MAX_WIDTH = 600;
    const MAX_HEIGHT = 600;

    const validBase64Images: string[] = [];
    const errorMessages: string[] = [];

    for (const file of newImagesArray) {
        if (file.size > MAX_FILE_SIZE) {
            errorMessages.push(`${file.name} exceeds 700KB.`);
            continue;
        }

        const isValid = await validateImageDimensions(file, MAX_WIDTH, MAX_HEIGHT);
        if (!isValid) {
            errorMessages.push(`${file.name} exceeds 600x600px.`);
            continue;
        }

        const base64 = await convertToBase64(file);
        validBase64Images.push(base64);
    }

    if (errorMessages.length > 0) {
        setError(mainImageKey, {
            message: errorMessages.join("\n\n"),
        });
        return;
    }

    clearErrors(mainImageKey);
    if (otherImagesKey) clearErrors(otherImagesKey);

    // Convert all files to base64 in parallel
    // Already done above during validation

    // If a main image has been added, add the new uploaded images as 'other images'
    if (mainImageValue && otherImagesKey) {
        setValue(otherImagesKey, [...otherImagesValue, ...validBase64Images] as PathValue<
            T,
            typeof otherImagesKey
        >);
    } else {
        // Assign main image
        setValue(mainImageKey, validBase64Images[0] as PathValue<T, typeof mainImageKey>);

        if (otherImagesKey && validBase64Images.length > 1) {
            // add the newly upload images as 'other images' starting from the second image uploaded
            // because the first image has been added as 'main image'
            setValue(otherImagesKey, [...otherImagesValue, ...validBase64Images.slice(1)] as PathValue<
                T,
                typeof otherImagesKey
            >);
        }
    }
}
