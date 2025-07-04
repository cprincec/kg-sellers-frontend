import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
    const token = await getToken({ req });

    // User should only be redirectd to login if user is not signed in or
    // user is not already on any of these public routes
    const publicRoutes = ["/login", "/register", "/recover-account"];
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

    // Check if user is authenticated
    const isAuth = !!token;

    // Redirect to dashboard if user is trying to visit login or recover account or register pages
    // when already signed in
    if (isAuth && isPublicRoute) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // redirect user to login if user if not authenticated
    // attach the attempted route as callback url
    if (!isAuth && !isPublicRoute) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
};

export const config = {
    // This excludes API routes, Next.js assets, favicon, png images and the homepage (/)
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|learning-center|$).*)"],
};
