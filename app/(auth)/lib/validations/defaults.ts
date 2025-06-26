import { IPaymentOptionDTO, IStoreDetailsDTO } from "../interfaces/interface";

export const storeDetailsDefaultValues: IStoreDetailsDTO = {
    storeName: "",
    email: "",
    phoneNumber: "",
    storeAddress: "",
    state: "",
    businessLogo: "",
    storeBanner: "",
};

// Default values for the "Store Details" step
export const paymentOptionDefaultValues: IPaymentOptionDTO = {
    beneficiaryName: "Isaac Udom",
    accountNumber: "023022022",
    bankName: "Access bank",
};
