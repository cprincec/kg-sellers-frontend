"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormNavButtonsProps } from "../../lib/interface";
import { cn } from "@/lib/utils/utils";

const FormNavButtons = ({
    submitButtonFunc,
    cancelFunc,
    className,
    cancelButtonClassName,
    submitButtonClassName,
    showSubmitButton = true,
    cancelButtonText = "Cancel",
    submitButtonText = "Proceed",
    submitButtonType = "submit",
    disabled,
}: FormNavButtonsProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={cn("flex justify-end items-center gap-3 pt-4", className)}
        >
            <Button
                type="button"
                variant={"outline"}
                className={cn(
                    "px-8 py-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled",
                    cancelButtonClassName
                )}
                onClick={() => cancelFunc()}
            >
                {cancelButtonText}
            </Button>

            {showSubmitButton && (
                <Button
                    type={submitButtonType}
                    className={cn("px-8 py-3 rounded-full", submitButtonClassName)}
                    onClick={() => submitButtonFunc && submitButtonFunc()}
                    disabled={disabled ?? false}
                >
                    {disabled ? "Please wait..." : submitButtonText}
                </Button>
            )}
        </motion.div>
    );
};
export default FormNavButtons;
