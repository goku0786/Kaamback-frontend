// import JobOpening from "../components/Jobopening";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
}

const Openings = () => {
  const [user, setUser] = useState<User | null>(null); // Set the correct type for user
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Simulate fetching user profile from an API or context
    const fetchUserProfile = async () => {
      // Replace this with an actual API call
      const fetchedUser: User = {
        name: 'John Doe', // Example user name
      };
      setUser(fetchedUser); // Now TypeScript knows that 'user' matches the 'User' type
    };

    fetchUserProfile();
  }, []);

  const jobs = [
    { title: 'Data Scientist', type: 'Full-time or Contact' },
    { title: 'Product Designer', type: 'Full-time or Contact' },
    { title: 'UI/UX Designer', type: 'Full-time or Contact' },
    { title: 'Web Developer', type: 'Full-time or Contact' },
    { title: 'Software Engineer', type: 'Full-time or Contact' },
    { title: 'Full Stack Developer', type: 'Full-time or Contact' },
  ];

  const handleApplyNow = () => {
    navigate('/application'); // Redirect to the /application path
  };

  return (
    <div className="min-h-screen bg-[#041893] text-white flex flex-col">
      {/* JobOpening Component - Passing user data */}
      {/* <JobOpening userName={user ? user.name : 'Guest'} /> */}

      <div className="container mx-auto lg:px-24 mt-6 lg:mt-16 flex-grow">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Explore Open Positions
        </h2>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-9">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-5 shadow-lg flex flex-col justify-center"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-700">{job.type}</p>
              </div>
              <button
                onClick={handleApplyNow}
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Extra space for background below the cards */}
      <div className="bg-[#041893] h-32"></div>
    </div>
  );
};

export default Openings;