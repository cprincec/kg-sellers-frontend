import { PaymentOptionFormFields } from "./forms";

const PaymentOption = ({ control, errors }) => {
    return (
        <div>
            <h2 className="mb-2 text-xl font-bold">PREFERRED PAYMENT OPTION</h2>
            <p>
                Select the payment method, if applicable, of your choice, and ensure to provide all required
                details. We&apos;ll review the validity of your documents upon submissions
            </p>
            <PaymentOptionFormFields control={control} errors={errors} />
        </div>
    );
};
export default PaymentOption;
