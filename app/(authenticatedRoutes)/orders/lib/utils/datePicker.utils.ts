import { SetStateAction } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

/******************************************************************
 * Update selected date from date range picker component
 * and add selected date range to url query parameters
 ******************************************************************/
export const handleDateChange = (
    setDate: React.Dispatch<SetStateAction<DateRange | undefined>>,
    newDate: DateRange | undefined,
    router: AppRouterInstance,
    searchParams: ReadonlyURLSearchParams
) => {
    if (!newDate) return;

    setDate(newDate);

    // Add selected date to url
    const params = new URLSearchParams(searchParams.toString());
    if (newDate.from) params.set("from", format(newDate.from, "dd-MM-yyyy"));
    else params.delete("from");

    if (newDate.to) params.set("to", format(newDate.to, "dd-MM-yyyy"));
    else params.delete("to");

    router.replace(`?${params.toString()}`, { scroll: false });
};
