"use client";

import { Editor } from "@/components/blocks/editor-00/editor";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import { useMemo } from "react";
import {
    isSerializedState,
    isHtmlString,
    convertHtmlToLexicalState,
} from "../../../lib/utils/addProduct.utils";

const ProductDescriptionSection = ({ productDetails }: { productDetails: IProductDetailsDTO }) => {
    const { description } = productDetails;

    // Convert HTML to Lexical state if needed
    const descriptionLexicalState = useMemo(() => {
        if (!description) return null;
        if (isSerializedState(description)) {
            return JSON.parse(description);
        }
        if (isHtmlString(description)) {
            return convertHtmlToLexicalState(description);
        }
        return null;
    }, [description]);

    return (
        <section className="grid gap-3 md:gap-4 p-4 md:px-6 pb-10 border-b">
            <h2 className="text-sm md:text-base font-medium">PRODUCT DESCRIPTION</h2>
            {description ? (
                descriptionLexicalState ? (
                    <Editor editorSerializedState={descriptionLexicalState} readOnly={true} placeholder="" />
                ) : (
                    <p className="text-sm text-kaiglo_grey-600">{description}</p>
                )
            ) : (
                <h3>No product description added</h3>
            )}
        </section>
    );
};

export default ProductDescriptionSection;
