import { ProductCategoryFormFields } from "./forms";

// const ProductCategory = ({ formProps }: { formProps: UseFormHookProps }) => {
// @ts-expect-error to be changed
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
