import { StaticImageData } from "next/image";

export interface Tutorial {
    imageMobile: StaticImageData | string;
    imageDesktop: StaticImageData | string;
    title: string;
    steps: number;
    duration: string;
}
