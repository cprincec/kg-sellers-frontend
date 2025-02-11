"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

interface IconProps {
    className?: string;
}

export const HomeIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`stroke-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 15.1826V12.6826" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M8.39172 2.53217L2.61672 7.15717C1.96672 7.67383 1.55006 8.7655 1.69172 9.58217L2.80006 16.2155C3.00006 17.3988 4.13339 18.3572 5.33339 18.3572L14.6667 18.3572C15.8584 18.3572 17.0001 17.3905 17.2001 16.2155L18.3084 9.58217C18.4417 8.7655 18.0251 7.67383 17.3834 7.15717L11.6084 2.5405C10.7167 1.82383 9.27506 1.82383 8.39172 2.53217Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const BoxIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`stroke-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.64172 6.38281L10.0001 10.6411L17.3084 6.40781"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M10 18.1911L10 10.6328" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M8.27503 2.24968L3.82503 4.71635C2.8167 5.27468 1.9917 6.67468 1.9917 7.82468L1.9917 12.533C1.9917 13.683 2.8167 15.083 3.82503 15.6413L8.27503 18.1163C9.22503 18.6413 10.7834 18.6413 11.7334 18.1163L16.1834 15.6413C17.1917 15.083 18.0167 13.683 18.0167 12.533L18.0167 7.82468C18.0167 6.67468 17.1917 5.27468 16.1834 4.71635L11.7334 2.24135C10.775 1.71635 9.22503 1.71635 8.27503 2.24968Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const TagIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`fill-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_6700_3724" fill="white">
                <path d="M10.0583 18.4997C8.88328 18.4997 7.69995 18.0497 6.80828 17.158L3.03329 13.383C2.11662 12.4663 1.63328 11.1997 1.69162 9.90801L1.89162 5.74134C1.98328 3.74967 3.55828 2.17467 5.55828 2.07467L9.72495 1.87467C11.0166 1.82467 12.2833 2.29967 13.2 3.21634L16.975 6.99134C18.7666 8.78301 18.7666 11.708 16.975 13.4997L13.3166 17.158C12.4166 18.0497 11.2416 18.4997 10.0583 18.4997ZM3.91662 12.4913L7.69162 16.2663C8.32495 16.8997 9.16662 17.2497 10.0583 17.2497C10.95 17.2497 11.7916 16.8997 12.425 16.2663L16.0833 12.608C16.7166 11.9747 17.0666 11.133 17.0666 10.2413C17.0666 9.34967 16.7166 8.50801 16.0833 7.87467L12.3083 4.09967C11.6416 3.43301 10.7166 3.07467 9.78329 3.12467L5.61662 3.32467C4.25828 3.38301 3.19995 4.44134 3.13328 5.79134L2.93328 9.95801C2.89162 10.8997 3.24995 11.8247 3.91662 12.4913Z" />
            </mask>
            <path d="M10.0583 18.4997C8.88328 18.4997 7.69995 18.0497 6.80828 17.158L3.03329 13.383C2.11662 12.4663 1.63328 11.1997 1.69162 9.90801L1.89162 5.74134C1.98328 3.74967 3.55828 2.17467 5.55828 2.07467L9.72495 1.87467C11.0166 1.82467 12.2833 2.29967 13.2 3.21634L16.975 6.99134C18.7666 8.78301 18.7666 11.708 16.975 13.4997L13.3166 17.158C12.4166 18.0497 11.2416 18.4997 10.0583 18.4997ZM3.91662 12.4913L7.69162 16.2663C8.32495 16.8997 9.16662 17.2497 10.0583 17.2497C10.95 17.2497 11.7916 16.8997 12.425 16.2663L16.0833 12.608C16.7166 11.9747 17.0666 11.133 17.0666 10.2413C17.0666 9.34967 16.7166 8.50801 16.0833 7.87467L12.3083 4.09967C11.6416 3.43301 10.7166 3.07467 9.78329 3.12467L5.61662 3.32467C4.25828 3.38301 3.19995 4.44134 3.13328 5.79134L2.93328 9.95801C2.89162 10.8997 3.24995 11.8247 3.91662 12.4913Z" />
            <path
                d="M6.80828 17.158L5.74762 18.2187L6.80828 17.158ZM3.03329 13.383L4.09395 12.3223L3.03329 13.383ZM1.69162 9.90801L0.193337 9.83609L0.193146 9.84033L1.69162 9.90801ZM1.89162 5.74134L3.3899 5.81326L3.39003 5.81031L1.89162 5.74134ZM5.55828 2.07467L5.48637 0.576396L5.48338 0.576546L5.55828 2.07467ZM9.72495 1.87467L9.66693 0.375732L9.65303 0.376399L9.72495 1.87467ZM13.2 3.21634L14.2606 2.15568V2.15568L13.2 3.21634ZM16.975 6.99134L15.9143 8.052L16.975 6.99134ZM16.975 13.4997L15.9143 12.439L16.975 13.4997ZM13.3166 17.158L14.3723 18.2236L14.3773 18.2187L13.3166 17.158ZM3.91662 12.4913L2.85596 13.552L3.91662 12.4913ZM7.69162 16.2663L8.75228 15.2057L7.69162 16.2663ZM12.425 16.2663L13.4856 17.327L12.425 16.2663ZM16.0833 12.608L15.0226 11.5473L16.0833 12.608ZM16.0833 7.87467L15.0226 8.93533L16.0833 7.87467ZM12.3083 4.09967L13.3689 3.03901L13.3689 3.03901L12.3083 4.09967ZM9.78329 3.12467L9.8552 4.62297L9.86353 4.62253L9.78329 3.12467ZM5.61662 3.32467L5.68098 4.82331L5.68854 4.82295L5.61662 3.32467ZM3.13328 5.79134L1.63511 5.71736L1.63501 5.71942L3.13328 5.79134ZM2.93328 9.95801L1.435 9.88609L1.43475 9.8917L2.93328 9.95801ZM10.0583 16.9997C9.26223 16.9997 8.46623 16.6946 7.86895 16.0973L5.74762 18.2187C6.93367 19.4047 8.50434 19.9997 10.0583 19.9997V16.9997ZM7.86895 16.0973L4.09395 12.3223L1.97262 14.4437L5.74762 18.2187L7.86895 16.0973ZM4.09395 12.3223C3.47941 11.7078 3.1505 10.8524 3.19009 9.97568L0.193146 9.84033C0.116073 11.5469 0.75383 13.2249 1.97262 14.4437L4.09395 12.3223ZM3.18989 9.97992L3.38989 5.81326L0.393343 5.66942L0.193343 9.83609L3.18989 9.97992ZM3.39003 5.81031C3.44592 4.59593 4.39963 3.63448 5.63319 3.5728L5.48338 0.576546C2.71694 0.714868 0.520646 2.90342 0.393204 5.67238L3.39003 5.81031ZM5.6302 3.57295L9.79687 3.37295L9.65303 0.376399L5.48637 0.576399L5.6302 3.57295ZM9.78297 3.37355C10.6734 3.33908 11.5296 3.66733 12.1393 4.277L14.2606 2.15568C13.037 0.932022 11.3598 0.310266 9.66693 0.375797L9.78297 3.37355ZM12.1393 4.277L15.9143 8.052L18.0356 5.93068L14.2606 2.15568L12.1393 4.277ZM15.9143 8.052C17.1202 9.25788 17.1202 11.2331 15.9143 12.439L18.0356 14.5603C20.4131 12.1829 20.4131 8.30813 18.0356 5.93068L15.9143 8.052ZM15.9143 12.439L12.256 16.0973L14.3773 18.2187L18.0356 14.5603L15.9143 12.439ZM12.2609 16.0924C11.6514 16.6963 10.86 16.9997 10.0583 16.9997V19.9997C11.6233 19.9997 13.1818 19.4031 14.3723 18.2236L12.2609 16.0924ZM2.85596 13.552L6.63096 17.327L8.75228 15.2057L4.97728 11.4307L2.85596 13.552ZM6.63096 17.327C7.5438 18.2398 8.76626 18.7497 10.0583 18.7497V15.7497C9.56697 15.7497 9.1061 15.5595 8.75228 15.2057L6.63096 17.327ZM10.0583 18.7497C11.3503 18.7497 12.5728 18.2398 13.4856 17.327L11.3643 15.2057C11.0105 15.5595 10.5496 15.7497 10.0583 15.7497V18.7497ZM13.4856 17.327L17.1439 13.6687L15.0226 11.5473L11.3643 15.2057L13.4856 17.327ZM17.1439 13.6687C18.0568 12.7558 18.5666 11.5334 18.5666 10.2413H15.5666C15.5666 10.7327 15.3764 11.1935 15.0226 11.5473L17.1439 13.6687ZM18.5666 10.2413C18.5666 8.94932 18.0568 7.72686 17.1439 6.81401L15.0226 8.93533C15.3764 9.28916 15.5666 9.75003 15.5666 10.2413H18.5666ZM17.1439 6.81401L13.3689 3.03901L11.2476 5.16033L15.0226 8.93533L17.1439 6.81401ZM13.3689 3.03901C12.4057 2.07575 11.0677 1.55372 9.70304 1.62682L9.86353 4.62253C10.3655 4.59563 10.8776 4.79027 11.2476 5.16033L13.3689 3.03901ZM9.71137 1.6264L5.5447 1.8264L5.68854 4.82295L9.8552 4.62295L9.71137 1.6264ZM5.55226 1.82606C3.41745 1.91773 1.73988 3.59573 1.63511 5.71736L4.63146 5.86532C4.66002 5.28696 5.09912 4.84828 5.68098 4.82329L5.55226 1.82606ZM1.63501 5.71942L1.43501 9.88609L4.43156 10.0299L4.63156 5.86326L1.63501 5.71942ZM1.43475 9.8917C1.37453 11.2527 1.89091 12.5869 2.85596 13.552L4.97728 11.4307C4.609 11.0624 4.40871 10.5467 4.43182 10.0243L1.43475 9.8917Z"
                mask="url(#path-1-inside-1_6700_3724)"
            />
            <mask id="path-3-inside-2_6700_3724" fill="white">
                <path d="M7.91671 10.8073C6.42504 10.8073 5.20837 9.59062 5.20837 8.09896C5.20837 6.60729 6.42504 5.39062 7.91671 5.39062C9.40837 5.39062 10.625 6.60729 10.625 8.09896C10.625 9.59062 9.40837 10.8073 7.91671 10.8073ZM7.91671 6.64062C7.11671 6.64062 6.45837 7.29896 6.45837 8.09896C6.45837 8.89896 7.11671 9.55729 7.91671 9.55729C8.71671 9.55729 9.37504 8.89896 9.37504 8.09896C9.37504 7.29896 8.71671 6.64062 7.91671 6.64062Z" />
            </mask>
            <path d="M7.91671 10.8073C6.42504 10.8073 5.20837 9.59062 5.20837 8.09896C5.20837 6.60729 6.42504 5.39062 7.91671 5.39062C9.40837 5.39062 10.625 6.60729 10.625 8.09896C10.625 9.59062 9.40837 10.8073 7.91671 10.8073ZM7.91671 6.64062C7.11671 6.64062 6.45837 7.29896 6.45837 8.09896C6.45837 8.89896 7.11671 9.55729 7.91671 9.55729C8.71671 9.55729 9.37504 8.89896 9.37504 8.09896C9.37504 7.29896 8.71671 6.64062 7.91671 6.64062Z" />
            <path
                d="M7.91671 9.30729C7.25347 9.30729 6.70837 8.7622 6.70837 8.09896H3.70837C3.70837 10.4191 5.59661 12.3073 7.91671 12.3073L7.91671 9.30729ZM6.70837 8.09896C6.70837 7.43572 7.25347 6.89062 7.91671 6.89062V3.89062C5.59661 3.89062 3.70837 5.77886 3.70837 8.09896H6.70837ZM7.91671 6.89062C8.57995 6.89062 9.12504 7.43572 9.12504 8.09896L12.125 8.09896C12.125 5.77886 10.2368 3.89062 7.91671 3.89062V6.89062ZM9.12504 8.09896C9.12504 8.7622 8.57995 9.30729 7.91671 9.30729L7.91671 12.3073C10.2368 12.3073 12.125 10.4191 12.125 8.09896L9.12504 8.09896ZM7.91671 5.14062C6.28828 5.14062 4.95837 6.47053 4.95837 8.09896H7.95837C7.95837 8.10637 7.95657 8.11482 7.95373 8.12148C7.95135 8.12707 7.9491 8.12955 7.9482 8.13045C7.9473 8.13136 7.94482 8.1336 7.93923 8.13598C7.93257 8.13882 7.92412 8.14062 7.91671 8.14062L7.91671 5.14062ZM4.95837 8.09896C4.95837 9.72739 6.28828 11.0573 7.91671 11.0573L7.91671 8.05729C7.92412 8.05729 7.93257 8.05909 7.93923 8.06193C7.94482 8.06431 7.9473 8.06656 7.9482 8.06746C7.9491 8.06837 7.95135 8.07084 7.95373 8.07643C7.95657 8.0831 7.95837 8.09155 7.95837 8.09896H4.95837ZM7.91671 11.0573C9.54513 11.0573 10.875 9.72739 10.875 8.09896L7.87504 8.09896C7.87504 8.09155 7.87684 8.0831 7.87968 8.07643C7.88206 8.07084 7.88431 8.06837 7.88521 8.06746C7.88612 8.06656 7.88859 8.06431 7.89418 8.06193C7.90085 8.05909 7.9093 8.05729 7.91671 8.05729L7.91671 11.0573ZM10.875 8.09896C10.875 6.47053 9.54513 5.14062 7.91671 5.14062L7.91671 8.14062C7.9093 8.14062 7.90085 8.13882 7.89418 8.13598C7.88859 8.1336 7.88612 8.13136 7.88521 8.13045C7.88431 8.12955 7.88206 8.12707 7.87968 8.12148C7.87684 8.11482 7.87504 8.10637 7.87504 8.09896L10.875 8.09896Z"
                mask="url(#path-3-inside-2_6700_3724)"
            />
        </svg>
    );
};

export const MoneyExchangeIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`stroke-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.3333 9.76628L18.3333 4.44459C18.3333 3.78544 18.3333 3.45586 18.1715 3.116C18.0793 2.92215 17.8692 2.65847 17.7008 2.52526C17.4056 2.2917 17.1593 2.23528 16.6666 2.12244C15.9002 1.9469 15.0549 1.84961 14.1666 1.84961C12.5691 1.84961 11.1104 2.16431 9.99996 2.68294C8.88951 3.20158 7.43085 3.51628 5.83329 3.51628C4.94502 3.51628 4.0997 3.41899 3.33329 3.24345C2.53332 3.06022 1.66663 3.62389 1.66663 4.44458L1.66663 13.4213C1.66663 14.0804 1.66663 14.41 1.82839 14.7499C1.92065 14.9437 2.13076 15.2074 2.29911 15.3406C2.59429 15.5742 2.84062 15.6306 3.33329 15.7434C4.0997 15.919 4.94502 16.0163 5.83329 16.0163C7.05733 16.0163 8.19982 15.8315 9.16663 15.5119"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M12.0833 8.93294C12.0833 10.0835 11.1506 11.0163 9.99996 11.0163C8.84937 11.0163 7.91663 10.0835 7.91663 8.93294C7.91663 7.78235 8.84937 6.84961 9.99996 6.84961C11.1506 6.84961 12.0833 7.78235 12.0833 8.93294Z"
                strokeWidth="1.5"
            />
            <path
                d="M4.58325 9.7666L4.58325 9.77409"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.4166 8.09277L15.4166 8.10026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.1111 11.8496L16.797 12.4812C16.9464 12.6279 17.021 12.7013 16.9948 12.7637C16.9685 12.826 16.8629 12.826 16.6517 12.826L14.0647 12.826C12.7403 12.826 11.6666 13.8813 11.6666 15.1829C11.6666 15.4763 11.7212 15.7572 11.8208 16.0163M13.8888 18.5163L13.2029 17.8847C13.0535 17.7379 12.9789 17.6646 13.0051 17.6022C13.0314 17.5398 13.137 17.5398 13.3482 17.5398H15.9352C17.2596 17.5398 18.3333 16.4846 18.3333 15.1829C18.3333 14.8896 18.2788 14.6087 18.1791 14.3496"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const WalletIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`stroke-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.8334 7.68262L5.83337 7.68262"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3333 9.32457V11.0413C18.3333 11.4996 17.9667 11.8746 17.5 11.8913H15.8667C14.9667 11.8913 14.1417 11.2329 14.0667 10.3329C14.0167 9.80793 14.2167 9.31626 14.5667 8.97459C14.875 8.65792 15.3 8.47461 15.7667 8.47461H17.5C17.9667 8.49128 18.3333 8.86624 18.3333 9.32457Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.5666 8.9746C14.2166 9.31627 14.0166 9.80794 14.0666 10.3329C14.1416 11.2329 14.9666 11.8913 15.8666 11.8913H17.5V13.0996C17.5 15.5996 15.8333 17.2663 13.3333 17.2663L5.83329 17.2663C3.33329 17.2663 1.66663 15.5996 1.66663 13.0996L1.66663 7.26628C1.66663 4.99961 3.03329 3.41627 5.15829 3.14961C5.37496 3.11627 5.59996 3.09961 5.83329 3.09961L13.3333 3.09961C13.55 3.09961 13.7583 3.10793 13.9583 3.14127C16.1083 3.39127 17.5 4.98294 17.5 7.26628V8.47462H15.7666C15.2999 8.47462 14.8749 8.65793 14.5666 8.9746Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const SettingsIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={`stroke-[#344054] ${className}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.75 7.86549C15.2416 7.86549 14.625 6.79882 15.375 5.49049C15.8083 4.73216 15.55 3.76549 14.7916 3.33216L13.35 2.50716C12.6916 2.11549 11.8416 2.34882 11.45 3.00716L11.3583 3.16549C10.6083 4.47382 9.37496 4.47382 8.61663 3.16549L8.52496 3.00716C8.14996 2.34882 7.29996 2.11549 6.64163 2.50716L5.19996 3.33216C4.44163 3.76549 4.18329 4.74049 4.61663 5.49882C5.37496 6.79882 4.75829 7.86549 3.24996 7.86549C2.38329 7.86549 1.66663 8.57382 1.66663 9.44882L1.66663 10.9155C1.66663 11.7822 2.37496 12.4988 3.24996 12.4988C4.75829 12.4988 5.37496 13.5655 4.61663 14.8738C4.18329 15.6322 4.44163 16.5988 5.19996 17.0322L6.64163 17.8572C7.29996 18.2488 8.14996 18.0155 8.54163 17.3572L8.63329 17.1988C9.38329 15.8905 10.6166 15.8905 11.375 17.1988L11.4666 17.3572C11.8583 18.0155 12.7083 18.2488 13.3666 17.8572L14.8083 17.0322C15.5666 16.5988 15.825 15.6238 15.3916 14.8738C14.6333 13.5655 15.25 12.4988 16.7583 12.4988C17.625 12.4988 18.3416 11.7905 18.3416 10.9155L18.3416 9.44882C18.3333 8.58216 17.625 7.86549 16.75 7.86549ZM9.99996 12.8905C8.50829 12.8905 7.29163 11.6738 7.29163 10.1822C7.29163 8.69049 8.50829 7.47382 9.99996 7.47382C11.4916 7.47382 12.7083 8.69049 12.7083 10.1822C12.7083 11.6738 11.4916 12.8905 9.99996 12.8905Z"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export const NotificationIcon = ({ className }: IconProps) => {
    return (
        <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5356_9451)">
                <path
                    d="M14.3333 10.6663L14.8223 11.235C15.0947 11.0007 15.1627 10.6062 14.9845 10.2942L14.3333 10.6663ZM1.66663 10.6663L1.01544 10.2942C0.837183 10.6062 0.905203 11.0007 1.17763 11.235L1.66663 10.6663ZM13 8.33301H12.25V8.53218L12.3488 8.70511L13 8.33301ZM2.99996 8.33301L3.65114 8.70511L3.74996 8.53218V8.33301H2.99996ZM7.99996 13.4163C10.7445 13.4163 13.2459 12.5906 14.8223 11.235L13.8443 10.0977C12.6055 11.1629 10.4826 11.9163 7.99996 11.9163V13.4163ZM1.17763 11.235C2.75406 12.5906 5.25539 13.4163 7.99996 13.4163V11.9163C5.5173 11.9163 3.39446 11.1629 2.15562 10.0977L1.17763 11.235ZM14.9845 10.2942L13.6511 7.9609L12.3488 8.70511L13.6821 11.0384L14.9845 10.2942ZM13.75 8.33301V6.33301H12.25V8.33301H13.75ZM2.24996 6.33301V8.33301H3.74996V6.33301H2.24996ZM2.34878 7.9609L1.01544 10.2942L2.31781 11.0384L3.65114 8.70511L2.34878 7.9609ZM7.99996 0.583008C4.82432 0.583008 2.24996 3.15737 2.24996 6.33301H3.74996C3.74996 3.9858 5.65275 2.08301 7.99996 2.08301V0.583008ZM13.75 6.33301C13.75 3.15737 11.1756 0.583008 7.99996 0.583008V2.08301C10.3472 2.08301 12.25 3.9858 12.25 6.33301H13.75Z"
                    fill="#141B34"
                />
                <path
                    d="M10.6666 11.9993C10.6666 13.4721 9.47268 14.666 7.99992 14.666C6.52716 14.666 5.33325 13.4721 5.33325 11.9993"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_5356_9451">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const MenuIcon = ({ className }: IconProps) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 7H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 12H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 17H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export const ProfileIcon = () => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                onClick={() => setShowDropDown((prev) => !prev)}
                className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex justify-center items-center rounded-full bg-[#D0F5FC] shadow-[0px_1px_2px_0px_#E4FBFF]"
            >
                <strong>IU</strong>
            </Button>

            {showDropDown && (
                <div
                    className={clsx(
                        "z-20 absolute top-16 md:top-20 right-4 w-[250px] p-4 grid gap-6 bg-white border border-kaiglo_grey-200 rounded-xl shadow-[0px_8px_24px_0px_#00000014] transition-all duration-300",
                        "animate-slideDownFade"
                    )}
                >
                    <div className="flex gap-2 items-center">
                        <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex justify-center items-center rounded-full bg-[#D0F5FC] shadow-[0px_1px_2px_0px_#E4FBFF]">
                            <strong>IU</strong>
                        </div>
                        <div>
                            <h3 className="font-medium text-sm">Isaac Udom</h3>
                            <p className="text-sm">Samson@gmail.com</p>
                        </div>
                    </div>
                    <div className="grid gap-4 font-medium">
                        <div className="flex gap-2 items-center">
                            <SettingsIcon2 className="w-5 h-5" /> Settings
                        </div>
                        <div className="flex gap-2 items-center">
                            <HelpCenterIcon className="w-5 h-5" /> Help Center
                        </div>
                        <div className="flex gap-2 items-center text-kaiglo_critical-base">
                            <LogOutIcon className="w-5 h-5" /> Log Out
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export const SettingsIcon2 = ({ className }: { className: string }) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.3333 6.04175H13.3333C12.9916 6.04175 12.7083 5.75841 12.7083 5.41675C12.7083 5.07508 12.9916 4.79175 13.3333 4.79175H18.3333C18.6749 4.79175 18.9583 5.07508 18.9583 5.41675C18.9583 5.75841 18.6749 6.04175 18.3333 6.04175Z"
                fill="#344054"
            />
            <path
                d="M5.00008 6.04175H1.66675C1.32508 6.04175 1.04175 5.75841 1.04175 5.41675C1.04175 5.07508 1.32508 4.79175 1.66675 4.79175H5.00008C5.34175 4.79175 5.62508 5.07508 5.62508 5.41675C5.62508 5.75841 5.34175 6.04175 5.00008 6.04175Z"
                fill="#344054"
            />
            <path
                d="M8.33341 8.95833C6.38341 8.95833 4.79175 7.36667 4.79175 5.41667C4.79175 3.46667 6.38341 1.875 8.33341 1.875C10.2834 1.875 11.8751 3.46667 11.8751 5.41667C11.8751 7.36667 10.2834 8.95833 8.33341 8.95833ZM8.33341 3.125C7.06675 3.125 6.04175 4.15 6.04175 5.41667C6.04175 6.68333 7.06675 7.70833 8.33341 7.70833C9.60008 7.70833 10.6251 6.68333 10.6251 5.41667C10.6251 4.15 9.60008 3.125 8.33341 3.125Z"
                fill="#344054"
            />
            <path
                d="M18.3333 15.2083H15C14.6583 15.2083 14.375 14.9249 14.375 14.5833C14.375 14.2416 14.6583 13.9583 15 13.9583H18.3333C18.675 13.9583 18.9583 14.2416 18.9583 14.5833C18.9583 14.9249 18.675 15.2083 18.3333 15.2083Z"
                fill="#344054"
            />
            <path
                d="M6.66675 15.2083H1.66675C1.32508 15.2083 1.04175 14.9249 1.04175 14.5833C1.04175 14.2416 1.32508 13.9583 1.66675 13.9583H6.66675C7.00841 13.9583 7.29175 14.2416 7.29175 14.5833C7.29175 14.9249 7.00841 15.2083 6.66675 15.2083Z"
                fill="#344054"
            />
            <path
                d="M11.6667 18.1251C9.71667 18.1251 8.125 16.5334 8.125 14.5834C8.125 12.6334 9.71667 11.0417 11.6667 11.0417C13.6167 11.0417 15.2083 12.6334 15.2083 14.5834C15.2083 16.5334 13.6167 18.1251 11.6667 18.1251ZM11.6667 12.2917C10.4 12.2917 9.375 13.3167 9.375 14.5834C9.375 15.8501 10.4 16.8751 11.6667 16.8751C12.9333 16.8751 13.9583 15.8501 13.9583 14.5834C13.9583 13.3167 12.9333 12.2917 11.6667 12.2917Z"
                fill="#344054"
            />
        </svg>
    );
};

export const HelpCenterIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.66675 18.5998C6.43341 18.5998 6.19173 18.5415 5.97507 18.4249C5.50007 18.1749 5.20842 17.6748 5.20842 17.1415V15.9582C2.69175 15.6999 1.04175 13.8498 1.04175 11.1998V6.19987C1.04175 3.3332 2.96675 1.4082 5.83342 1.4082H14.1667C17.0334 1.4082 18.9584 3.3332 18.9584 6.19987V11.1998C18.9584 14.0665 17.0334 15.9915 14.1667 15.9915H11.0251L7.47506 18.3582C7.23339 18.5166 6.95008 18.5998 6.66675 18.5998ZM5.83342 2.64986C3.68341 2.64986 2.29175 4.04153 2.29175 6.19153V11.1916C2.29175 13.3416 3.68341 14.7332 5.83342 14.7332C6.17508 14.7332 6.45842 15.0166 6.45842 15.3582V17.1332C6.45842 17.2416 6.52509 17.2916 6.56675 17.3166C6.60842 17.3416 6.69176 17.3666 6.78343 17.3082L10.4918 14.8416C10.5918 14.7749 10.7168 14.7332 10.8418 14.7332H14.1751C16.3251 14.7332 17.7168 13.3416 17.7168 11.1916V6.19153C17.7168 4.04153 16.3251 2.64986 14.1751 2.64986H5.83342Z"
                fill="#344054"
            />
            <path
                d="M9.99977 10.0916C9.6581 10.0916 9.37477 9.80822 9.37477 9.46655V9.29159C9.37477 8.32492 10.0831 7.84991 10.3498 7.66658C10.6581 7.45824 10.7581 7.31658 10.7581 7.09991C10.7581 6.68325 10.4164 6.34155 9.99977 6.34155C9.5831 6.34155 9.24146 6.68325 9.24146 7.09991C9.24146 7.44158 8.95812 7.72491 8.61646 7.72491C8.27479 7.72491 7.99146 7.44158 7.99146 7.09991C7.99146 5.99158 8.89143 5.09155 9.99977 5.09155C11.1081 5.09155 12.0081 5.99158 12.0081 7.09991C12.0081 8.04991 11.3081 8.5249 11.0498 8.6999C10.7248 8.91657 10.6248 9.05825 10.6248 9.29159V9.46655C10.6248 9.81655 10.3414 10.0916 9.99977 10.0916Z"
                fill="#344054"
            />
            <path
                d="M10 12.1667C9.65 12.1667 9.375 11.8834 9.375 11.5417C9.375 11.2001 9.65833 10.9167 10 10.9167C10.3417 10.9167 10.625 11.2001 10.625 11.5417C10.625 11.8834 10.35 12.1667 10 12.1667Z"
                fill="#344054"
            />
        </svg>
    );
};

export const LogOutIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.7001 18.5583H12.5918C8.89176 18.5583 7.10843 17.1 6.80009 13.8333C6.76676 13.4917 7.01676 13.1833 7.36676 13.15C7.70009 13.1166 8.01676 13.375 8.05009 13.7167C8.29176 16.3333 9.52509 17.3083 12.6001 17.3083H12.7084C16.1001 17.3083 17.3001 16.1083 17.3001 12.7167V7.28332C17.3001 3.89165 16.1001 2.69165 12.7084 2.69165H12.6001C9.50843 2.69165 8.27509 3.68332 8.05009 6.34998C8.00843 6.69165 7.71676 6.94998 7.36676 6.91665C7.01676 6.89165 6.76676 6.58332 6.79176 6.24165C7.07509 2.92498 8.86676 1.44165 12.5918 1.44165H12.7001C16.7918 1.44165 18.5418 3.19165 18.5418 7.28332V12.7167C18.5418 16.8083 16.7918 18.5583 12.7001 18.5583Z"
                fill="#FF242C"
            />
            <path
                d="M12.4999 10.625H3.0166C2.67493 10.625 2.3916 10.3417 2.3916 10C2.3916 9.65833 2.67493 9.375 3.0166 9.375H12.4999C12.8416 9.375 13.1249 9.65833 13.1249 10C13.1249 10.3417 12.8416 10.625 12.4999 10.625Z"
                fill="#FF242C"
            />
            <path
                d="M4.87503 13.4167C4.7167 13.4167 4.55837 13.3584 4.43337 13.2334L1.6417 10.4417C1.40003 10.2 1.40003 9.80003 1.6417 9.55837L4.43337 6.7667C4.67503 6.52503 5.07503 6.52503 5.3167 6.7667C5.55837 7.00837 5.55837 7.40837 5.3167 7.65003L2.9667 10L5.3167 12.35C5.55837 12.5917 5.55837 12.9917 5.3167 13.2334C5.20003 13.3584 5.03337 13.4167 4.87503 13.4167Z"
                fill="#FF242C"
            />
        </svg>
    );
};
