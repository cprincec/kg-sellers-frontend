"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import OtpTimer from "@/app/(auth)/ui/otp/OtpTimer";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import { OtpFormInputProps } from "../../interface";
import { useModalContext } from "@/app/contexts/modalContext";
// import { useVerifyOtp } from "@/hooks/mutation/auth/verifyOtp";

const FormSchema = z.object({
    otp: z.string().min(4, {
        message: "Your one-time password must be 4 characters.",
    }),
});

const OtpFormInput = ({ email, phone, continueTo, actionText = "Continue" }: OtpFormInputProps) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            otp: "",
        },
    });

    const { setShowModal } = useModalContext();
    // const { verifyOtp, verifyingOtp } = useVerifyOtp({ setShowOtpModal });

    // temporal verifyOtp
    const verifyingOtp = false;
    const router = useRouter();

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        // validate string before using
        setShowModal(false);
        router.replace(continueTo);
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
                    disabled={verifyingOtp}
                >
                    {verifyingOtp ? "Please wait..." : actionText}
                </Button>
            </form>
        </Form>
    );
};

export default OtpFormInput;
