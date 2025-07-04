"use client";

import { IconArrowBack, IconContinueWithGoogle, IconGoogle } from "@/public/icons/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ModifiedButton from "@/components/shared/ModifiedButton";
import { ModifiedButtonProps } from "@/interfaces/elements.interface";
import { useModalContext } from "@/app/contexts/modalContext";
import { signIn, signOut } from "next-auth/react";
import { cn } from "@/lib/utils/utils";
import { VariantProps } from "class-variance-authority";
import { useRouter, useSearchParams } from "next/navigation";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";

export const GoogleButton = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const param = searchParams.get("callbackUrl");
    const callbackUrl = param ? param : "/dashboard";

    return (
        <Button
            onClick={async () => {
                if (!navigator.onLine) {
                    showErrorToast({ title: "You are offline.", description: "Please connect to log in." });
                    return;
                }

                const result = await signIn("google", { callbackUrl, redirect: false });

                if (result?.error) {
                    handleError(result.error);
                } else {
                    if (result?.url) router.replace(result?.url);
                }
            }}
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

export const LogOutButton = ({
    children,
    className,
    variant,
}: {
    children: React.ReactNode;
    className: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
}) => {
    return (
        <Button
            autoFocus={false}
            type="button"
            aria-label="log-out"
            variant={variant || "ghost"}
            className={cn(className)}
            onClick={() => signOut({ callbackUrl: "/" })}
        >
            {children}
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
