import SideBarContent from "./SideBarContent";

const SideBarDesktop = () => {
    return (
        <div className="hidden md:block px-4 py-10 md:py-7 md:fixed md:w-[35%] lg:w-[20%] md:h-[70%] md:border-r-2 md:bg-white md:border-kaiglo_grey-200">
            <SideBarContent />
        </div>
    );
};
export default SideBarDesktop;
