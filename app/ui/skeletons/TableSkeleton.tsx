const TableSkeleton = () => {
    return (
        <div className="w-full h-[500px] flex flex-col gap-[.75%]">
            <div className="w-full h-[15%] bg-kaiglo_grey-200 animate-pulse rounded-t-xl"></div>
            <div className="w-full h-[15%] bg-kaiglo_grey-200 animate-pulse"></div>
            <div className="w-full h-[70%] bg-kaiglo_grey-200 animate-pulse rounded-b-xl"></div>
        </div>
    );
};
export default TableSkeleton;
