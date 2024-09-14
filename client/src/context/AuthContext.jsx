import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isVerifiedForOtp, setIsVerifiedForOtp] = useState(false);
  const [email, setEmail] = useState(null);
  const [redirectPath, setRedirectPath] = useState("/");

  // Function to handle signup success
  const handleSignupSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/"); 
  };

  // Function to handle forgot password success
  const handleForgotPasswordSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/set-password"); 
  };

  // Function to reset verification and redirect path after successful OTP
  const handleOtpSuccess = () => {
    setIsVerifiedForOtp(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isVerifiedForOtp,
        email,
        redirectPath,
        handleSignupSuccess,
        handleForgotPasswordSuccess,
        handleOtpSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};




