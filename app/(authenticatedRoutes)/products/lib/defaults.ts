import { IProductVariantsFormValues } from "./interface";

export const productDetailsFormDefaultValues = {
    images: [],
    name: "",
    description: "",
    specification1: "",
    specification2: "",
    specification3: "",
    specification4: "",
    specification5: "",
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
