export const withdrawFromWalletEndpoint = `/payouts/withdraw`;
export const requestOTPForWalletWithdrawal = (email: string, phone: string, userId: string) => {
    return `auth/request-otp-v2?email=${email}&phoneNumber=${phone.replace("+", "")}&userId=${userId}`;
};
