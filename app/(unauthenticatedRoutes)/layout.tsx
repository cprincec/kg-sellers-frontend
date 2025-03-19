import LandingPageHeader from "./ui/LandingPageHeader";
import Footer from "./ui/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto">
            <LandingPageHeader />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
