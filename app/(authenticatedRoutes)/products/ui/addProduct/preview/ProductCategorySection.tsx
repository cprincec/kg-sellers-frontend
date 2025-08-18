import { IProduct } from "../../../lib/interfaces/interface";
import { generateProductCategoryDTO } from "../../../lib/utils/addProduct.utils";
import ProductCategoryCrumbs from "../productCategory/ProductCategoryCrumbs";

const ProductCategorySection = ({ product }: { product: IProduct }) => {
    const productCategory = generateProductCategoryDTO(product);

    return (
        <section className="grid gap-3 p-4 md:px-6 border-b">
            <h2 className="text-sm md:text-base font-medium">PRODUCT CATEGORY</h2>
            <ProductCategoryCrumbs
                categoryObject={productCategory}
                className="bg-transparent border-none -ml-3"
            />
        </section>
    );
};

export default ProductCategorySection;
