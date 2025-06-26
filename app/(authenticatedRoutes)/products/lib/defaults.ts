import { IProductVariantsFormValues } from "./interfaces/interface";

export const productDetailsFormDefaultValues = {
    mainImage: "",
    otherImages: [],
    description: "",
    productName: "",
    specifications: [],
    seo: "",
};

export const productVariantsFormDefaultValues: IProductVariantsFormValues = {
    images: [],
    color: "",
    size: "",
    shippingWeight: 0,
    quantity: 0,
    price: 0,
};
