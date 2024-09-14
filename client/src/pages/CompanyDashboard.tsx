import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CompanyNavbar from "../components/CompanyNavbar";
import avatar from '../assets/avatar.png';
import Footer from "../components/Footer";
import FAQList from '../components/FAQList';
import NewProjects from "../components/NewProjects";

const CompanyDashboard = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleViewRole = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex flex-col mt-[70px] sm:pt-6">
            <CompanyNavbar />

            <div className="bg-[#BFE0FF] h-[180px] w-full px-4 sm:px-24 flex items-center">
                <div className="flex flex-row items-center gap-x-6">
                    <img src={avatar} alt="avatar" className="h-[60px] w-[60px] rounded-full" />
                    <p className="text-[24px] sm:text-[40px] font-semibold text-black font-ptSans">Hello, Name</p>
                </div>
            </div>
            <div className="flex flex-row gap-x-2 sm:gap-x-32 justify-center mt-[-24px]">
                <div
                    className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer" onClick={handleViewRole}>
                    <p className="text-[16px] sm:text-[24px] font-semibold text-white">New Projects</p>
                </div>
                <div
                    className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer"
                    onClick={() => navigate('/company-dashboard/your-projects')}>
                    <p className="text-[16px] sm:text-[24px] font-semibold text-white">Your Projects</p>
                </div>
                <div
                    className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer"
                    onClick={() => navigate('/company-dashboard/your-hires')}
                >
                    <p className="text-[16px] sm:text-[24px] font-semibold text-white">Your Hires</p>
                </div>
            </div>
            {showModal && <NewProjects onClose={handleCloseModal} />}
            <div className="bg-white py-10 sm:py-20 px-4 sm:px-24">
                <FAQList />
            </div>

            <Footer />
        </div>
    );
};

export default CompanyDashboard;
