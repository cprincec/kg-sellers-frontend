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
