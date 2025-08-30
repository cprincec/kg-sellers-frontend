"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import useGetStoreBankDetails from "@/app/(authenticatedRoutes)/settings/hooks/useGetBankDetails";
import { SelectAccountSkeleton } from "../skeletons";
import { SectionError } from "@/app/ui/errors";
import { useRouter } from "next/navigation";
import { useModalContext } from "@/app/contexts/modalContext";

const SelectAccount = () => {
    const { setSearchParams } = useUpdateSearchParams();
    const { setModalContent, setShowModal } = useModalContext();
    const router = useRouter();
    const {
        storeBankDetails,
        isFetchingStoreBankDetails,
        errorFetchingStoreBankDetail,
        refetchStoreBankDetails,
        isRefetchingStoreBankDetails,
    } = useGetStoreBankDetails();

    if (errorFetchingStoreBankDetail)
        return (
            <SectionError
                title="There was an error fetching bank details"
                retryFunction={refetchStoreBankDetails}
            />
        );

    const handleChangeBankDetails = () => {
        setShowModal(false);
        setModalContent(null);
        router.push("/settings?tab=payment-information");
    };

    return (
        <DialogContent className="w-[90%] md:max-w-[410px] m-auto outline-none p-8 gap-6 rounded-2xl">
            <DialogHeader className="mb-0 pb-0">
                <DialogTitle className="text-base text-kaiglo_grey-900 font-bold text-left mb-0 pb-0">
                    Selected bank below
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>

            {isFetchingStoreBankDetails || isRefetchingStoreBankDetails ? (
                <SelectAccountSkeleton />
            ) : (
                <div className="grid gap-8 rounded-lg bg-white w-full">
                    <Card className="grid gap-2 p-4 bg-[#F2F2F2] shadow-none mt-0">
                        <CardHeader className="p-0">
                            <CardTitle className="text-sm lg:text-base font-semibold">
                                {storeBankDetails?.bankName}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col items-start justify-between gap-3 p-0">
                            <div className="w-full flex justify-between gap-4 lg:gap-8 text-sm">
                                <div className="flex flex-col gap-2">
                                    <p className="text-kaiglo_grey-900 text-sm lg:text-base">
                                        {storeBankDetails?.accountNumber}
                                    </p>
                                    <p className="text-kaiglo_grey-900 text-sm lg:text-base">
                                        {storeBankDetails?.beneficiaryName} Saint Morris & Sons hoodlum Store
                                    </p>
                                </div>
                                <RadioGroup defaultValue="selected">
                                    <RadioGroupItem value="selected" className="w-6 h-6" />
                                </RadioGroup>
                            </div>

                            <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                className="font-medium text-sm self-start px-2 py-1 border-kaiglo_grey-placeholder"
                                onClick={handleChangeBankDetails}
                            >
                                Change
                            </Button>
                        </CardContent>
                    </Card>

                    <Button
                        type="button"
                        variant="outline"
                        className="w-full font-medium text-base border-kaiglo_grey-placeholder"
                        onClick={handleChangeBankDetails}
                    >
                        + Add Account
                    </Button>

                    <div className="flex justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            className="px-6 text-base border-kaiglo_grey-placeholder"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="button"
                            className={cn(buttonVariants({ variant: "primary" }), "px-6 text-base")}
                            onClick={() => setSearchParams([{ withdraw: "amount" }])}
                        >
                            Proceed
                        </Button>
                    </div>
                </div>
            )}
        </DialogContent>
    );
};

export default SelectAccount;
