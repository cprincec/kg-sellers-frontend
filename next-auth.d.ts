import { IUserResponse, UserResponse } from "@/app/(auth)/lib/interfaces/response.interface";

declare module "next-auth" {
    interface User {
        customData?: IUserResponse;
    }

    interface Session {
        user: UserResponse;
        accessToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        user: UserResponse;
    }
}
