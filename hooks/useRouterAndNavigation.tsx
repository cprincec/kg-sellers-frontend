import { usePathname, useRouter, useSearchParams } from "next/navigation";

/******************************************************************
 * This custom hook calls three frquently used hooks in this
 * application, and return them.
 * This will prevent numerous repetition of calls to these hooks.
 ******************************************************************/
const useRouterAndNavigation = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    return { searchParams, pathname, router };
};

export default useRouterAndNavigation;
