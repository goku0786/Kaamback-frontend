import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Importing the check mark icon
import topClient from "../../assets/top-clients.jpg";
import flexibleWork from "../../assets/flexible-work.jpg";
import financialStability from "../../assets/financial-stability.jpg";
import GettingStarted from "./GettingStarted";
import ProfessionalExperience from "./ProfessionalExperience";
import ProfileSetup from "./ProfileSetup";
import Navbar from "../../components/Navbar";
import {useNavigate} from 'react-router-dom'; 

const HiringProcess: React.FC = () => {
  // Defining the type of currentStep as number
  const [currentStep, setCurrentStep] = useState<number>(1);
  const navigate = useNavigate();

  const nextStep = (): void => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = (): void => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to render step indicators
  const renderStepIndicator = (stepNumber: number): JSX.Element => {
    if (stepNumber < currentStep) {
      return (
        <div className="h-10 w-10 bg-green-500 text-white rounded-full flex justify-center items-center">
          <FaCheck />
        </div>
      );
    } else if (stepNumber === currentStep) {
      return <div className="h-10 w-10 bg-[#041893] rounded-full"></div>;
    } else {
      return <div className="h-10 w-10 border border-gray-500 rounded-full"></div>;
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/applicationSubmitted");  
  };

  return (
    <>
   <Navbar/>
    <div className="flex mt-10 md:mt-14">
      <div className="w-full">
        <div className="border-b-2 border-gray-500 flex py-5 gap-20 pl-20">
          {/* Step indicators */}
          <div className="flex items-center gap-2">
            {renderStepIndicator(1)}
            <span className="text-lg font-semibold">Getting Started</span>
          </div>
          <div className="flex items-center gap-2">
            {renderStepIndicator(2)}
            <span className="text-lg font-semibold">Professional Experience</span>
          </div>
          <div className="flex items-center gap-2">
            {renderStepIndicator(3)}
            <span className="text-lg font-semibold">Profile Setup</span>
          </div>
        </div>

        <div className="px-10 pt-5">
          {currentStep === 1 && <GettingStarted />}
          {currentStep === 2 && <ProfessionalExperience />}
          {currentStep === 3 && <ProfileSetup />}
        </div>

        {/* Navigation buttons */}
        <div className="px-10 pt-5 flex gap-5">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="text-white px-5 pb-1 bg-gray-700 font-semibold text-3xl rounded-full"
            >
              &larr;
            </button>
          )}

          {currentStep < 3 && (
            <button
              onClick={nextStep}
              className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
            >
              Continue
            </button>
          )}

          {currentStep === 3 && (
            <button onClick={handleSubmit} className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full">
              Finish
            </button>
          )}
        </div>
      </div>

      <div className="border-l-2 border-gray-500 px-10 pt-7 flex flex-col gap-5 h-full w-[25%]">
        <div className="flex flex-col gap-2">
          <img src={topClient} alt="Top Clients" className="w-16" />
          <p className="font-bold">Top Clients</p>
          Engage with Fortune 500 companies, big tech firms, Silicon Valley
          startups, and renowned universities.
        </div>
        <div className="flex flex-col gap-2">
          <img src={flexibleWork} alt="Flexible Work" className="w-16" />
          <p className="font-bold">Flexible work</p>
          Work remotely whenever you want from almost anywhere in the world.
          Choose from full-time, part-time, or hourly engagements.
        </div>
        <div className="flex flex-col gap-2">
          <img src={financialStability} alt="Financial Stability" className="w-16" />
          <p className="font-bold">Financial Stability</p>
          Set your own rate, get access to jobs with guaranteed hours, and make
          the most of continuous opportunities.
        </div>
      </div>
    </div>
    </>
  );
};

export default HiringProcess;

