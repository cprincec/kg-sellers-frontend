"use client";

import { useEffect, useState } from "react";
import { SAACSlideShowData } from "../../lib/data";
import SAACSlide from "./SAACSlide";

const SAACSlideShow = () => {
    // State to track the current image index for each slide
    const [slidesCurrentIndexes, setSlidesCurrentIndexes] = useState<number[]>([0, 0, 0]);

    // Duration before each slide image changes
    const SLIDE_INTERVAL = 3000;

    useEffect(() => {
        // Store timeouts and interval IDs to clear them later
        const timeouts: NodeJS.Timeout[] = [];
        const intervals: NodeJS.Timeout[] = [];

        // loop through each slide to set up an interval for updating its index
        SAACSlideShowData.forEach((slide, index) => {
            timeouts.push(
                // delay each interval start-time by increment of 2 seconds except the first slide
                setTimeout(() => {
                    // Set up an interval to update the corresponding slide index
                    intervals.push(
                        setInterval(() => {
                            setSlidesCurrentIndexes((prevValue) => {
                                // clone the prevValue
                                const newIndexes = [...prevValue];

                                // increment the image index of the current slide
                                newIndexes[index] = (newIndexes[index] + 1) % slide.slideImages.length;

                                return newIndexes;
                            });
                        }, SLIDE_INTERVAL)
                    );
                }, index * 200)
            );
        });

        return () => {
            // Clear timeouts and intervals
            timeouts.forEach(clearTimeout);
            intervals.forEach(clearInterval);
        };
    }, []);

    return (
        <div className="grid grid-flow-col gap-8 justify-center items-center ">
            {SAACSlideShowData.map((slide, index) => {
                const { slideNo, slideImages } = slide;
                const src = slideImages[slidesCurrentIndexes[index]];

                return (
                    <SAACSlide
                        key={`slide-${slideNo}`}
                        src={src}
                        slideNo={slideNo}
                        animationKey={slidesCurrentIndexes[index]}
                    />
                );
            })}
        </div>
    );
};
export default SAACSlideShow;
