import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Lazy loading pages
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const OTPVerificationPage = lazy(() => import("./pages/OTPVerificationPage"));
const SetPasswordPage = lazy(() => import("./pages/SetPasswordPage"));
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Career = lazy(() => import("./pages/Career"));
const YourHires = lazy(() => import("./components/YourHires"));
const CompanyDashboard = lazy(() => import("./pages/CompanyDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const YourProjects = lazy(() => import("./components/YourProjects"));
const ForgotVerifyOtpPage = lazy(() => import("./pages/ForgotVerifyOtp"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/otp-verification"
              element={<PrivateRoute element={OTPVerificationPage} />}
            />
            <Route path="/" element={<ForgotPasswordPage />} />
            <Route
              path="/forgot-verify-otp"
              element={<PrivateRoute element={ForgotVerifyOtpPage} />}
            />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/career" element={<Career />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route
              path="/company-dashboard/your-hires"
              element={<YourHires />}
            />{" "}
            <Route
              path="/company-dashboard/your-projects"
              element={<YourProjects />}
            />
            <Route path="/company-dashboard/profile" element={<Profile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
