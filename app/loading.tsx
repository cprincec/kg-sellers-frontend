import Loader from "./ui/Loader";

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
            <Loader />
        </div>
    );
}
