import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import ProductVariantsFormFields from "./ProductVariantsFormFields";
import { IProductVariantsFormValues } from "../../../lib/interface";
import { productVariantsSchema } from "../../../lib/schemas";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import ProductVariantsTable from "./ProductVariantsTable";
import { productVariants } from "../../../lib/data";

const ProductVariantsForm = ({ className }: { className?: string }) => {
    const { setSearchParams, deleteSearchParams } = useUpdateSearchParams();
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IProductVariantsFormValues>({
        defaultValues: {
            images: [],
            color: "",
            size: "",
            quantity: 0,
            price: 0,
        },
        resolver: yupResolver(productVariantsSchema) as unknown as Resolver<IProductVariantsFormValues>,
    });

    const saveProductVariants = (values: IProductVariantsFormValues) => {
        console.log(values);
        reset();
        deleteSearchParams(["action"]);
        setShowForm(false);
    };
    const searchParams = useSearchParams();
    const [showForm, setShowForm] = useState<boolean>(searchParams.get("action") === "add-variant" || false);

    return (
        <div className={cn("grid gap-6 overflow-hidden", className)}>
            <div className="lg:w-full grid lg:flex lg:justify-between gap-4 p-4 lg:px-6 lg:pb-6">
                <div className="grid gap-2">
                    <h3 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h3>
                    <p className="text-sm">Same products with different features can be added as variants</p>
                </div>
                {!showForm && (
                    <Button
                        type="button"
                        onClick={() => {
                            setSearchParams([{ action: "add-variant" }]);
                            setShowForm(true);
                        }}
                        variant={"ghost"}
                        className="bg-transparent text-kaiglo_success-base text-sm justify-self-start p-1 pl-0"
                    >
                        Add variant
                    </Button>
                )}
            </div>

            {showForm && (
                <form
                    onSubmit={handleSubmit(saveProductVariants)}
                    className="grid gap-5 p-4 lg:px-6 lg:pb-6 lg:border-b"
                >
                    <ProductVariantsFormFields control={control} errors={errors} />

                    <Button
                        type="submit"
                        variant={"secondary"}
                        className="text-sm text-kaiglo_success-base justify-self-end p-3 bg-kaiglo_success-100 rounded-lg"
                    >
                        Add variant
                    </Button>
                </form>
            )}

            <div className="p-4 lg:px-6">
                <ProductVariantsTable productVariants={productVariants} />
            </div>

            <div className="p-4">
                <FormNavButtons
                    cancelFunc={() => {
                        setSearchParams([{ step: "product-details" }]);
                    }}
                    cancelButtonText="Previous"
                    submitButtonText="Preview"
                    submitButtonFunc={() => {
                        router.push("/products/add-product/preview");
                    }}
                    className="hidden md:flex gap-3 justify-between"
                />
                <FormNavButtons
                    cancelFunc={() => {
                        setSearchParams([{ step: "product-details" }]);
                    }}
                    submitButtonFunc={() => {
                        router.push("/products/add-product/preview");
                    }}
                    cancelButtonText="Previous"
                    submitButtonText="Preview"
                    className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
                />
            </div>
        </div>
    );
};

export default ProductVariantsForm;
