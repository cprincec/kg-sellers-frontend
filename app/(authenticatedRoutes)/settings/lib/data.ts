import StoreDetailsForm from "../../../(auth)/ui/register/storeSetup/storeDetails2/StoreDetailsForm";
import StoreVacationForm from "../ui/StoreVacation";
import TermsOfContractForm from "../../../(auth)/ui/register/storeSetup/termsOfContract/TermsOfContractForm";
import PaymentOptionFormWrapper from "@/app/(auth)/ui/register/storeSetup/paymentOption/PaymentOptionFormWrapper";

export const tabs = [
    { label: "Store information", value: "store-information" },
    { label: "Store vacation", value: "store-vacation" },
    { label: "Payment information", value: "payment-information" },
    { label: "Terms of Contract", value: "terms-of-contract" },
];

export const settingsMobileContents = [
    {
        id: "store-information",
        component: StoreDetailsForm,
    },
    {
        id: "store-vacation",
        component: StoreVacationForm,
    },
    {
        id: "payment-information",
        component: PaymentOptionFormWrapper,
        props: { showNote: false, variant: "settings" },
    },
    {
        id: "terms-of-contract",
        component: TermsOfContractForm,
        props: { showMainTitle: false },
    },
];
