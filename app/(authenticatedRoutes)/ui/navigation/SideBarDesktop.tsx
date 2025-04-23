import SideBarContent from "./SideBarContent";

const SideBarDesktop = () => {
    return (
        <div className="hidden md:block px-4 py-10 md:py-7 md:fixed md:w-[35%] lg:w-[17%] md:h-full md:bg-white border-r">
            <SideBarContent />
        </div>
    );
};
export default SideBarDesktop;
