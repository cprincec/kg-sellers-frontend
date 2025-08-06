import { IPaymentOptionDTO, IStoreDetailsDTO, IStoreInfo } from "../interfaces/interface";
import { paymentOptionDefaultValues } from "../validations/defaults";

export const generateStoreDetailsDTO = (storeInfo: IStoreInfo): IStoreDetailsDTO => {
    return {
        storeName: storeInfo.storeName,
        storeAddress: storeInfo.address,
        storeBanner: storeInfo.bannerImage,
        businessLogo: storeInfo.profilePic,
        state: storeInfo.location,
        email: storeInfo.email,
        phoneNumber: storeInfo.phoneNumber,
    };
};

export const generatePaymentOptionDTO = (storeInfo: IStoreInfo): IPaymentOptionDTO => {
    if (!storeInfo.bankDetails) return paymentOptionDefaultValues;
    
    return {
        bankId: storeInfo.bankDetails.bank.id,
        beneficiaryName: storeInfo.bankDetails.account_name,
        accountNumber: storeInfo.bankDetails.account_number,
    };
};
