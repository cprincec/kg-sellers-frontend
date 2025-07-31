import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IconCalendar2 } from "@/public/icons/icons";
import { format } from "date-fns";

const RunningPeriodMobile = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
    return (
        <div className="grid gap-3 py-2">
            <p className="text-base font-medium text-kaiglo_grey-800">Select running period</p>
            <div className="grid gap-4">
                <div className="relative">
                    <Input
                        type="text"
                        className="h-12 text-sm font-normal text-kaiglo_grey-placeholder disabled:opacity-100"
                        placeholder="Start Date"
                        value={startDate && format(startDate, "d MMMM yyyy")}
                        disabled
                    />
                    <Image
                        src={IconCalendar2}
                        alt="calendar icon"
                        className="absolute top-0 translate-y-1/2 right-3 w-6 h-6"
                    />
                </div>

                <div className="relative">
                    <Input
                        type="text"
                        className="h-12 text-sm font-normal text-kaiglo_grey-placeholder disabled:opacity-100"
                        placeholder="End Date"
                        value={startDate && format(endDate, "d MMMM yyyy")}
                        disabled
                    />
                    <Image
                        src={IconCalendar2}
                        alt="calendar icon"
                        className="absolute top-0 translate-y-1/2 right-3 w-6 h-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default RunningPeriodMobile;
