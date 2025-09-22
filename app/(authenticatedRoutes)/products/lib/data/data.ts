import {
    IconDuplicate,
    IconEdit,
    IconEditSquare,
    IconPause,
    IconPauseBlue,
    IconPriceTag,
    IconProductDetailsNotCurrent,
    IconProductVariantsNotCurrent,
    IconTrash,
} from "@/public/icons/icons";
import {
    ImageProduct1,
    ImageProductCategoryCurrent,
    ImageProductDetailsCurrent,
    ImageProductVariantCurrent,
    ImageSampleProduct1,
    ImageSampleProduct1plus,
} from "@/public/images/landingPage/images";
import { IProductAction, IProductDTO, IProductSpecification, IVariantAction } from "../interfaces/interface";

export const productsList: IProductDTO[] = [
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 100,
        status: "active",
        amount: 2500,
        stockLevel: "in stock",
        salesType: ["Valentine's", "6 days left"],
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 0,
        status: "paused",
        amount: 2500,
        stockLevel: "out of stock",
        salesType: [],
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 100,
        status: "active",
        amount: 2500,
        stockLevel: "in stock",
        salesType: ["black friday", "6 days left"],
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 40,
        status: "active",
        amount: 2500,
        stockLevel: "low stock",
        salesType: ["flash sales", "6 days left"],
        quantity: 40,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 100,
        status: "active",
        amount: 2500,
        stockLevel: "in stock",
        salesType: [],
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
        sku: 0,
        status: "active",
        amount: 2500,
        stockLevel: "out of stock",
        salesType: [],
        quantity: 0,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        sku: 40,
        status: "active",
        amount: 2500,
        stockLevel: "low stock",
        salesType: ["on sales"],
        quantity: 40,
        dateCreated: "01 Aug 2024",
        description: "",
        specifications: [],
        productImages: [],
        productVariants: [],
    },
];

export const SampleProductSpecifications: IProductSpecification[] = [
    {
        name: "specification 1",
        options: [
            "specification 1 option 1",
            "specification 1 option 2",
            "specification 1 option 3",
            "specification 1 option 4",
        ],
    },
    {
        name: "specification 2",
        options: [
            "specification 2 option 1",
            "specification 2 option 2",
            "specification 2 option 3",
            "specification 2 option 4",
        ],
    },
    {
        name: "specification 3",
        options: [
            "specification 3 option 1",
            "specification 3 option 2",
            "specification 3 option 3",
            "specification 3 option 4",
        ],
    },
    {
        name: "specification 4",
        options: [
            "specification 4 option 1",
            "specification 4 option 2",
            "specification 4 option 3",
            "specification 4 option 4",
        ],
    },
    {
        name: "specification 5",
        options: [
            "specification 5 option 1",
            "specification 5 option 2",
            "specification 5 option 3",
            "specification 5 option 4",
        ],
    },
];

export const sampleProduct = {
    productImage: ImageProduct1,
    productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
    sku: "02922039341",
    description:
        "The Nike Jordan 2 SE Gray's versatile upper is a case study of what happens when Nike's durable React foam meets firm suede overlays. Sporting a checkered pattern of textured dimples, the shoe protects the midfoot's inner lining while securing the strips that house each of the design's lacing holes.",
    specifications: ["specification 1", "specification 2", "specification 3", "specification 4"],
    productImages: [ImageSampleProduct1, ImageSampleProduct1, ImageSampleProduct1, ImageSampleProduct1plus],
    productVariants: [
        { color: "green", size: "small", quantity: 12, amount: 90000 },
        { color: "blue", size: "medium", quantity: 10, amount: 90000 },
    ],
    salesType: "Valentine sales",
};

export const productVariantsList = [
    {
        images: [ImageSampleProduct1],
        shippingWeight: 20,
        color: "green",
        size: "44",
        quantity: 17,
        price: 35000,
        amount: 35000,
    },
    {
        images: [ImageSampleProduct1],
        shippingWeight: 20,
        color: "blue",
        size: "36",
        quantity: 15,
        price: 2500,
        amount: 2500,
    },
    {
        images: [ImageSampleProduct1],
        shippingWeight: 20,
        color: "blue",
        size: "36",
        quantity: 15,
        price: 2500,
        amount: 2500,
    },
    {
        images: [ImageSampleProduct1],
        shippingWeight: 20,
        color: "blue",
        size: "36",
        quantity: 15,
        price: 2500,
        amount: 2500,
    },
];

export const productActions: IProductAction[] = [
    {
        type: "product",
        name: "edit product",
        icon: IconEditSquare,
        link: (productId: string) =>
            `/products/add-product/preview?product-action=edit&product-id=${productId}`,
    },
    {
        type: "product",
        name: "add to sales",
        icon: IconPriceTag,
        actionFunc: (
            productId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => setSearchParams([{ "product-action": "add-to-sales" }, { "product-id": productId }]),
    },
    {
        type: "product",
        name: "pause product",
        icon: IconPause,
        actionFunc: (
            productId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => setSearchParams([{ "product-action": "pause" }, { "product-id": productId }]),
    },
    {
        type: "product",
        name: "activate product",
        icon: IconPause,
        actionFunc: (
            productId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => setSearchParams([{ "product-action": "activate" }, { "product-id": productId }]),
    },
    {
        type: "product",
        name: "duplicate product",
        icon: IconDuplicate,
    },
    {
        type: "product",
        name: "delete product",
        icon: IconTrash,
        actionFunc: (
            productId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => {
            setSearchParams([{ "product-action": "delete" }, { "product-id": productId }]);
        },
        style: "text-kaiglo_critical-600",
    },
];

export const productsSortOptions = [
    {
        category: { label: "Status", value: "status" },
        options: [
            {
                label: "Active",
                value: "active",
            },
            {
                label: "Paused",
                value: "paused",
            },
            {
                label: "Rejected",
                value: "rejected",
            },
        ],
    },

    {
        category: { label: "Sales type", value: "sales-type" },
        options: [
            {
                label: "On Sale",
                value: "on-sale",
            },
            {
                label: "None",
                value: "none",
            },
        ],
    },
    {
        category: { label: "Stock level", value: "stock-level" },
        options: [
            {
                label: "In stock",
                value: "in-stock",
            },
            {
                label: "Low stock",
                value: "low-stock",
            },
            {
                label: "Out of stock",
                value: "out-of-stock",
            },
        ],
    },
];

export const productsFilterOptions = [
    {
        category: { label: "Status", value: "status" },
        options: [
            {
                label: "Active",
                value: "active",
            },
            {
                label: "Paused",
                value: "paused",
            },
            {
                label: "Rejected",
                value: "rejected",
            },
        ],
    },

    {
        category: { label: "Sales type", value: "sales-type" },
        options: [
            {
                label: "On Sale",
                value: "on-sale",
            },
            {
                label: "None",
                value: "none",
            },
        ],
    },
];

export const rejectedProductsData = [
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
        status: "Rejected",
        amount: 2500,
        quantity: 100,
        dateCreated: "01 Aug 2024",
    },
];

export const productsCategoriesList = [
    "Men's Fashion",
    "Women's Fashion",
    "Office & Schools",
    "Consumer Electronics",
    "Phones & Computing",
    "Health & Beauty",
    "Home Decor",
    "Sports & Outdoors",
];

/**********************************************************************
 * Product variant actions
 *********************************************************************/
export const productVariantActions: IVariantAction[] = [
    {
        type: "variant",
        name: "edit variant",
        icon: IconEdit,
        actionFunc: (
            productId: string,
            variantId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => {
            setSearchParams([
                { "variant-action": "edit" },
                { "variant-id": variantId },
                { "product-id": productId },
            ]);
        },
        // link: (productId: string, variantId) =>
        //     `/products/add-product?step=product-variants&product-id=${productId}&variant-id=${variantId}&action=add-variant&product-action=edit&variant-action=edit`,
    },
    {
        type: "variant",
        name: "pause variant",
        icon: IconPauseBlue,
        actionFunc: (
            productId: string,
            variantId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => {
            setSearchParams([{ "variant-action": "pause" }, { "variant-id": variantId }]);
        },
        style: "text-kaiglo_info-base",
    },
    {
        type: "variant",
        name: "Delete Variant",
        icon: IconTrash,
        actionFunc: (
            productId: string,
            variantId: string,
            setSearchParams: (
                array: {
                    [key: string]: string;
                }[]
            ) => void
        ) => {
            setSearchParams([
                { "variant-action": "delete" },
                { "variant-id": variantId },
                { "product-id": productId },
            ]);
        },
        style: "text-kaiglo_critical-600",
    },
];

/*******************************************
 * Steps for adding products
 ********************************************/
export const addProductSteps = [
    {
        label: "Select Category",
        id: "product-category",
        currentIcon: ImageProductCategoryCurrent,
        notCurrentIcon: null,
    },
    {
        id: "product-details",
        label: "Product details",
        currentIcon: ImageProductDetailsCurrent,
        notCurrentIcon: IconProductDetailsNotCurrent,
    },
    {
        id: "product-variants",
        label: "Product variants",
        currentIcon: ImageProductVariantCurrent,
        notCurrentIcon: IconProductVariantsNotCurrent,
    },
];
