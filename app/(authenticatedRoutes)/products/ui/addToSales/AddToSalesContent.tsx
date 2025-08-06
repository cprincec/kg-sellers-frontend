import Image from "next/image";
import { IOngoingSale, IProduct } from "../../lib/interfaces/interface";
import AddToSalesFormDesktop from "./addToSalesFormDesktop/AddToSalesFormDesktop";
import { generateProductVariantDTOs } from "../../lib/utils/addProduct.utils";
import AddToSalesFormMobile from "./addToSalesFormFieldsMobile/AddToSalesFormMobile";

const AddToSalesContent = ({
    product,
    ongoingSales,
    productId,
}: {
    product: IProduct;
    ongoingSales: IOngoingSale[];
    productId: string;
}) => {
    const variants = generateProductVariantDTOs(product);
    const canBeAddedToSales = variants.length > 0;
    const isAvailableOngoingSales = ongoingSales.length > 0;
    let message = "There are no ongoing sales";

    if (!isAvailableOngoingSales) message = "There are no ongoing sales";
    else if (!canBeAddedToSales)
        message = "No product variants to add to sales. Please add variants to this product.";

    if (!isAvailableOngoingSales || !canBeAddedToSales) return <h3>{message}</h3>;

    return (
        <div className="w-full grid gap-5 lg:gap-4">
            <div className="grid lg:flex lg:items-start gap-5">
                {/* Product Image and Name */}
                <div className="flex gap-2 items-center py-3 lg:py-0">
                    <div className="relative w-[72px] lg:w-[120px] h-[72px] lg:h-[120px] border border-[#A3A3A3] rounded-lg shrink-0">
                        <Image
                            src={product.productUrl}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="lg:hidden text-base font-bold">{product.name}</h1>
                </div>

                {/* Mobile and Desktop view forms */}

                <div className="w-full">
                    <AddToSalesFormMobile
                        productId={productId}
                        ongoingSales={ongoingSales}
                        productVariants={variants}
                    />
                    <AddToSalesFormDesktop
                        productId={productId}
                        ongoingSales={ongoingSales}
                        productVariants={variants}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddToSalesContent;
