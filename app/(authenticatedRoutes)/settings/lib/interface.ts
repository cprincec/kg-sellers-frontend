import { IBankDetails } from "@/app/(auth)/lib/interfaces/interface";
import { FC } from "react";

// ============================================================================
// Store Vacation Related Interfaces
// ============================================================================

/*********** STORE SETUP FORM DTO ***********/
export interface IStoreVacationFormDTO {
    isPaused?: boolean;
    isDeleted?: boolean;
}

export interface ISettingsMobileContent {
    id: string;
    component: FC;
    props?: { [key: string]: string };
}

export interface IVerifyBankAccountResponse {
    status: boolean;
    message: string;
    data: Omit<IBankDetails, "id" | "bank"> & { bank_id: string };
}
