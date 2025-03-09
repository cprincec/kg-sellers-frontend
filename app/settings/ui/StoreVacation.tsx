"use client";

import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { IStoreVacationFormDTO } from "../lib/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeVacationSchema } from "../lib/validations/schemas";
import { storeVacationDefaultValues } from "../lib/validations/defaults";
import { cn } from "@/lib/utils";
import { useState } from "react";
import FormNavButtons from "@/app/wallet/ui/payoutThreshold/FormNavButtons";

const StoreVacationForm = () => {
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const form = useForm<IStoreVacationFormDTO>({
        resolver: yupResolver(storeVacationSchema),
        defaultValues: { ...storeVacationDefaultValues, isDeleted },
    });

    function onSubmit(values: IStoreVacationFormDTO) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
                <div>
                    <div className="">
                        <FormField
                            control={form.control}
                            name="isPaused"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-between gap-4 border border-b-0 p-4 md:px-6 md:py-8">
                                    <div className="grid gap-2">
                                        <FormLabel>STORE VACATION</FormLabel>
                                        <FormDescription>
                                            Pause your store till you are available again
                                        </FormDescription>
                                    </div>
                                    <FormControl className="self-start">
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isDeleted"
                            render={() => (
                                <FormItem className="flex items-center justify-between gap-4 flex-wrap border p-4 md:px-6 md:py-8">
                                    <div className="grid gap-2">
                                        <FormLabel>DELETE STORE</FormLabel>
                                        <FormDescription>
                                            Pause your store till you are available again
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Button
                                            type="button"
                                            className={cn(
                                                buttonVariants({ variant: "critical_solid" }),
                                                "rounded-3xl px-3 py-2 md:px-8 md:py-3"
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
                    </div>
                </div>
                <FormNavButtons
                    submitButtonText={"Save Changes"}
                    cancelFunc={() => console.log("store vacation changes cancelled")}
                />
            </form>
        </Form>
    );
};

export default StoreVacationForm;
