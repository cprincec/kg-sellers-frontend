"use client";

import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconCalendar, IconExpand } from "@/public/icons/icons";
import Image from "next/image";
import { handleDateChange } from "../lib/utils/datePicker.utils";
import { useState } from "react";
import clsx from "clsx";

const DateRangePicker = ({ className }: { className?: string }) => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    return (
        <div className={className}>
            <Popover open={showDropDown} onOpenChange={setShowDropDown}>
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        id="date"
                        variant={"outline"}
                        className={cn("font-normal p-3", !date && "text-muted-foreground")}
                    >
                        <div className="relative w-5 h-5">
                            <Image src={IconCalendar} alt="calendar" />
                        </div>
                        <div className="hidden lg:block">
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "dd/MM/yyyy")} - {format(date.to, "dd/MM/yyyy")}
                                    </>
                                ) : (
                                    format(date.from, "dd/MM/yyyy")
                                )
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="mt-0.5">Filter by date</div>
                                    <div>
                                        <Image
                                            src={IconExpand}
                                            alt="expand"
                                            width={24}
                                            height={24}
                                            className={clsx("mt-0.5", showDropDown && "rotate-180")}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto max-h-[400px] overflow-y-auto p-0" align="center">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(newDate) => handleDateChange(setDate, newDate, router, searchParams)}
                        numberOfMonths={2}
                        className="h-full"
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateRangePicker;
