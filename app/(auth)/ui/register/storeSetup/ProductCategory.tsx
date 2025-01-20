import { UseFormHookProps } from "@/app/(auth)/register/store-setup/page";
import { ProductCategoryForm, ProductCategoryFormFields } from "./forms";

const ProductCategory = ({ formProps }: { formProps: UseFormHookProps }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-bold">PRODUCT CATEGORY</h2>
            {/* <ProductCategoryForm navigateToNextStep={navigateToNextStep} /> */}
            <ProductCategoryFormFields formProps={formProps} />
        </div>
    );
};
export default ProductCategory;
