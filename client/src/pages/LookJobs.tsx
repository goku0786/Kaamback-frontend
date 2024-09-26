import React from 'react';
// import JobOpening from '../components/Jobopening';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import ApplicationForm from './OpeningApplication';

const JobPage: React.FC = () => {

    const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation
  const handleApplyClick = () => {
    navigate("/applicationform"); // Navigate to /application route
  };
  return (
    <>
      <Navbar/>
      {/* <JobOpening userName={undefined}/> */}
      {/* Main Section */}
      <div className="container mx-auto px-4 mt-10 md:mt-14">
        <div className="py-10">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">
            47 Work From Home UI/UX Internships
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Latest UI/UX Intern Jobs
          </p>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Section */}
            <div className="bg-gray-100 p-10 rounded-lg w-10 mx-20 md:w-1/3 relative">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>

              <div className="mb-6">
                <label className="block text-gray-700">Profile</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter profile" 
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Location</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter location" 
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Work Type</label>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Work from home</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Part-time</span>
                  </label>
                </div>
              </div>

              {/* Stipend Slider */}
              <div className="mb-6">
                <label className="block text-gray-700">
                  Desired minimum monthly stipend
                </label>
                <input type="range" className="w-full" min="0" max="10000" step="1000" />
                {/* Labels below the slider */}
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0</span>
                  <span>1K</span>
                  <span>2K</span>
                  <span>4K</span>
                  <span>6K</span>
                  <span>8K</span>
                  <span>10K</span>
                </div>
              </div>
            </div>

           {/* Job Listings Section */}
           <div className="w-full md:w-3/4 space-y-6">
              {/* 1st Job Card */}
              <div className="bg-gray-100 p-5 rounded-lg flex justify-between items-center w-3/4 mx-20">
                <div>
                  <h3 className="text-lg font-bold">UI/UX Design</h3>
                  <p className="text-gray-600">Brevity Technologies</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
                      </svg> 
                      Delhi
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z"/>
                      </svg> 
                      3 Months
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg> 
                      ₹ 8,000 / month
                    </div>
                  </div>
                  <p className="text-blue-500 mt-2">● Internship with job offer</p>
                </div>
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg "onClick={handleApplyClick} >Apply</button>
              </div>

              {/* 2nd Job Card */}
              <div className="bg-gray-100 p-5 rounded-lg flex justify-between items-center w-3/4 mx-20">
                <div>
                  <h3 className="text-lg font-bold">UI/UX Design</h3>
                  <p className="text-gray-600">Daalchini Technologies</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
                      </svg> 
                      Noida
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z"/>
                      </svg> 
                      3 Months
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg> 
                      ₹ 7,000 / month
                    </div>
                  </div>
                  <p className="text-blue-500 mt-2">● Internship with job offer</p>
                </div>
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg"onClick={handleApplyClick} >Apply</button>
              </div>


              <div className="bg-gray-100 p-5 rounded-lg flex justify-between items-center w-3/4 mx-20">
                <div>
                  <h3 className="text-lg font-bold">UI/UX Design</h3>
                  <p className="text-gray-600">Daalchini Technologies</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
                      </svg> 
                      Noida
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z"/>
                      </svg> 
                      3 Months
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg> 
                      ₹ 7,000 / month
                    </div>
                  </div>
                  <p className="text-blue-500 mt-2">● Internship with job offer</p>
                </div>
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg" onClick={handleApplyClick} >Apply</button>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;