/******************************************************************************
 * This hook returns two method that updates the current url search parameters
 * It uses the replace method from next/navigation useRouter hook.
 * The use of the replce method makes ensures the update url only
 * replaces the current url in the broswer history stack instead of
 * getting added to the stack
 ******************************************************************************/

import useRouterAndNavigation from "./useRouterAndNavigation";

const useUpdateSearchParams = () => {
    const { searchParams, router, pathname } = useRouterAndNavigation();

    const setSearchParams = (array: { [key: string]: string }[]) => {
        if (!array.length) return;

        const params = new URLSearchParams(searchParams);

        // loop through the array and
        // add each key value pair to the params object
        array.forEach((obj) => {
            // get the entries from the obj
            const entries = Object.entries(obj);

            // ensure only one key value pair are in an object
            if (entries.length !== 1) return;

            // get the key value pair
            const [key, value] = entries[0];

            if (!key || !value) return;

            params.set(key, value);
        });

        router.replace(`${pathname}?${params.toString()}`);
    };

    const deleteSearchParams = (keys: string[]) => {
        if (!keys.length) return;

        const params = new URLSearchParams(searchParams);

        // loop through the array and
        // remove each key value pair from the params object
        keys.forEach((key) => {
            if (!key) return;

            params.delete(key);
        });

        router.replace(`${pathname}?${params.toString()}`);
    };

    return { setSearchParams, deleteSearchParams };
};

export default useUpdateSearchParams;
