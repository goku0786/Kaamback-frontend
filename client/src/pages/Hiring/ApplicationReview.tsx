import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const ApplicationReview: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/lookjobs");
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-10 md:mt-14">
        <div className="w-full px-10 pt-5">
          <h2 className="font-semibold">We will review your application</h2>
          <p>
            Thank you for your application! Our team will evaluate your
            responses and get back to you within 1 day.
          </p>
          <div className="w-[70%] bg-blue-100 mt-10 p-10 rounded-lg">
            Will be reviewed before:
            <br />
            <p className="text-lg my-1">August 7th</p>
            Date of Submission: August 06, 2024
          </div>
          <button
            onClick={handleSubmit}
            className="px-14 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg rounded-full mt-28"
          >
            Look for jobs
          </button>
        </div>
        <div className="w-[25%]">
          <h2 className="font-semibold text-center mt-7">
            Work with Top Clients
          </h2>
        </div>
      </div>
    </>
  );
};

export default ApplicationReview;
