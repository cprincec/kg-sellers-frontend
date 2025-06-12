import { Button, buttonVariants } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { SetStateAction } from "react";
import { IStoreVacationFormDTO } from "../lib/interface";
import { Control } from "react-hook-form";
import { cn } from "@/lib/utils/utils";

const DeleteStoreFormField = ({
    isDeleted,
    setIsDeleted,
    control,
}: {
    isDeleted: boolean;
    setIsDeleted: React.Dispatch<SetStateAction<boolean>>;
    control: Control<IStoreVacationFormDTO>;
}) => {
    return (
        <FormField
            control={control}
            name="isDeleted"
            render={() => (
                <FormItem className="flex items-center justify-between gap-4 flex-wrap border p-4 md:px-6 md:py-8">
                    <div className="grid gap-2">
                        <FormLabel className="text-base">DELETE STORE</FormLabel>
                        <FormDescription className="text-base">
                            Pause your store till you are available again
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Button
                            type="button"
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "text-kaiglo_critical-base lg:text-white lg:bg-kaiglo_critical-base border lg:border-none border-kaiglo_critical-base rounded-3xl px-3 py-2 md:px-8 md:py-3 hover:bg-white lg:hover:bg-kaiglo_critical-base/80"
                            )}
                            onClick={() => setIsDeleted(true)}
                            disabled={isDeleted}
                        >
                            Delete Store
                        </Button>
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
export default DeleteStoreFormField;
