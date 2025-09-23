"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import OtpTimer from "@/app/(auth)/ui/otp/OtpTimer";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { OtpFormInputProps } from "../../lib/interfaces/interface";
import { useOtpContext } from "../../contexts/otpContext";

const FormSchema = z.object({
    otp: z.string().min(4, {
        message: "Your one-time password must be 4 characters.",
    }),
});

const OtpFormInput = ({ email, phone, actionText = "Continue" }: OtpFormInputProps) => {
    const { otpFormAction, otpFormActionIsPending, resendOTPMutationFuncIsPending } = useOtpContext();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            otp: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const payload = { ...data, email: email, phone: phone };

        // Call the otpFormAction with the payload
        if (otpFormAction) {
            otpFormAction(payload);
            console.log(payload, otpFormActionIsPending, otpFormAction, resendOTPMutationFuncIsPending);
        }

        form.reset();
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col items-center space-y-6"
            >
                <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputOTP maxLength={4} {...field} pattern={REGEXP_ONLY_DIGITS}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                    </InputOTPGroup>

                                    <InputOTPGroup>
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>

                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>

                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <OtpTimer email={email} phone={phone} />

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full font-medium rounded-full py-3"
                    disabled={otpFormActionIsPending}
                >
                    {otpFormActionIsPending ? "Please wait..." : actionText}
                </Button>
            </form>
        </Form>
    );
};

export default OtpFormInput;
