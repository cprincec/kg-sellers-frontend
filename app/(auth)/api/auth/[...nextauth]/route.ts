import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { ISocialAuthResponse, IUserResponse } from "../../../lib/interfaces/response.interface";
import { postRequest } from "@/lib/utils/apiCaller";
import { IOtpDTO, ISocialAuthDTO } from "@/app/(auth)/lib/interfaces/interface";

const handler = NextAuth({
    pages: {
        signIn: "/login",
    },
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
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const response = await postRequest<IOtpDTO, IUserResponse>({
                        url: "/auth/login",
                        payload: {
                            email: credentials.email,
                            phone: credentials.phone,
                            otp: credentials.otp,
                        },
                    });

                    if (response?.token && response?.user) {
                        return { id: response.user.id, customData: { ...response } };
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
        async signIn({ user, account }) {
            if (!user) return false;

            if (account?.provider === "google") {
                if (!user.name || !user.email || !user.image) return false;

                try {
                    const response = await postRequest<ISocialAuthDTO, ISocialAuthResponse>({
                        url: "/auth/social-auth",
                        payload: {
                            displayName: user.name,
                            email: user.email,
                            pictureUrl: user.image,
                            provider: account.provider,
                        },
                    });

                    if (response === null) return false;

                    if (response?.response) {
                        if (typeof response.response === "string") {
                            return `/login?errorMessage=${encodeURIComponent(response.message)}`;
                        }

                        if (response.message === "successful") {
                            user.customData = { ...response.response };
                            return true;
                        }
                    }

                    return false;
                } catch (error) {
                    console.error("Authentication failed:", error);
                    return true;
                }
            }

            return true;
        },
        jwt({ token, user }) {
            // Ensure there is user data and access token from backend
            if (user && user.customData) {
                token.accessToken = user.customData?.token;
                token.user = user.customData?.user;
            }

            return token;
        },
        session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user = token.user;

            return session;
        },
    },
});

export { handler as GET, handler as POST };
