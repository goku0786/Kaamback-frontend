import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the response structure from the forgot password API
interface ForgotPasswordResponse {
  success: boolean;
  message?: string;
}

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>(""); 
  const [error, setError] = useState<string | null>(null); 
  const [message, setMessage] = useState<string | null>(null); 
  const navigate = useNavigate();

  const handleForgotPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setError(null);

      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: ForgotPasswordResponse = await response.json();

      if (result.success) {
        setMessage("OTP sent. Redirecting to verification...");
        setTimeout(() => {
          navigate("/otp-verification");
        }, 2000); 
      } else {
        setError(result.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error during password reset:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-md">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="outline-none border-b-[2px] pb-1 mb-3 mt-1 text-sm border-gray-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] px-[30px] mb-4 mt-4 text-white font-semibold rounded-full"
          >
            Send OTP
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
