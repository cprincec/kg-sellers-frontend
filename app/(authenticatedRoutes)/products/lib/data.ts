import {
    IconCancelCircle,
    IconDuplicate,
    IconEditSquare,
    IconGlobe,
    IconPackage2,
    IconPackageOutOfStock,
    IconPackageProcess2,
    IconPause,
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

export const productsMetricsData = [
    { title: "Total Products", value: "120", icon: IconPackage2 },
    { title: "LIVE ON SITE", value: "74", icon: IconGlobe, variant: "success" },
    { title: "Under Review", value: "26", icon: IconPackageProcess2, variant: "warning" },
    { title: "Out of Stock", value: "12", icon: IconPackageOutOfStock, variant: "error" },
    { title: "Rejected", value: "8", icon: IconCancelCircle, link: "rejected-products" },
];

export const productsList = [
    {
        productImage: ImageProduct1,
        productName: "Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise",
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

export const productActions = [
    { name: "edit product", icon: IconEditSquare },
    {
        name: "add to sales",
        icon: IconPriceTag,
        actionFunc: () => {
            console.log("added to sales");
        },
    },
    { name: "pause product", icon: IconPause },
    { name: "duplicate product", icon: IconDuplicate },
    {
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
            setSearchParams([{ "product-action": "delete-product" }, { id: productId }]);
        },
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

/*****************************************************************************
 * Added products variants table data
 *****************************************************************************/
export const productVariants = [
    {
        image: ImageSampleProduct1,
        shippingWeight: 20,
        color: "blue",
        size: "36",
        quantity: 15,
        price: 2500,
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
