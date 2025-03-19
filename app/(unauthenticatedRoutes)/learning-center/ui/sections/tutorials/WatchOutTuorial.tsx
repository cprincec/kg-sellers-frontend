import Tutorials from "./Tutorials";
import SearchBar2 from "./Searchbar2";

const WatchOurTutorial = () => {
    return (
        <div className="px-3 md:px-16 lg:px-[120px] py-6 md:py-16 bg-kaiglo_grey-100">
            <section className="grid gap-4 md:gap-6">
                <div className="grid gap-[6px] md:gap-6 text-center">
                    <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-[40px]">
                        Watch Our Tutorial Videos and Master Our Platform
                    </h2>
                    <p className="text-sm md:text-base">
                        Designed to guide you through every feature and tool, these videos cover everything
                        from setting up your account to processing orders. With clear and concise
                        instructions, you&apos;ll be able to confidently use our platform to grow your
                        business
                    </p>
                </div>
                <SearchBar2 placeholder="Search for video" className="max-w-[664px] mx-auto" scroll={false} />
            </section>

            <Tutorials />
        </div>
    );
};

export default WatchOurTutorial;
