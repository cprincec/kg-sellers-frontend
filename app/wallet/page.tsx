import Header from "../dashboard/ui/navigation/Header";
import AccountSummary from "./ui/AccountSummary";

const Wallet = () => {
    return (
        <div className="pb-4 grid gap-2 md:gap-1 lg:gap-0">
            <Header heading={"Wallet"} description={"Your current transactions activities."} />

            <div className="grid px-3 md:pl-1 md:pr-1 md:max-lg:p-4 lg:px-0 md:max-lg:bg-white">
                <AccountSummary />
            </div>
        </div>
    );
};

export default Wallet;
