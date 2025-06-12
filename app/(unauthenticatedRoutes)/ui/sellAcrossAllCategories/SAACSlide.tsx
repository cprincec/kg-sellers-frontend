import { cn } from "@/lib/utils/utils";
import { motion, AnimatePresence } from "motion/react";
import { SAACSlideVariants } from "../../lib/data";
import Image from "next/image";
import { SAACSlideProps } from "../../lib/interface";

// This is a single slide with changing images and animation
const SAACSlide = ({ src, slideNo, animationKey }: SAACSlideProps) => {
    return (
        <div
            className={cn(
                "overflow-hidden w-full lg:w-[370px] h-full lg:h-[450px] relative rounded-xl",
                // Show three slides only on large screens
                slideNo > 1 && "hidden lg:block"
            )}
        >
            {/* Wrapping motion.div in AnimationPresence component enables the 'exit' animation to work */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={animationKey} // setting this key ensures re-animation
                    variants={SAACSlideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full h-full rounded-xl"
                >
                    <Image
                        src={src}
                        alt={`slide-${slideNo}-image`}
                        className="w-full h-full rounded-xl"
                        width={370}
                        height={450}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SAACSlide;
