import Image, { StaticImageData } from "next/image";
import AddToSalesFormFieldsMobile from "./addToSalesFormFieldsMobile/AddToSalesFormFieldsMobile";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { ImageProduct1 } from "@/public/images/landingPage/images";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IProductDTO, IProductVariant, ProductVariant } from "../../lib/interface";
import AddToSalesFormFieldsDesktop from "./addToSalesFormFieldsDesktop/AddToSalesFormFieldsDesktop";

const AddToSalesContent = ({
    image,
    product,
    productVariants,
    productName,
    canBeAddedToSales,
}: {
    image: StaticImageData | string | undefined;
    product: IProductDTO;
    productVariants: IProductVariant[] | ProductVariant[];
    productName: string;
    canBeAddedToSales: boolean;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();

    return (
        <div className="w-full grid gap-5 lg:gap-4">
            <div className="grid lg:flex lg:items-start gap-5">
                <div className="flex gap-2 items-center py-3 lg:py-0">
                    <div className="relative w-[72px] lg:w-[120px] h-[72px] lg:h-[120px] border border-[#A3A3A3] rounded-lg shrink-0">
                        <Image
                            src={image || ImageProduct1}
                            alt={product.productName}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="lg:hidden stext-base font-bold">{productName}</h1>
                </div>

                {canBeAddedToSales ? (
                    <div className="w-full">
                        <AddToSalesFormFieldsMobile productVariants={productVariants} />
                        <AddToSalesFormFieldsDesktop productVariants={productVariants} />
                    </div>
                ) : (
                    <h3>No product variants to add to sales. Please add variants to this product.</h3>
                )}
            </div>

            {/* Footer Buttons */}
            <FormNavButtons
                submitButtonText="Add to Sales"
                cancelFunc={() => deleteSearchParams(["product-action", "id"], "push")}
                className="w-full grid lg:flex grid-cols-2 gap-6 justify-between lg:justify-end"
                submitButtonFunc={() => deleteSearchParams(["product-action", "id"], "push")}
            />
        </div>
    );
};

export default AddToSalesContent;
