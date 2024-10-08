// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ProfessionalExperience: React.FC = () => {
//   const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const navigate = useNavigate();

//   const handleExperienceChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setYearsOfExperience(parseInt(event.target.value, 10));
//   };

//   const handleOptionChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setSelectedOption(event.target.value);
//   };

//   const prevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     navigate("/hiring/gettingStarted");
//   };
//   const nextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     navigate("/hiring/profileSetup");
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold">
//         Tell us about your professional experience
//       </h2>
//       <p className="text-lg mt-2">
//         How many years of professional experience do you have in your field
//         overall?
//       </p>

//       <input
//         type="number"
//         id="experience"
//         name="experience"
//         value={yearsOfExperience}
//         onChange={handleExperienceChange}
//         min="0"
//         max="50"
//         className="outline-none border-2 border-gray-400 p-1 mt-1 rounded-md w-[200px]"
//       />

//       <div className="flex gap-32 my-7">
//         <span className="flex flex-col">
//           <label htmlFor="jobInterest" className="font-semibold">
//             Primary Job Interest
//           </label>
//           <input
//             type="text"
//             className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
//           />
//         </span>

//         <span className="flex flex-col">
//           <label htmlFor="jobInterest" className="font-semibold">
//             Years of Experience in Primary Job Interest
//           </label>
//           <input
//             type="text"
//             className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
//           />
//         </span>
//       </div>

//       <p className="mt-5 font-semibold">
//         Have you worked on online/digital projects on either UX, UI, Interaction
//         Design, Branding, Visual/Marketing Design?
//       </p>

//       <div className="mt-2">
//         <input
//           type="radio"
//           id="yes"
//           name="work"
//           value="Yes"
//           checked={selectedOption === "Yes"}
//           onChange={handleOptionChange}
//           className="form-radio h-4 w-4 text-blue-600"
//         />
//         <label htmlFor="yes" className="ml-2">
//           Yes
//         </label>

//         <br />

//         <input
//           type="radio"
//           id="no"
//           name="work"
//           value="No"
//           checked={selectedOption === "No"}
//           onChange={handleOptionChange}
//           className="form-radio h-4 w-4 text-blue-600"
//         />
//         <label htmlFor="no" className="ml-2">
//           No
//         </label>
//       </div>

//       <div className="flex flex-col gap-5 mt-5">
//         <span className="flex flex-col">
//           <label htmlFor="skills" className="font-semibold">
//             Skills (4 to 6 skills)
//           </label>
//           <input
//             type="text"
//             className="outline-none rounded-md w-[300px] border border-black p-1 mt-2"
//           />
//         </span>

//         <span className="flex flex-col">
//           <label htmlFor="linkedin" className="font-semibold">
//             LinkedIn (optional)
//           </label>
//           <input
//             type="text"
//             className="outline-none rounded-md w-[300px] border border-black p-1 mt-2 mb-5"
//           />
//         </span>
//       </div>
//       <div className="flex gap-5">
//         <button
//           onClick={prevStep}
//           className="text-white px-5 pb-1 bg-gray-700 font-semibold text-3xl rounded-full"
//         >
//           &larr;
//         </button>
//         <button
//           onClick={nextStep}
//           className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalExperience;


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfessionalExperience: React.FC = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [jobInterest, setJobInterest] = useState<string>("");
  const [experienceInJob, setExperienceInJob] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");

  const navigate = useNavigate();
  const { setFreelancerDetails } = useContext(AuthContext);

  const handleExperienceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setYearsOfExperience(parseInt(event.target.value, 10));
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedOption(event.target.value);
  };

  const prevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/hiring/gettingStarted");
  };

  const nextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFreelancerDetails((prev: any) => ({
      ...prev,
      yearsOfExperience,
      jobInterest,
      experienceInJob,
      skills,
      linkedIn,
      workedOnDigitalProjects: selectedOption,
    }));
    navigate("/hiring/profileSetup");
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        Tell us about your professional experience
      </h2>
      <p className="text-lg mt-2">
        How many years of professional experience do you have in your field
        overall?
      </p>

      <input
        type="number"
        id="experience"
        name="experience"
        value={yearsOfExperience}
        onChange={handleExperienceChange}
        min="0"
        max="50"
        className="outline-none border-2 border-gray-400 p-1 mt-1 rounded-md w-[200px]"
      />

      <div className="flex gap-32 my-7">
        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Primary Job Interest
          </label>
          <input
            type="text"
            value={jobInterest}
            onChange={(e) => setJobInterest(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Years of Experience in Primary Job Interest
          </label>
          <input
            type="text"
            value={experienceInJob}
            onChange={(e) => setExperienceInJob(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
          />
        </span>
      </div>

      <p className="mt-5 font-semibold">
        Have you worked on online/digital projects on either UX, UI, Interaction
        Design, Branding, Visual/Marketing Design?
      </p>

      <div className="mt-2">
        <input
          type="radio"
          id="yes"
          name="work"
          value="Yes"
          checked={selectedOption === "Yes"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-blue-600"
        />
        <label htmlFor="yes" className="ml-2">
          Yes
        </label>

        <br />

        <input
          type="radio"
          id="no"
          name="work"
          value="No"
          checked={selectedOption === "No"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-blue-600"
        />
        <label htmlFor="no" className="ml-2">
          No
        </label>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <span className="flex flex-col">
          <label htmlFor="skills" className="font-semibold">
            Skills (4 to 6 skills)
          </label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="outline-none rounded-md w-[300px] border border-black p-1 mt-2"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="linkedin" className="font-semibold">
            LinkedIn (optional)
          </label>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="outline-none rounded-md w-[300px] border border-black p-1 mt-2 mb-5"
          />
        </span>
      </div>
      <div className="flex gap-5">
        <button
          onClick={prevStep}
          className="text-white px-5 pb-1 bg-gray-700 font-semibold text-3xl rounded-full"
        >
          &larr;
        </button>
        <button
          onClick={nextStep}
          className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfessionalExperience;

