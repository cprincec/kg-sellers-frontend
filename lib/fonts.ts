import localFont from "next/font/local";

export const gotham = localFont({
    src: [
        {
            path: "../fonts/Gotham-Thin.otf",
            weight: "100",
        },
        {
            path: "../fonts/Gotham-XLight.otf",
            weight: "200",
        },
        {
            path: "../fonts/Gotham-Light.otf",
            weight: "300",
        },
        {
            path: "../fonts/Gotham-Book.otf",
            weight: "400",
        },
        {
            path: "../fonts/Gotham-Medium.otf",
            weight: "500",
        },
        {
            path: "../fonts/Gotham-Bold.otf",
            weight: "700",
        },
        {
            path: "../fonts/Gotham-Black.otf",
            weight: "800",
        },
        {
            path: "../fonts/Gotham-Ultra.otf",
            weight: "900",
        },
    ],
    display: "swap",
});
