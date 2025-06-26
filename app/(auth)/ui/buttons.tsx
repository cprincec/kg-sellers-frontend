"use client";

import { IconArrowBack, IconContinueWithGoogle, IconGoogle } from "@/public/icons/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { ModifiedButtonProps } from "@/interfaces/elements.interface";
import { useModalContext } from "@/app/contexts/modalContext";
import { signIn } from "next-auth/react";

export const GoogleButton = () => {
    return (
        <Button
            onClick={() => signIn("google")}
            type="button"
            id="google-button"
            variant={"outline"}
            className="flex items-center justify-center py-4 md:py-4 text-kaiglo_grey-base text-base rounded-lg w-full border-kaiglo_grey-disabled"
        >
            <Image src={IconGoogle} alt="google-icon" width={19.54} height={20} className="w-auto h-auto" />
            <Image
                src={IconContinueWithGoogle}
                alt="continue-with-google"
                className="mt-1 w-auto h-auto"
                width={159}
                height={20}
            />
        </Button>
    );
};

export const ArrowBackLink = ({
    text,
    href,
    className,
}: {
    href: string;
    text?: string;
    className?: string;
}) => {
    const { setShowModal, setModalContent } = useModalContext();
    return (
        <Link
            onClick={() => {
                setShowModal(false);
                setModalContent(null);
            }}
            href={href}
            className={`flex items-center justify center gap-3 text-kaiglo_grey-800 font-medium ${className}`}
        >
            <Image src={IconArrowBack} alt="back-link" width={19.54} height={20} />
            <span>{text && text}</span>
        </Link>
    );
};

export const ArrowBackButton: React.FC<ModifiedButtonProps> = ({ value, className, variant, onClick }) => {
    const content = (
        <>
            <Image src={IconArrowBack} alt="back-button" width={19.54} height={20} />
            <span>{value && value}</span>
        </>
    );
    return (
        <ModifiedButton
            type="button"
            value={content}
            variant={variant}
            onClick={onClick}
            className={`flex items-center justify center gap-3 text-kaiglo_grey-800 font-medium ${className}`}
        />
    );
};
