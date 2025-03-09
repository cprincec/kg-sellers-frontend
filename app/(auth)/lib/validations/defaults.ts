import { IPaymentOptionFormDTO, IStoreDetailsFormDTO } from "../../interface";

export const storeDetailsDefaultValues: IStoreDetailsFormDTO = {
    storeName: "",
    email: "",
    phone: "",
    address: "",
    logo: null,
    banner: null,
};

// Default values for the "Store Details" step
export const paymentOptionDefaultValues: IPaymentOptionFormDTO = {
    beneficiaryName: "Isaac Udom",
    accountNumber: "023022022",
    bankName: "Access bank",
};
