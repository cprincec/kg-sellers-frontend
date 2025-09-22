import { JSX } from "react";
import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";

type Props = {
    placeholder: string;
    className?: string;
    placeholderClassName?: string;
    readOnly?: boolean;
};

export function ContentEditable({
    placeholder,
    className,
    placeholderClassName,
    readOnly,
}: Props): JSX.Element {
    return (
        <LexicalContentEditable
            className={
                className ??
                `ContentEditable__root relative block min-h-72 overflow-auto ${
                    readOnly ? "px-0" : "px-4 max-h-[800px]"
                } py-4 focus:outline-none text-kaiglo_grey-800`
            }
            aria-placeholder={placeholder}
            placeholder={
                <div
                    className={
                        placeholderClassName ??
                        `text-kaiglo_grey-placeholder pointer-events-none absolute top-0 left-0 overflow-hidden px-4 py-[18px] text-ellipsis select-none`
                    }
                >
                    {placeholder}
                </div>
            }
        />
    );
}
