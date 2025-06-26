import { AccountRecoveryIcon, LogoIcon } from "../logos";

import { LogoWithWelcomeTextProps } from "../../lib/interfaces/interface";
import React from "react";
import Link from "next/link";

export const LogoWithWelcomeText = ({ title, subtitle }: LogoWithWelcomeTextProps) => {
    return (
        <>
            <Link href={"/"}>
                <LogoIcon className="mx-auto rounded-lg p-4 shadow" />
            </Link>
            <div className="flex flex-col gap-3">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </>
    );
};

export const LogoWithAccountRecoveryText = ({ title, subtitle }: LogoWithWelcomeTextProps) => {
    return (
        <>
            <AccountRecoveryIcon className="mx-auto rounded-lg p-4 shadow" />
            <div className="flex flex-col gap-3">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </>
    );
};
