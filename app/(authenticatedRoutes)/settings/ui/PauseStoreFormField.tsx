import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { IStoreVacationFormDTO } from "../lib/interface";
import { Control } from "react-hook-form";
import { Switch } from "@/components/ui/switch";

const PauseStoreFormField = ({ control }: { control: Control<IStoreVacationFormDTO> }) => {
    return (
        <FormField
            control={control}
            name="isPaused"
            render={({ field }) => (
                <FormItem className="flex items-center justify-between gap-4 border border-b-0 p-4 md:px-6 md:py-8">
                    <div className="grid gap-2">
                        <FormLabel className="text-base">STORE VACATION</FormLabel>
                        <FormDescription className="text-base">
                            Pause your store till you are available again
                        </FormDescription>
                    </div>
                    <FormControl className="self-start">
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
export default PauseStoreFormField;
