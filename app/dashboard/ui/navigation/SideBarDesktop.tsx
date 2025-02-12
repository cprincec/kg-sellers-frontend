import SideBarContent from "./SideBarContent";

const SideBarDesktop = () => {
    return (
        <div className="hidden md:block px-4 py-10 md:py-7 md:fixed md:w-[35%] lg:w-[20%] md:h-full md:bg-white">
            <SideBarContent />
        </div>
    );
};
export default SideBarDesktop;
