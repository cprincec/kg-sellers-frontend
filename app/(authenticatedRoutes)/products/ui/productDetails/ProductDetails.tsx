"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import ProductVariants from "./ProductVariants";
import { cn } from "@/lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useModalContext } from "@/app/contexts/modalContext";
import { useSearchParams } from "next/navigation";
import useGetRawProduct from "../../hooks/addProduct/useGetRawProduct";
import Loader from "@/app/ui/Loader";
import useGetProductDescription from "../../hooks/addProduct/useGetProductDescription";
import { generateProductDetailsDTO, generateProductVariantDTOs } from "../../lib/utils/addProduct.utils";
import Link from "next/link";
import ProductDetailsImageSection from "./ProductDetailsImageSection";
import ProductDetailsSpecificationsSection from "./ProductDetailsSpecificationsSection";
import ProductDetailsIntroSection from "./ProductDetailsIntroSection";

const ProductDetails = () => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent } = useModalContext();

    const productId = useSearchParams().get("product-id")?.trim();
    const { productRaw, isRefetchingProductRaw } = useGetRawProduct(productId ?? "");
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId ?? "");

    if (isRefetchingProductRaw || isFetchingProductDescription) return <Loader />;
    if (!productRaw) return null;

    const product = generateProductDetailsDTO(productRaw, productDescription ?? "");
    const variants = generateProductVariantDTOs(productRaw);

    return (
        <DialogContent
            className="w-[90%] md:w-[600px] md:max-w-[600px] max-h-[95%] m-auto overflow-y-auto outline-none p-4 md:px-5 md:py-6 rounded-xl gap-5"
            closeBtnClassName="md:hidden left-4 -ml-1 mt-0.5"
        >
            <div className="flex items-center justify-end gap-4 max-md:mb-5">
                <Button
                    onClick={() => {
                        setShowModal(false);
                        setModalContent(null);
                        deleteSearchParams(["product-id"]);
                    }}
                    variant={"ghost"}
                    className="hidden md:flex text-kaiglo_grey-700 text-sm px-3 py-1 bg-transparent"
                >
                    Cancel
                </Button>
                {productRaw.productStatus.status !== "PENDING" && (
                    <Link
                        onClick={() => {
                            setShowModal(false);
                            setModalContent(null);
                        }}
                        href={`/products/add-product/preview?product-id=${productRaw.id}&product-action=edit`}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "md:flex px-3 py-1 text-kaiglo_success-600 text-sm bg-transparent"
                        )}
                    >
                        Edit
                    </Link>
                )}
            </div>
            <DialogHeader>
                <DialogTitle className="font-medium text-base text-kaiglo_grey-900 text-left">
                    Product details
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
            <div className="grid gap-5">
                <ProductDetailsIntroSection product={productRaw} />
                <section className="grid gap-2">
                    <h2 className="text-sm ">Description</h2>
                    <p className="text-sm text-kaiglo_grey-600">{productDescription} </p>
                </section>
                <ProductDetailsSpecificationsSection product={product} />
                <ProductDetailsImageSection product={product} />
                <ProductVariants productVariants={variants} />
            </div>
        </DialogContent>
    );
};

export default ProductDetails;
