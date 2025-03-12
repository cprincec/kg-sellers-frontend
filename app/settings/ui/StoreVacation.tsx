"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { IStoreVacationFormDTO } from "../lib/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeVacationSchema } from "../lib/validations/schemas";
import { storeVacationDefaultValues } from "../lib/validations/defaults";
import { useState } from "react";
import FormNavButtons from "@/app/wallet/ui/payoutThreshold/FormNavButtons";
import DeleteStoreFormField from "./DeleteStoreFormField";
import PauseStoreFormField from "./PauseStoreFormField";

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5 lg:space-y-0">
                <div>
                    <div className="">
                        <PauseStoreFormField control={form.control} />
                        <DeleteStoreFormField
                            isDeleted={isDeleted}
                            setIsDeleted={setIsDeleted}
                            control={form.control}
                        />
                    </div>
                </div>
                <FormNavButtons
                    submitButtonText={"Save Changes"}
                    cancelFunc={() => console.log("store vacation changes cancelled")}
                    className="lg:border lg:border-t-0 md:px-6 md:py-8"
                />
            </form>
        </Form>
    );
};

export default StoreVacationForm;
