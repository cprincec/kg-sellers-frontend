"use client";

import AccountRecoveryForm from "../ui/recoverAccount/AccountRecoveryForm";
import { LogoWithAccountRecoveryText } from "../ui/shared/LogoWithWelcomeText";
import { RECOVER_ACCOUNT_TEXTS } from "@/lib/consts";
const RecoverAccount = () => {
    return (
        <div className="h-screen bg-kaiglo_success-25 flex items-center justify-center">
            <section className="text-center bg-white w-[90%] md:w-[500px] p-4 md:p-6 grid gap-8 rounded-3xl shadow">
                <LogoWithAccountRecoveryText
                    title={RECOVER_ACCOUNT_TEXTS.title}
                    subtitle={RECOVER_ACCOUNT_TEXTS.subtitle}
                />
                <AccountRecoveryForm />
            </section>
        </div>
    );
};

export default RecoverAccount;
