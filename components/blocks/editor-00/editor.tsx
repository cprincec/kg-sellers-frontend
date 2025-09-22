"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";

import { editorTheme } from "@/components/editor/themes/editor-theme";
import { TooltipProvider } from "@/components/ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import { cn } from "@/lib/utils/utils";

const editorConfig: InitialConfigType = {
    namespace: "Editor",
    theme: editorTheme,
    nodes,
    onError: (error: Error) => {
        console.error(error);
    },
};

export function Editor({
    editorState,
    editorSerializedState,
    onChange,
    onSerializedChange,
    readOnly = false,
    placeholder,
}: {
    editorState?: EditorState;
    editorSerializedState?: SerializedEditorState;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
    readOnly?: boolean;
    placeholder: string;
}) {
    return (
        <div
            className={cn(
                "overflow-auto rounded-lg max-sm:max-w-[calc(100vw-16px)]",
                !readOnly &&
                    " rounded-lg shadow-none border border-kaiglo_grey-disabled focus:outline-none focus:outline-none focus:border-[1.5px] focus:border-kaiglo_success-600 focus:shadow-input-shadow focus-visible:outline-none focus-visible:ring-ring"
            )}
        >
            <LexicalComposer
                initialConfig={{
                    editable: !readOnly,
                    ...editorConfig,
                    ...(editorState ? { editorState } : {}),
                    ...(editorSerializedState ? { editorState: JSON.stringify(editorSerializedState) } : {}),
                }}
            >
                <TooltipProvider>
                    <Plugins readOnly={readOnly} placeholder={placeholder} />

                    <OnChangePlugin
                        ignoreSelectionChange={true}
                        onChange={(editorState) => {
                            onChange?.(editorState);
                            onSerializedChange?.(editorState.toJSON());
                        }}
                    />
                </TooltipProvider>
            </LexicalComposer>
        </div>
    );
}
