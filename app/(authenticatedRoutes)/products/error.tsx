/**
 * Error boundary for the products segment.
 * This component catches errors in the products segment and provides a fallback UI.
 **/

"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    useEffect(() => {
        // Log the error to an error reporting service or console
        console.error(error);
    }, [error]);

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-max">
            <div className="flex flex-col items-center gap-4">
                <h2>Something went wrong!</h2>
                <Button
                    className="mx-auto font-normal"
                    variant={"critical_solid"}
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </Button>
            </div>
        </div>
    );
};

export default Error;
