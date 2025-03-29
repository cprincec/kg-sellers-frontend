import { StaticImageData } from "next/image";

export interface slide {
    slideNo: number;
    slideImages: StaticImageData[];
}

export interface SAACSlideProps {
    src: StaticImageData;
    slideNo: number;
    animationKey: number;
   
}
