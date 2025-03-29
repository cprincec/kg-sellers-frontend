import { IconPackageProcess, IconStoreLocation, IconUserEdit } from "@/public/icons/icons";
import {
    ImageWMKDDesktop1,
    ImageWMKDDesktop2,
    ImageWMKDMobile1,
    ImageWMKDMobile2,
} from "@/public/images/landingPage/images";

export const homeNavLinks = [
    {
        name: "KG Express",
        href: "/",
    },
    {
        name: "Learning Center",
        href: "/learning-center",
    },
];

/************************************************************
 * Data for What Makes kaiglo Different section on homepage
 ************************************************************/
export const WMKDData = [
    {
        imageMobile: ImageWMKDMobile1,
        imageDesktop: ImageWMKDDesktop1,
        title: "Broad Audience",
        stat: "10,000+",
        statDesc: "Daily online shoppers",
        body: "Kaiglo brings your products to a global audience, maximizing visibility and sales potential. Start selling smarter, and watch your business grow!",
    },
    {
        imageMobile: ImageWMKDMobile2,
        imageDesktop: ImageWMKDDesktop2,
        title: "Reports & Analytics",
        stat: "Make better decisions",
        statDesc: "",
        body: "Gain valuable insights into your sales performance and make data-driven decisions to boost your growth.",
    },
];

/************************************************************
 * Data for About us section on homepage
 ************************************************************/
export const aboutUsdata = {
    title: "About Us",
    body: "At Kaiglo, our goal is to create channels for online users to acquire and provide goods that are not only affordable but also available in multiple variations and of the highest quality. We aim to ensure that these goods reach different locations with prompt delivery, making online shopping a seamless experience for everyone.",
    stats: [
        { desc: "Online audience", value: "50,000+" },
        { desc: "Vendors", value: "500+" },
        { desc: "Purchase Rate", value: "80%" },
    ],
};

/************************************************************
 * Data for How it Works section on homepage
 ************************************************************/
export const howItWorksData = {
    section: "How it works",
    title: "Set up your store in a flash",
    desc: "Kaiglo provides the right platform for sellers to promote their brand and store online, allowing them to have personalized interaction with potential buyers.",
    cards: [
        {
            icon: IconUserEdit,
            heading: "Registration",
            body: "With our easy signup process, you'll be up and running in no time. Don't miss out on the opportunity to grow your business with Kaiglo",
        },
        {
            icon: IconPackageProcess,
            heading: "Upload products",
            body: "Seamlessly add new products to your store with our product upload feature making it simple to expand your catalog and reach new customers faster.",
        },
        {
            icon: IconStoreLocation,
            heading: "Your store is live",
            body: "Get your store up and running in no time. Simply complete your setup, add your products, and hit publish",
        },
    ],
};

/************************************************************
 * Data for Testimonials section on homepage
 ************************************************************/
export const testimonialsData = {
    title: "Thousands of sellers have tried our platform",
    desc: "At Kaiglo, we take pride in the success stories of our sellers. From small business owners to established brands, our sellers have found great success on our platform.",
    testimonies: [
        {
            name: "Silvester John",
            position: "Owner",
            company: "Louis Vuitton",
            testimony:
                "I joined Kaiglo as a small business owner, started selling my handmade crafts and my sales increased by 50% within the first month of joining the platform",
        },
        {
            name: "Chidera Okoli",
            position: "Owner",
            company: "Louis Vuitton",
            testimony:
                "With the help of their marketing tools, I was able to showcase my designs to the right audience and increase my sales by 70% within the first three months.",
        },
        {
            name: "Silvester John",
            position: "",
            company: "Tokunbo stores",
            testimony:
                "I joined Kaiglo as a small business owner, started selling my handmade crafts and my sales increased by 50% within the first month of joining the platform",
        },
    ],
};
