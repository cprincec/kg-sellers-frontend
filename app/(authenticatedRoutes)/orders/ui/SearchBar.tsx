"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({
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

    const handleSearch = useDebouncedCallback((searchTerm: string) => {
        if (!searchTerm.trim()) {
            replace(`${pathname}`);
            return;
        }
        // const params = new URLSearchParams(searchParams);
        // if (searchTerm) params.set("searching-for", searchTerm);
        // else params.delete("searching-for");
        // replace(`${pathname}?${params.toString()}`, { scroll: scroll });
        replace(`${pathname}?searching-for=${searchTerm}`, { scroll: scroll });
    }, 300);

    return (
        <div className={`relative w-full ${className || ""}`}>
            <Input
                name="searchingFor"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                className="pl-9 h-full w-full py-3 text-base"
                placeholder={placeholder}
                defaultValue={searchParams.get("searching-for") ?? ""}
            />
            <SearchIcon className="absolute top-1/4 left-2 text-kaiglo_grey-400" />
        </div>
    );
};

export default SearchBar;
