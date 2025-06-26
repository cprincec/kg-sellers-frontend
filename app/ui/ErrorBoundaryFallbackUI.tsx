"use client";
import { Button } from "@/components/ui/button";

const ErrorBoundaryFallbackUI = ({
    error,
    resetErrorBoundary,
}: {
    error: Error & { digest?: string };
    resetErrorBoundary: () => void;
}) => {
    return (
        <div role="alert">
            <div className="flex flex-col items-center gap-4 mt-[40vh]">
                <h2>Something went wrong!</h2>
                {error.message && <h3>{error.message}</h3>}
                <Button
                    className="mx-auto font-normal"
                    variant={"critical_solid"}
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => resetErrorBoundary()
                    }
                >
                    Try again
                </Button>
            </div>
        </div>
    );
};

export default ErrorBoundaryFallbackUI;
