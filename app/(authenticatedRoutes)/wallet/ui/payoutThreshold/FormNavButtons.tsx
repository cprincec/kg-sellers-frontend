"use client";

import { Button } from "@/components/ui/button";
import { FormNavButtonsProps } from "../../lib/interface";
import { cn } from "@/lib/utils";

const FormNavButtons = ({
    cancelButtonText = "Cancel",
    submitButtonText = "Proceed",
    cancelFunc,
    className,
}: FormNavButtonsProps) => {
    return (
        <div className={cn("flex justify-end items-center gap-3 pt-4", className)}>
            <Button
                type="button"
                variant={"outline"}
                className="px-8 py-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                onClick={() => cancelFunc()}
            >
                {cancelButtonText}
            </Button>

            <Button type="submit" className="px-8 py-3 rounded-full">
                {submitButtonText}
            </Button>
        </div>
    );
};
export default FormNavButtons;
