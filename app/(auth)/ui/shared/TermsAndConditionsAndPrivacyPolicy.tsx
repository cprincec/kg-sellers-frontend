import Link from 'next/link';
import { ROUTES } from '@/lib/consts';
import React from 'react'

const TermsAndConditionsAndPrivacyPolicy = () => {
    return (
        <p className="text-kaiglo_grey-600 text-sm mt-12 md:mt-12 text-center">
            By continuing, you agree to Kaiglo&apos;s{" "}
            <Link href={ROUTES.termsOfService} className="text-kaiglo_info-base">
                Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={ROUTES.privacyPolicy} className="text-kaiglo_info-base">
                Privacy Policy
            </Link>
        </p>
    );
};

export default TermsAndConditionsAndPrivacyPolicy