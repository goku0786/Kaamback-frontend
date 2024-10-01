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
const Hire = lazy(() => import("./pages/Hire"));
const YourHires = lazy(() => import("./components/YourHires"));
const CompanyDashboard = lazy(() => import("./pages/CompanyDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const YourProjects = lazy(() => import("./components/YourProjects"));
const ForgotVerifyOtpPage = lazy(() => import("./pages/ForgotVerifyOtp"));
const HiringProcess = lazy(() => import("./pages/Hiring/HiringProcess"));
const ApplicationReview = lazy(
  () => import("./pages/Hiring/ApplicationReview")
);
const LookJobs = lazy(() => import("./pages/LookJobs"));
const OpeningApplication = lazy(() => import("./pages/OpeningApplication"));
const JobSeekerPage = lazy(() => import("./pages/JobSeeker/JobSeekerPage"));
const ApplicationSubmitted = lazy(() => import("./pages/ApplicationSubmitted"))
const JobSeekerDashboard = lazy(() => import("./pages/JobSeeker/JobSeekerDashboard"));
const JobSeekerProfile = lazy(() => import("./pages/JobSeeker/JobSeekerProfile"));
const JobSeekerMessages = lazy(() => import("./pages/JobSeeker/JobSeekerMessages"));

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
            <Route path="/hire" element={<Hire />} />
            <Route path="/hiring" element={<HiringProcess />} />
            <Route
              path="/applicationSubmitted"
              element={<ApplicationReview />}
            />
            <Route path="/lookjobs" element={<LookJobs />} />
            <Route path="/applicationform" element={<OpeningApplication />} />
            <Route path="/submitted" element={<ApplicationSubmitted />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route
              path="/company-dashboard/your-hires"
              element={<YourHires />}
            />
            <Route
              path="/company-dashboard/your-projects"
              element={<YourProjects />}
            />
            <Route path="/company-dashboard/profile" element={<Profile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/jobseeker" element={<JobSeekerPage />}>
            <Route path="dashboard" element={<JobSeekerDashboard />} />
            <Route path="profile" element={<JobSeekerProfile />} />
            <Route path="messages" element={<JobSeekerMessages />} />
            {/* <Route path="setting" element={<JobSeekerSetting />} /> */}
            {/* <Route path="logout" element={<JobSeekerLogout />} /> */}
          </Route>
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
