import Link from "next/link";

const CustomerService = () => {
    return (
        <div className="grid gap-6">
            <h3 className="text-base font-bold">Customer Service</h3>
            <div className="grid gap-4">
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    Shipping & Delivery
                </Link>
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    Return Policy
                </Link>
                <Link href={"/"} className="text-kaiglo_grey-base text-sm font-medium">
                    FAQs
                </Link>
            </div>
        </div>
    );
};
export default CustomerService;
