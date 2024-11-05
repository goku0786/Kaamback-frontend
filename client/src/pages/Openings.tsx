// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// // Define Job interface for individual job openings
// interface Job {
//   _id: string;
//   roleName: string;
//   roleType: string;
//   createdAt: string;
//   updatedAt: string;
// }

// // Define Response interface for the API response
// interface JobOpeningsResponse {
//   success: boolean;
//   openings: Job[];
//   message?: string;
// }

// const Openings = () => {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobOpenings = async () => {
//       try {
//         const response = await fetch("api/career/openings");
//         if (!response.ok) {
//           throw new Error("Failed to fetch job openings");
//         }
//         const data: JobOpeningsResponse = await response.json();
//         console.log(data);
//         if (data.success) {
//           setJobs(data.openings);
//           setError(null);
//         } else {
//           setError(data.message || "Failed to fetch job openings.");
//           console.error("Failed to fetch job openings: ", data.message);
//         }
//       } catch (error) {
//         setError("Error fetching job openings.");
//         console.error("Error fetching job openings:", error);
//       }
//     };

//     fetchJobOpenings();
//   }, []);

//   const handleApplyNow = (jobId: string) => {
//     navigate(`/application/${jobId}`);
//   };

//   function toTitleCase(str: string) {
//     return str
//       .toLowerCase()
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   }

//   return (
//     <div className="min-h-screen bg-[#EAEBFF] flex flex-col pb-10">
//       <Navbar />

//       <div className="container px-5 mx-auto lg:px-24 mt-24 lg:mt-16 flex-grow">
//         {/* Title */}
//         <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
//           Explore Open Positions
//         </h2>

//         {/* Display Error Message */}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Job Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-9">
//           {jobs.length > 0 ? (
//             jobs.map((job) => (
//               <div
//                 key={job._id}
//                 className="bg-white text-black rounded-2xl p-5 shadow-lg flex flex-col justify-center"
//               >
//                 <div>
//                   <h2 className="text-xl font-bold mb-2">
//                     {toTitleCase(job.roleName)}
//                   </h2>
//                   <p className="text-gray-700">{toTitleCase(job.roleType)}</p>
//                   {/* Optional: Display createdAt if needed */}
//                   <p className="text-gray-500 text-sm">
//                     Created At: {new Date(job.createdAt).toLocaleDateString()}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     Updated At: {new Date(job.updatedAt).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleApplyNow(job._id)}
//                   className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-700">
//               No job openings available at the moment.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Openings;

// import Navbar from "../components/Navbar";
// import JobPage from "./LookJobs";

// const Openings = () => {
//   return (
//     <div className="min-h-screen bg-[#EAEBFF] flex flex-col pb-10">
//       <Navbar />
//       <JobPage />
//     </div>
//   );
// };

// export default Openings;

// import JobOpening from '../components/JobOpening';
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Openings: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [jobs, setJobs] = useState<any[]>([]); // State to store job listings
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const { setJobDetail } = useContext(AuthContext);

  // Fetch job listings from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("api/freelancer/feed?page=1&limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        // console.log(data);
        // console.log(data.data);
        // console.log(data.data[0].companyDetails);
        setJobDetail(data.data);
        setJobs(data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.data.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchJobs();
  }, [setJobDetail]);

  // Function to handle navigation
  const handleApplyClick = (jobId: string) => {
    navigate(`/application/${jobId}`); // Navigate to /application route
  };
  const handleGetDetails = (jobId: string) => {
    navigate(`/job/details/${jobId}`);
  };

  if (error) {
    return <p>Error: {error}</p>; // Error handling
  }

  return (
    <div>
      <Navbar />
      {/* <JobOpening userName={undefined} /> */}
      {/* <JobOpening  /> */}

      {/* Main Section */}
      {loading ? (
        <p className="mt-20 text-center">Loading...</p>
      ) : (
        <div className=" mt-16 flex justify-center w-full">
          <div className=" flex flex-col items-center md:w-1/2 w-full px-20 md:px-0 ">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
              Our Top Offerings
            </h1>
            <p className="text-gray-500 text-center mb-10">
              Latest UI/UX Intern Jobs
            </p>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row gap-8  w-full">
              {/* Job Listings Section */}
              <div className="w-full  ">
                {/* 1st Job Card */}
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-gray-100 p-5 rounded-lg flex  md:flex-row justify-between items-center mb-5"
                  >
                    <div className="  mb-4 md:mb-0">
                      <h3 className="text-lg font-bold">{job.jobTitle}</h3>
                      <p className="text-gray-600 font-semibold">
                        {job.companyDetails.name} -
                        {job.companyDetails.industry}
                      </p>
                      <p className="text-gray-600">{job.jobType}</p>
                      <span className="text-gray-600">Skills Required : </span>
                      {job.skills.map((skill: any, index: any) => (
                        <span key={index} className="text-gray-600 mr-[5px]">
                          &#x2022; {skill}
                        </span>
                      ))}
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
                          </svg>
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z" />
                          </svg>
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          Rs. {job.expectedSalary}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <button
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg"
                        onClick={() => handleGetDetails(job._id)}
                      >
                        View Details
                      </button>
                      <button
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg"
                        onClick={() => handleApplyClick(job._id)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Openings;
