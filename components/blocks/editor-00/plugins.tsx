import { useState } from "react";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ContentEditable } from "@/components/editor/editor-ui/content-editable";
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin";
import { FontSizeToolbarPlugin } from "@/components/editor/plugins/toolbar/font-size-toolbar-plugin";
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin";
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin";
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin";
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph";
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading";
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list";
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list";
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list";
import { SubSuperToolbarPlugin } from "@/components/editor/plugins/toolbar/subsuper-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin";
import { HistoryToolbarPlugin } from "@/components/editor/plugins/toolbar/history-toolbar-plugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import {
    AutoLinkPlugin,
    createLinkMatcherWithRegExp,
    LinkMatcher,
} from "@lexical/react/LexicalAutoLinkPlugin";
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin";
import { FloatingLinkEditorPlugin } from "@/components/editor/plugins/toolbar/floating-link-editor-plugin";
import { BlockInsertPlugin } from "@/components/editor/plugins/toolbar/block-insert-plugin";
import { InsertTable } from "@/components/editor/plugins/toolbar/block-insert/insert-table";
import { TablePlugin } from "@/components/editor/plugins/table-plugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ParagraphNode, TextNode } from "lexical";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { InsertImage } from "@/components/editor/plugins/toolbar/block-insert/insert-image";
import { ImagesPlugin } from "@/components/editor/plugins/images-plugin";

export function Plugins({ readOnly, placeholder }: { readOnly: boolean; placeholder: string }) {
    const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);

    const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    const cellEditorConfig = {
        namespace: "TableCellEditor",
        onError: (error: Error) => {
            console.error("Table cell editor error:", error);
        },
        nodes: [
            HeadingNode,
            ParagraphNode,
            TextNode,
            QuoteNode,
            ListNode,
            ListItemNode,
            AutoLinkNode,
            LinkNode,
            TableNode,
            TableRowNode,
            TableCellNode,
        ],
        // Optional extras:
        // nodes: [/* any Lexical nodes you want in table cells */],
        // readOnly: false,
        // theme: {...},
    };
    const URL_MATCHER: LinkMatcher = createLinkMatcherWithRegExp(/(https?:\/\/[^\s]+)/, (text) => text);

    return (
        <div className="relative">
            {/* toolbar plugins */}
            {!readOnly && (
                <ToolbarPlugin>
                    {({}) => (
                        <div className="overflow-auto border-b-2 p-2 bg-kaiglo_grey-200">
                            <div className="flex flex-wrap items-center gap-3">
                                <HistoryToolbarPlugin />
                                <FontFamilyToolbarPlugin />
                                <FontSizeToolbarPlugin />
                                <FontFormatToolbarPlugin format="bold" />
                                <FontFormatToolbarPlugin format="italic" />
                                <FontFormatToolbarPlugin format="underline" />
                                <FontFormatToolbarPlugin format="strikethrough" />
                                <SubSuperToolbarPlugin />

                                <ElementFormatToolbarPlugin />
                                <BlockInsertPlugin>
                                    <InsertTable />
                                    <InsertImage />
                                </BlockInsertPlugin>
                                <BlockFormatDropDown>
                                    <FormatParagraph />
                                    <FormatHeading levels={["h1", "h2", "h3"]} />
                                    <FormatNumberedList />
                                    <FormatBulletedList />
                                    <FormatCheckList />
                                </BlockFormatDropDown>
                            </div>
                        </div>
                    )}
                </ToolbarPlugin>
            )}

            <div className="relative">
                <RichTextPlugin
                    contentEditable={
                        <div className="">
                            <div className="" ref={onRef}>
                                <ContentEditable placeholder={placeholder} readOnly={readOnly} />
                            </div>
                        </div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                {/* editor plugins */}
                <ListPlugin />
                <CheckListPlugin />
                <HistoryPlugin />

                <ClickableLinkPlugin />
                <AutoLinkPlugin matchers={[URL_MATCHER]} />
                <LinkPlugin />
                <FloatingLinkEditorPlugin
                    anchorElem={floatingAnchorElem}
                    isLinkEditMode={isLinkEditMode}
                    setIsLinkEditMode={setIsLinkEditMode}
                />
                <ImagesPlugin />
            </div>
            {/* actions plugins */}
            <TablePlugin cellEditorConfig={cellEditorConfig}>
                <div></div>
            </TablePlugin>
        </div>
    );
}
