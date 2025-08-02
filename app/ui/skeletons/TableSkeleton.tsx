const TableSkeleton = () => {
    return (
        <div className="w-full h-[500px] flex flex-col gap-[.5%]">
            <div className="w-full h-[10%] bg-kaiglo_grey-200 animate-pulse"></div>
            <div className="w-full h-[90%] bg-kaiglo_grey-200 animate-pulse"></div>
        </div>
    );
};
export default TableSkeleton;
