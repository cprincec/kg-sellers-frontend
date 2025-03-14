import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SelectAccount = () => {
    const { replace } = useRouter();
    return (
        <Dialog open={true} onOpenChange={() => replace("/wallet")}>
            <DialogContent
                className="w-[90%] md:max-w-[410px] outline-none p-8 gap-6 rounded-2xl"
                data-testid="otp-dialog"
            >
                <DialogHeader className="mb-0 pb-0">
                    <DialogTitle className="text-base text-kaiglo_grey-900 font-bold text-left mb-0 pb-0">
                        Selected bank below
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div className="grid gap-8 rounded-lg bg-white w-full">
                    <Card className="grid gap-2 p-4 bg-[#F2F2F2] shadow-none mt-0">
                        <CardHeader className="p-0">
                            <CardTitle className="text-sm font-semibold">Access Bank</CardTitle>
                        </CardHeader>

                        <CardContent className="flex items-start justify-between gap-3 p-0">
                            <div className="flex flex-col gap-2 text-sm">
                                <p>0987654236</p>
                                <p>Saint Morris & Sons hoodlum Store</p>
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    className="font-medium text-sm self-start px-2 py-1"
                                >
                                    Change
                                </Button>
                            </div>

                            <RadioGroup defaultValue="selected">
                                <RadioGroupItem value="selected" className="w-6 h-6" />
                            </RadioGroup>
                        </CardContent>
                    </Card>

                    <Button type="button" variant="outline" className="w-full font-medium text-base">
                        + Add Account
                    </Button>

                    <div className="flex justify-between">
                        <Button type="button" variant="outline" className="px-6 text-base">
                            Cancel
                        </Button>
                        <Link
                            href={"/wallet?withdraw=amount"}
                            type="button"
                            className={cn(buttonVariants({ variant: "primary" }), "px-6 text-base")}
                        >
                            Proceed
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SelectAccount;
