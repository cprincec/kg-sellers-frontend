"use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IconCalendar } from "@/public/icons/icons";
import Image from "next/image";
import { handleDateChange } from "../utils/datePicker.utils";

const DateRangePicker = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    const [date, setDate] = React.useState<DateRange | undefined>(undefined);
    const router = useRouter();
    const searchParams = useSearchParams();

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "lg:w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <div className="relative w-5 h-5">
                            <Image src={IconCalendar} alt="calendar" />
                        </div>
                        <div className="hidden md:block">
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "dd/MM/yyyy")} - {format(date.to, "dd/MM/yyyy")}
                                    </>
                                ) : (
                                    format(date.from, "dd/MM/yyyy")
                                )
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(newDate) => handleDateChange(setDate, newDate, router, searchParams)}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateRangePicker;
