import { IOtpFormDTO } from "@/interfaces/dtos/auth.dto.interface";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { IUserResponse } from "../../../lib/interfaces/response.interface";
import { postRequest } from "@/lib/utils/apiCaller";

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                phone: { label: "Phone", type: "text" },
                otp: { label: "OTP", type: "text" },
            },
            // @ts-expect-error - to be changed
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const response = await postRequest<IOtpFormDTO, IUserResponse>({
                        url: "/auth/login",
                        payload: {
                            email: credentials.email,
                            phone: credentials.phone,
                            otp: credentials.otp,
                        },
                    });

                    if (response?.token && response?.user) {
                        return response;
                    }
                    // Return null if user data could not be retrieved
                    return null;
                } catch (error) {
                    console.error("Authentication failed:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        signIn(params) {
            console.log("signing in", params);
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                // @ts-expect-error - to be changed
                token.accessToken = user.token;
                // @ts-expect-error - to be changed
                token.user = user.user;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user = token.user;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
