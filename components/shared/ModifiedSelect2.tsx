import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const ModifiedSelect2 = ({
    placeholder,
    options,
}: {
    placeholder: string;
    options: { value: string; label: string }[];
    itemClassName?: string;
}) => {
    return (
        <Select>
            <SelectTrigger className="w-full text-kaiglo_grey-900">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="w-full">
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    {options.map((option) => {
                        const { value, label } = option;
                        return (
                            // <div key={value} className="bg-blue-500">
                            <SelectItem key={value} value={value} className="min-w-full">
                                {label}
                            </SelectItem>
                            // </div>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
export default ModifiedSelect2;
