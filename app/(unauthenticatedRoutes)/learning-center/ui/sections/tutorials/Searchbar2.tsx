"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/utils";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar2 = ({
    placeholder,
    className,
    scroll = true,
}: {
    placeholder: string;
    className?: string;
    scroll?: boolean;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((searchTerm) => {
        const params = new URLSearchParams(searchParams);

        if (searchTerm) params.set("search-tutorials-for", searchTerm);
        else params.delete("search-tutorials-for");

        replace(`${pathname}?${params.toString()}`, { scroll: scroll });
    });

    return (
        <div className={cn("relative w-full", className)}>
            <Input
                name="searchingFor"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                className="h-[48px] w-full px-4 py-4 text-base border-[#A3A3A3] rounded-[72px]"
                placeholder={placeholder}
                defaultValue={searchParams.get("search-tutorials-for")?.toString()}
            />
            <div className="absolute top-[calc(50%-15px)] right-3 w-8 h-8 flex bg-kaiglo_accent-base rounded-full">
                <SearchIcon className="w-[18px] h-[18px] m-auto" />
            </div>
        </div>
    );
};

export default SearchBar2;
