import { ProductCategoryFormFields } from "./forms";

// const ProductCategory = ({ formProps }: { formProps: UseFormHookProps }) => {
const ProductCategory = ({ control, errors }) => {
    return (
        <div>
            <h2 className="mb-4 text-xl font-bold">PRODUCT CATEGORY</h2>
            {/* <ProductCategoryForm navigateToNextStep={navigateToNextStep} /> */}
            <ProductCategoryFormFields control={control} errors={errors} />
        </div>
    );
};
export default ProductCategory;
