import { Button } from "@/components/ui/button";

export const TableError = ({ title, retryFunction }: { title: string; retryFunction: () => void }) => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <p>{title}</p>
            <Button variant={"critical_solid"} onClick={() => retryFunction()}>
                Try again
            </Button>
        </div>
    );
};

export const SectionError = ({ title, retryFunction }: { title: string; retryFunction: () => void }) => {
    return (
        <div className="flex gap-2 p-3 items-center">
            <p>{title}</p>
            <Button onClick={() => retryFunction()} variant="critical_solid">
                Try again
            </Button>
        </div>
    );
};
