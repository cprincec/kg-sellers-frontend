import {
    FieldValues,
    Path,
    PathValue,
    UseFormSetValue,
    UseFormSetError,
    UseFormClearErrors,
} from "react-hook-form";
import {
    IAddToSalesDTO,
    IEditProductVariant,
    IProduct,
    IProductCategory,
    IProductCategoryDTO,
    IProductDetailsDTO,
    IProductMeta,
    IProductSubCategory,
    IProductVariantDTO,
    ProductVariantFormErrors,
    ProductVariantFormInterface,
} from "../interfaces/interface";
import { PRODUCT_CATEGORY_KEYS } from "../constants";
import { productCategoryFormDefaultValues, productVariantsFormDefaultValues } from "../defaults";
import { showErrorToast } from "@/app/lib/utils/utils";
import { Dispatch, SetStateAction } from "react";
import { Area } from "react-easy-crop";

/**************************************************************
 * Generate product category DTO from product draft
 * Product draft contains properties like:
 * category, subCatgory, secondSubCategory, thirdSubCategory,
 * fourthSubCategory, and fifthSubCategory
 * ********************************************************/
export const generateProductCategoryDTO = (product: IProduct): IProductCategoryDTO => {
    const productCategoryObj: IProductCategoryDTO = { ...productCategoryFormDefaultValues };

    PRODUCT_CATEGORY_KEYS.forEach((key) => {
        productCategoryObj[key] = product[key] ?? "";
    });

    return productCategoryObj;
};

/**************************************************************
 * Generate product details DTO from product draft
 * Product draft contains the product main image and other images,
 * specifications, seo etc.
 * the product description is gotten from a seperate endpoint
 * ********************************************************/
export const generateProductDetailsDTO = (
    productRaw: IProduct,
    productDescription: string
): IProductDetailsDTO => {
    const { name, productUrl, specifications, seo } = productRaw;

    // Extract each non-mainImage (ie other images) from product draft
    const otherImages =
        productRaw.productViews && productRaw.productViews.length
            ? productRaw.productViews.map((v) => v.productUrl)
            : [];

    return {
        productName: name,
        mainImage: productUrl,
        otherImages,
        description: productDescription,
        specifications: specifications,
        seo: seo ?? "",
    };
};

/**************************************************************
 * Generate product variant DTOs from product draft
 * this function will return an object that contains
 * all data that forms a variant that is contained in the
 * product draft. The function will return a list of all
 * variants available in the draft
 * ***********************************************************/
export const generateProductVariantDTOs = (productRaw: IProduct): IProductVariantDTO[] => {
    if (!productRaw.productColors || !productRaw.productColors.length) return [];

    const variants: IProductVariantDTO[] = [];
    for (const variant of productRaw.productColors) {
        variants.push({
            productColor: {
                color: {
                    color: variant.color.color,
                    colorCode: variant.color.colorCode,
                },
                colorUrl: variant.colorUrl,

                productPriceDetails: [
                    {
                        attributes: variant.productPriceDetails[0].attributes,
                        price: variant.productPriceDetails[0].price,
                        quantity: variant.productPriceDetails[0].quantity,
                        newPrice: variant.productPriceDetails[0].newPrice,
                        id: variant.productPriceDetails[0].id,
                        discount: variant.productPriceDetails[0].discount,
                        ramSize: variant.productPriceDetails[0].ramSize,
                        size: variant.productPriceDetails[0].size,
                        sku: variant.productPriceDetails[0].sku,
                        stockLevel: variant.productPriceDetails[0].stockLevel,
                        storage: variant.productPriceDetails[0].storage,
                        isPaused: variant.productPriceDetails[0].isPaused,
                    },
                ],
            },
            productId: productRaw.id,
            productView: {
                colorCode: variant.color.colorCode,
                productUrl: variant.colorUrl,
            },
            weightInKG: productRaw.weightInKG,
        });
    }

    return variants;
};

export const generateProductVariantFormDefaults = (
    product: IProduct,
    variantId: string
): ProductVariantFormInterface => {
    if (!product.productColors?.length) return { ...productVariantsFormDefaultValues };

    const variant = product.productColors.find((v) => v.productPriceDetails[0].id === variantId);
    if (!variant) return productVariantsFormDefaultValues;

    return {
        productUrl: variant.colorUrl,
        attributes: variant.productPriceDetails[0].attributes,
    };
};

export const validateProductVariantForm = (
    formData: ProductVariantFormInterface,
    setFormErrors: Dispatch<SetStateAction<ProductVariantFormErrors>>
): boolean => {
    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());
    const color = formData.attributes[findFieldIndex("color")].value;
    const quantity = formData.attributes[findFieldIndex("quantity")].value;
    const price = formData.attributes[findFieldIndex("price")].value;

    if (!formData.productUrl)
        setFormErrors((prev) => ({ ...prev, productUrl: "Please select an image for this variant" }));
    if (!color) setFormErrors((prev) => ({ ...prev, color: "Colour is required" }));
    if (!quantity) setFormErrors((prev) => ({ ...prev, quantity: "Quantity is required" }));
    if (!price) setFormErrors((prev) => ({ ...prev, price: "Price is required" }));

    return !!formData.productUrl && !!color && !!quantity && !!price;
};

// This function contructs the payload for creating a new product variant
export const generateProductVariantDTOFromFormData = (
    productId: string,
    formData: ProductVariantFormInterface,
    productMeta: IProductMeta
): IProductVariantDTO | null => {
    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());
    const price = Number(formData.attributes[findFieldIndex("price")].value);
    const quantity = formData.attributes[findFieldIndex("quantity")].value;
    const colorCode = formData.attributes[findFieldIndex("color")].value;
    const color = productMeta?.productColorCode.find((colorObj) => colorObj.colorCode === colorCode)?.color;
    const size = formData.attributes[findFieldIndex("size")]?.value;

    if (!color) {
        showErrorToast({
            title: "Invalid product variant colour",
            description: "Please select a variant colour",
        });

        return null;
    }

    return {
        productColor: {
            color: {
                color,
                colorCode,
            },
            colorUrl: formData.productUrl,

            productPriceDetails: [
                {
                    attributes: formData.attributes,
                    price,
                    quantity,
                    size: size ?? "",
                },
            ],
        },
        productId,
        productView: {
            productUrl: formData.productUrl,
            colorCode,
        },
    };
};

// This function contructs the payload for editing product variant
export const generateProductVariantEditDTOFromFormData = (
    productId: string,
    variantId: string,
    formData: ProductVariantFormInterface,
    productMeta: IProductMeta
): IEditProductVariant | null => {
    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());
    const price = Number(formData.attributes[findFieldIndex("price")]?.value);
    const quantity = formData.attributes[findFieldIndex("quantity")]?.value;
    const colorCode = formData.attributes[findFieldIndex("color")]?.value;
    const color = productMeta.productColorCode.find((colorObj) => colorObj.colorCode === colorCode)?.color;
    const size = formData.attributes[findFieldIndex("size")]?.value;

    if (!color) {
        showErrorToast({
            title: "Invalid product variant colour",
            description: "Please select a variant colour",
        });

        return null;
    }

    return {
        coloUrl: formData.productUrl,
        productId,
        productPriceDetail: {
            attributes: formData.attributes,
            id: variantId,
            price,
            quantity,
            size: size ?? "",
        },
    };
};

// This function contructs the payload adding product to sales
export const generateAddToSaleDTOFromProductVariant = (variant: IProductVariantDTO): IAddToSalesDTO => {
    return {
        colorCode: variant.productColor.color.colorCode,
        productPriceDetail: [
            {
                attributes: variant.productColor.productPriceDetails[0].attributes,
                discount: variant.productColor.productPriceDetails[0].discount ?? 0,
                id: variant.productColor.productPriceDetails[0].id ?? "",
                newPrice: variant.productColor.productPriceDetails[0].newPrice ?? 0.0,
                price: variant.productColor.productPriceDetails[0].price ?? 0.0,
                quantity: variant.productColor.productPriceDetails[0].quantity,
                ramSize: variant.productColor.productPriceDetails[0].ramSize ?? "",
                size: variant.productColor.productPriceDetails[0].size ?? "",
                sku: variant.productColor.productPriceDetails[0].sku ?? "",
                stockLevel: variant.productColor.productPriceDetails[0].stockLevel ?? "IN_STOCK",
                storage: variant.productColor.productPriceDetails[0].storage ?? "",
                isPaused: variant.productColor.productPriceDetails[0].isPaused ?? false,
            },
        ],
    };
};

// This function constructs the payload for deleting a product variant
export const generateProductVariantDeleteDTOFromProduct = (
    variantId: string,
    product: IProduct
): IEditProductVariant | null => {
    if (!product?.productColors) return null;

    for (const variant of product.productColors) {
        const priceDetail = variant.productPriceDetails[0];
        if (priceDetail?.id === variantId) {
            return {
                coloUrl: variant.colorUrl,
                productId: product.id,
                productPriceDetail: {
                    attributes: priceDetail.attributes,
                    id: variantId,
                    price: priceDetail.price,
                    quantity: priceDetail.quantity,
                    size: priceDetail.size ?? "",
                    isPaused: priceDetail.isPaused ?? false,
                },
            };
        }
    }

    return null;
};

// Return the leaf node (inner-most category/subCategory) in a product Draft
export const getLeafCategoryName = (productCategoryDTO: IProductCategoryDTO): string => {
    // const categoriesObject = generateProductCategoryDTO(productDraft);

    // This reversal enables searching for leaf category by starting from fifthSubcategory,
    // then upwards to category
    const categoriesKeysReversed = [...PRODUCT_CATEGORY_KEYS].reverse();

    for (const categorykey of categoriesKeysReversed) {
        if (productCategoryDTO[categorykey]) return productCategoryDTO[categorykey];
    }

    return "";
};

/*******************************************************************************
 * Find a subcategory object from list of all categories
 * the subcategory returned will contain the tag and inputTag properties
 *******************************************************************************/
export const getLeafSubCategoryFromDTO = (
    productCategoryDTO: IProductCategoryDTO,
    productsCategories: IProductCategory[]
): IProductSubCategory | null => {
    // Start at top level
    const topNode: IProductCategory | undefined = productsCategories.find(
        (c) => c.name === productCategoryDTO.category
    );
    if (!topNode) return null;

    let currentNode: IProductSubCategory | undefined = topNode.category.find(
        (c) => c.name === productCategoryDTO.subCategory
    );
    if (!currentNode) return null;

    // current node above is already the subCategory
    // so, start from secondSubCategory which index of 2
    const subCategoryKeys = PRODUCT_CATEGORY_KEYS.slice(2) as (keyof IProductCategoryDTO)[];

    for (const key of subCategoryKeys) {
        const nextCategoryName = productCategoryDTO[key];
        if (!nextCategoryName) break;

        const nextNode: IProductSubCategory | undefined = currentNode.category.find(
            (c) => c.name === nextCategoryName
        );

        if (!nextNode) break;

        currentNode = nextNode;
    }

    // At this point, currentNode is the deepest node we found
    return currentNode ?? null;
};

// Convert image from 'File' to Base64 string
export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

// Convert image from 'url'
// (Example: https://kg-s3-assets-stage.s3.amazonaws.com/914e-653c81dcd4b0.jpeg")
// to Base64 string
export const convertUrlToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("There was a problem fetching image url");

    const blob = await response.blob();
    return convertToBase64(blob as File);
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

export const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0,
    width: number,
    height: number,
    flip = { horizontal: false, vertical: false }
): Promise<string | null> => {
    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => {
                console.log("there was an error in creating image");
                reject(error);
            });
            image.src = url;
        });

    const getRadianAngle = (degreeValue: number) => {
        return (degreeValue * Math.PI) / 180;
    };

    /**
     * Returns the new bounding area of a rotated rectangle.
     */
    const rotateSize = (width: number, height: number, rotation: number) => {
        const rotRad = getRadianAngle(rotation);

        return {
            width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
            height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
        };
    };

    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return null;
    }

    const rotRad = getRadianAngle(rotation);

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    // draw rotated image
    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement("canvas");

    const croppedCtx = croppedCanvas.getContext("2d");

    if (!croppedCtx) {
        return null;
    }

    // Set the size of the cropped canvas
    croppedCanvas.width = width;
    croppedCanvas.height = height;

    // Draw the cropped image onto the new canvas
    croppedCtx.drawImage(
        canvas,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        width,
        height
    );

    return new Promise((resolve, reject) => {
        try {
            const base64String = croppedCanvas.toDataURL("image/jpeg");
            resolve(base64String);
        } catch (error) {
            reject(new Error("Failed to generate base64 image."));
            console.error(error);
        }
    });
};
