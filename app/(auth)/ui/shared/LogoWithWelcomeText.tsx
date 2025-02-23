import { AccountRecoveryIcon, LogoIcon } from '../logos';

import { LogoWithWelcomeTextProps } from '../../interface';
import React from 'react'

export const LogoWithWelcomeText = ({ title, subtitle }: LogoWithWelcomeTextProps) => {
    return (
        <>
            <LogoIcon className="mx-auto rounded-lg p-4 shadow" />
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
