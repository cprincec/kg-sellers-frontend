import StoreVacationForm from "../ui/StoreVacation";
import PaymentOptionFormWrapper from "../ui/paymentOption2/PaymentOptionFormWrapper";
import StoreDetailsFormWrapper from "../ui/storeDetails2/StoreDetailsFormWrapper";
import TermsOfContractForm from "../ui/termsOfContract2/TermsOfContractForm";
import { ISettingsMobileContent } from "./interface";

export const tabs = [
    { label: "Store information", value: "store-information" },
    { label: "Store vacation", value: "store-vacation" },
    { label: "Payment information", value: "payment-information" },
    { label: "Terms of Contract", value: "terms-of-contract" },
];

export const settingsMobileContents: ISettingsMobileContent[] = [
    {
        id: "store-information",
        component: StoreDetailsFormWrapper,
    },
    {
        id: "store-vacation",
        component: StoreVacationForm,
    },
    {
        id: "payment-information",
        component: PaymentOptionFormWrapper,
    },
    {
        id: "terms-of-contract",
        component: TermsOfContractForm,
    },
];
