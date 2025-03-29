import {
    ImageSAAC1,
    ImageSAAC1_2,
    ImageSAAC1_3,
    ImageSAAC1_4,
    ImageSAAC2,
    ImageSAAC2_2,
    ImageSAAC2_3,
    ImageSAAC2_4,
    ImageSAAC3,
    ImageSAAC3_2,
    ImageSAAC3_3,
    ImageSAAC3_4,
} from "@/public/images/landingPage/images";

/*************************************************************************
 * Images for the 'Sell Across All Categories' section on the home page.
 ************************************************************************/
export const SAACSlideShowData = [
    { slideNo: 1, slideImages: [ImageSAAC1, ImageSAAC1_2, ImageSAAC1_3, ImageSAAC1_4] },
    { slideNo: 2, slideImages: [ImageSAAC2, ImageSAAC2_2, ImageSAAC2_3, ImageSAAC2_4] },
    { slideNo: 3, slideImages: [ImageSAAC3, ImageSAAC3_2, ImageSAAC3_3, ImageSAAC3_4] },
];

/**********************************************************************************
 * Slide show animation settings object for the 'Sell Across All Categories' section
 *********************************************************************************/
export const SAACSlideVariants = {
    initial: { y: "100%" },
    animate: { y: 0, transition: { duration: 0.4 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.4 } },
};
