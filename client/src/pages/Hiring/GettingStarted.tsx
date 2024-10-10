// import React, { useContext } from "react";
// import RadioButtons from "./LanguageChooseButton";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const GettingStarted: React.FC = () => {
//   const navigate = useNavigate();
//   const { setFreelancerDetails } = useContext(AuthContext);
//   const [fullName, setFullName] = React.useState("");

//   const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     setFreelancerDetails((prev: any) => ({ ...prev, fullName }));
//     navigate("/hiring/professionalExperience");
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold">
//         Welcome to KaamBack. Let's get started!
//       </h2>
//       <p className="text-gray-600">
//         Your application should only take a few minutes. Based on the
//         information you provide, our screening team will determine the best path
//         for you going forward.
//       </p>
//       <div className="flex flex-col gap-5 mt-5">
//         {/* <div className="flex gap-7"> */}
//         <span className="flex flex-col gap-1 w-[250px]">
//           <label htmlFor="userName" className="font-semibold">
//             Fullname
//           </label>
//           <input
//             type="text"
//             id="fullname"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="outline-none border-2 border-black p-1 rounded-md"
//           />
//         </span>
//         {/* <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="middleName" className="font-semibold">
//               Middle name
//             </label>
//             <input
//               type="text"
//               id="middleName"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span> */}
//         {/* <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="lastName" className="font-semibold">
//               Last name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span> */}
//         {/* </div> */}
//         <span className="flex flex-col gap-1 w-[250px]">
//           <label htmlFor="birthDate" className="font-semibold">
//             Birth Date
//           </label>
//           <input
//             type="date"
//             id="birthDate"
//             className="outline-none border-2 border-black p-1 rounded-md"
//           />
//         </span>
//         <div className="flex gap-7">
//           <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="email" className="font-semibold">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span>
//           <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="phoneNumber" className="font-semibold">
//               Phone Number
//             </label>
//             <input
//               type="number"
//               id="phoneNumber"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span>
//         </div>
//         <div className="flex gap-7">
//           <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="country" className="font-semibold">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span>
//           <span className="flex flex-col gap-1 w-[250px]">
//             <label htmlFor="city" className="font-semibold">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               className="outline-none border-2 border-black p-1 rounded-md"
//             />
//           </span>
//         </div>
//       </div>
//       <RadioButtons />
//       <div>
//         <button
//           onClick={handleSubmit}
//           className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GettingStarted;

import React, { useContext } from "react";
import RadioButtons from "./LanguageChooseButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const GettingStarted: React.FC = () => {
  const navigate = useNavigate();
  const { setFreelancerDetails } = useContext(AuthContext);
  const [formData, setFormData] = React.useState({
    fullName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    // englishProficiency:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add form validation here if needed
    setFreelancerDetails((prev: any) => ({ ...prev, ...formData }));
    navigate("/hiring/professionalExperience");
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        Welcome to KaamBack. Let's get started!
      </h2>
      <p className="text-gray-600">
        Your application should only take a few minutes. Based on the
        information you provide, our screening team will determine the best path
        for you going forward.
      </p>
      <div className="flex flex-col gap-5 mt-5">
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="fullName" className="font-semibold">
            Fullname
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="birthDate" className="font-semibold">
            Birth Date
          </label>
          <input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="phoneNumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="city" className="font-semibold">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
      </div>
      <RadioButtons />
      <div>
        <button
          onClick={handleSubmit}
          className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
