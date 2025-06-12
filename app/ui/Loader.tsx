import "@/app/loader.css";

const Loader = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
            {/* <!-- From Uiverse.io by alexruix -->  */}
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    );
};
export default Loader;
