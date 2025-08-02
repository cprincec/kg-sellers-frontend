"use client";

import { Input } from "@/components/ui/input";
import { format } from "date-fns";

const RunningPeriodDesktop = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
    return (
        <div className="grid gap-2 py-2">
            <p className="text-sm font-medium text-kaiglo_grey-700">Select date period</p>
            <div className="grid grid-cols-2 gap-6">
                <Input
                    type="text"
                    className="h-10 text-sm font-normal text-kaiglo_grey-placeholder disabled:opacity-100"
                    placeholder="Start Date"
                    value={format(startDate, "d MMMM yyyy")}
                    disabled
                />

                <Input
                    type="text"
                    className="h-10 text-sm font-normal text-kaiglo_grey-placeholder disabled:opacity-100"
                    placeholder="End Date"
                    value={format(endDate, "d MMMM yyyy")}
                    disabled
                />
            </div>
        </div>
    );
};

export default RunningPeriodDesktop;
