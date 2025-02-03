"use client";

import { AccountRecoveryIcon } from "../ui/logos";
import { ArrowBackLink } from "../ui/buttons";
import AccountRecoveryForm from "../ui/recoverAccount/account-recovery-form";

const RecoverAccount = () => {
    return (
        <div className="min-h-[100vh] bg-kaiglo_success-25 flex items-center justify-center">
            <section className="text-center bg-white w-[90%] md:w-[500px] p-4 md:p-6 grid gap-2 items-center rounded-3xl shadow">
                <AccountRecoveryIcon className="w-fit mx-auto mb-4" />
                <h1 className="mb-1 text-xl md:text-3xl">Account Recovery</h1>
                <p>No worries, we will get it back.</p>

                {/* Account recovery form */}
                <AccountRecoveryForm />

                <ArrowBackLink href="/login" text={"Back to login"} className="mx-auto mt-4" />
            </section>
        </div>
    );
};

export default RecoverAccount;
