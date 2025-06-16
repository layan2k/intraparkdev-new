import { Outlet } from "react-router-dom";
import NavBar from "../../components/Common/NavBar";
import Footer from "../../components/Common/Footer";


const RootLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
