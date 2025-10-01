export const getVerifyBankAccountEndpoint = (accountNumber: string, bankCode: string) => {
    // return `https://kg-buy-sell-api.kaidev.xyz/api/v1/store/bank-details/name-enquiry?accountNumber=${accountNumber}&bankCode=${bankCode}`;
    return `/store/bank-details/name-enquiry?accountNumber=${accountNumber}&bankCode=${bankCode}`;
};
