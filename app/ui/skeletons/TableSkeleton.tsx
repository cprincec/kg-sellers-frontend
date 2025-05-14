const TableSkeleton = () => {
    return (
        <div className="w-full h-[500px] flex flex-col gap-[.75%]">
            <div className="w-full h-[10%] bg-kaiglo_grey-200 animate-pulse"></div>
            <div className="w-full h-[89.25%] bg-kaiglo_grey-200 animate-pulse"></div>
        </div>
    );
};
export default TableSkeleton;
