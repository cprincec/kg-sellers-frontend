"use client";

import { IBank } from "@/app/(auth)/lib/interfaces/interface";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/utils";

const ModifiedBankSelect = ({
    onChange,
    banks,
    value,
}: {
    value: string;
    banks: IBank[];
    onChange: (value: string) => void;
    itemClassName?: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="w-full">
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between h-12 px-3 py-1 border-kaiglo_grey-disabled font-normal text-sm md:text-base text-kaiglo_grey-900 transition-colors"
                >
                    {value ? (
                        value.split("-")[1]
                    ) : (
                        <span className="text-kaiglo_grey-placeholder">Bank name</span>
                    )}
                    <ChevronDown
                        className={cn(
                            "h-6 w-6 text-kaiglo_grey-900 transition-transform duration-200",
                            open && "rotate-180"
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width]">
                <Command>
                    <CommandInput placeholder="Search bank" className="h-9" />
                    <CommandList>
                        <CommandEmpty>No bank found.</CommandEmpty>
                        <CommandGroup>
                            {banks.map((bank) => {
                                const { id, name } = bank;
                                return (
                                    <CommandItem
                                        key={id}
                                        value={`${id}-${name}`}
                                        onSelect={(value) => {
                                            onChange(value);
                                            setOpen(false);
                                        }}
                                    >
                                        {name}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
export default ModifiedBankSelect;
