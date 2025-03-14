import {
    CreditCardIcon,
    LicenseIcon,
    PackageIcon,
    StoreIcon,
} from "../ui/register/storeSetup/stepper/stepper-icons";

export const steps = [
    {
        label: "Store information",
        description: "Provide information about your store",
        icon: StoreIcon,
    },
    {
        label: "Product information",
        description: "Provide information about what you sell",
        icon: PackageIcon,
    },
    {
        label: "Bank information",
        description: "Provide your bank information to get paid",
        icon: CreditCardIcon,
    },
    {
        label: "Terms of contract",
        description: "Ensure you read and accept these terms",
        icon: LicenseIcon,
    },
];
