import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isVerifiedForOtp, setIsVerifiedForOtp] = useState(false);
  const [email, setEmail] = useState(null);
  const [redirectPath, setRedirectPath] = useState("/");
  const [user, setUser] = useState(null);

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
    setRedirectPath("/");
  };

  // Function to reset verification and redirect path after successful OTP
  const handleOtpSuccess = (userData) => {
    setIsVerifiedForOtp(false);
    setUser(userData);
    setEmail(null);
  };

  const handleOtpSuccessForForgotPassword = (userData) => {
    setIsVerifiedForOtp(false);
    setUser(userData);
    setEmail(null);
  };

  // Function to handle login
  const loginuser = (userData) => {
    setUser(userData); 
    localStorage.setItem("user", JSON.stringify(userData)); 
  };

  // Function to handle logout
  const logout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("user"); 
  };

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isVerifiedForOtp,
        email,
        redirectPath,
        user, 
        handleSignupSuccess,
        handleForgotPasswordSuccess,
        handleOtpSuccess,
        handleOtpSuccessForForgotPassword,
        loginuser, 
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
