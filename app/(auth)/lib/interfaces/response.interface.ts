import { JwtPayload } from "jwt-decode";
import { IBank, IStoreInfo } from "./interface";
export interface IGetAllBanksResponse {
    message: string;
    response: IBank[];
}

export interface IGetStoreInfoResponse {
    message: string;
    response: IStoreInfo;
}

export interface ISocialAuthResponse {
    response: IUserResponse | string;
    message: string;
}

export interface IRegisterUserResponse {
    response: string;
    message: string;
}

export interface IUserResponse extends JwtPayload {
    user: UserResponse;
    token: string;
}

export interface UserResponse {
    active: boolean;
    address: Address[];
    boughtItems: BoughtItem[];
    cart: CartItem[];
    cartItemSize?: number;
    createdDate: string;
    currentOtp?: string;
    day?: number;
    dob?: string;
    email: string;
    emailCountDown: number;
    firebaseToken?: string;
    firstName: string;
    fullName: string;
    gender?: "FEMALE" | "MALE" | "OTHER";
    id: string;
    lastLoggedIn: string;
    lastName: string;
    month?: number;
    newUser: boolean;
    phone: string;
    pictureUrl: string;
    platform: "MOBILE" | "WEB" | "OTHER";
    provider: string;
    receivedDailyReward: boolean;
    role?: string;
    roles: string[];
    updatedDate: string;
    week: number;
    wishListItems: WishListItem[];
    year?: number;
}

export interface WishListItem {
    category?: null | string;
    dateAdded?: string;
    name: string;
    price: number | string;
    productId: string;
    productImage: string;
}

interface Address {
    city: string;
    defaultAddress: boolean;
    firstName: string;
    id: string;
    lastName: string;
    name: string;
    phoneNumber: string;
    state: string;
}

export interface BoughtItem {
    category: string;
    color: string;
    price: number;
    productId: string;
    productName: string;
    quantity: string;
    secSubCategory: string;
    shippingCost: string;
    size: string;
    subCategory: string;
    totalAmount: number;
    url: string;
}

export interface CartItem {
    color: string;
    dateAdded: string;
    id: string;
    platform: string;
    price: number;
    product: unknown;
    productUrl: string;
    quantity: number;
    ramSize: string;
    size: string;
    storage: string;
}

export interface WishListItem {
    category?: null | string;
    dateAdded?: string;
    name: string;
    price: number | string;
    productId: string;
    productImage: string;
}
