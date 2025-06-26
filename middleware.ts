import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
    const token = await getToken({ req });

    // User will not be redirected to login page if not authenticated and is on
    // any of these routes
    const publicRoutes = ["/login", "/register", "/recover-account"];
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

    // Check if user is authenticated
    const isAuth = !!token;

    // redirect user to login if user if not authenticated
    // attach the attempted route as callback url
    if (!isAuth && !isPublicRoute) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
};

// Match routes that require auth
export const config = {
    matcher: [
        "/dashboard/:path*",
        "/products/:path*",
        "/orders/:path*",
        "/transactions/:path*",
        "/wallet/:path*",
        "/settings/:path*",
    ],
};
