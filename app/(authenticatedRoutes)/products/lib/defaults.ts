import { ProductVariantFormInterface } from "./interfaces/interface";

export const productDetailsFormDefaultValues = {
    mainImage: "",
    otherImages: [],
    description: "",
    productName: "",
    specifications: [],
    seo: "",
};

export const productVariantsFormDefaultValues: ProductVariantFormInterface = {
    attributes: [],
    productUrl: "",
    // productColor: {
    //     color: {
    //         color: "",
    //         colorCode: "",
    //     },
    //     colorUrl: "",
    //     productPriceDetails: [
    //         {
    //             attributes: [],
    //             discount: 0,
    //             id: "",
    //             newPrice: 0,
    //             price: 0,
    //             quantity: "",
    //             ramSize: "",
    //             size: "",
    //             sku: "",
    //             stockLevel: "",
    //             storage: "",
    //         },
    //     ],
    //     productId: "",
    //     productView: {
    //         colorCode: "",
    //         productUrl: "",
    //     },
    //     weightInKG: 0,
    // },
};
