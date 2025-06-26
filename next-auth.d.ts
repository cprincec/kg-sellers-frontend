import { UserResponse } from "./app/(auth)/lib/interfaces/response.interface";

declare module "next-auth" {
    interface Session {
        accessToken: string;
        user: UserResponse; // NOT IUserResponse
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        user: UserResponse; // NOT IUserResponse
    }
}
