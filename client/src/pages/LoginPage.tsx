// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const navigate = useNavigate();

//   const login = async (event) => {
//     event.preventDefault();
//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }
//     try {
//       setError(null);
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const result = await response.json();

//       if (result.success) {
//         setError("Login Successful");
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         setError(result.message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//       setError("An error occurred during login.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
//       <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
//         <h1 className="text-black text-xl font-bold mb-4">Login</h1>
//         <form onSubmit={login} className="flex flex-col w-full">
//           <label htmlFor="email" className="font-semibold text-md">
//             Email Address
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             placeholder="Type your email"
//             className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
//           />
//           <label htmlFor="password" className="font-semibold text-md">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               placeholder="Type your password"
//               className="outline-none w-full border-b-[2px] pb-1 mb-3 text-sm border-gray-300 pr-10"
//             />
//             <button
//               type="button"
//               onClick={() => setPasswordVisible(!passwordVisible)}
//               className="absolute inset-y-0 right-2 bottom-4 flex items-center"
//             >
//               {passwordVisible ? (
//                 <EyeSlashIcon className="w-5 h-5 text-gray-400" />
//               ) : (
//                 <EyeIcon className="w-5 h-5 text-gray-400" />
//               )}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-2 mt-4 text-white font-semibold rounded-full"
//           >
//             Login
//           </button>
//           <Link
//             to="/forgot-password"
//             className="text-center text-blue-500 hover:underline"
//           >
//             Forgot Password?
//           </Link>
//           {error && (
//             <p
//               className={
//                 error === "Login Successful"
//                   ? "text-green-500 text-center"
//                   : "text-red-500 text-center"
//               }
//             >
//               {error}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Define a type for the login response
interface LoginResponse {
  success: boolean;
  message?: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  // Handle the login submission
  const login = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setError(null);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result: LoginResponse = await response.json();

      if (result.success) {
        setError("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Login</h1>
        <form onSubmit={login} className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-md">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="outline-none border-b-[2px] pb-1 mb-3 text-sm border-gray-300"
          />
          <label htmlFor="password" className="font-semibold text-md">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              className="outline-none w-full border-b-[2px] pb-1 mb-3 text-sm border-gray-300 pr-10"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-2 top-2 bottom-4 flex items-center"
            >
              {passwordVisible ? (
                <EyeSlashIcon className="w-5 h-5 text-gray-400" />
              ) : (
                <EyeIcon className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-2 mt-4 text-white font-semibold rounded-full"
          >
            Login
          </button>
          <Link
            to="/forgot-password"
            className="text-center text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
          {error && (
            <p
              className={
                error === "Login Successful"
                  ? "text-green-500 text-center"
                  : "text-red-500 text-center"
              }
            >
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

