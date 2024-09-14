// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";

// const Home = lazy(() => import("./pages/Home"));
// const Career = lazy(() => import("./pages/Career"));
// const Loader = lazy(() => import("./components/Loader"));
// const OurTeam = lazy(() => import("./pages/OurTeam"));
// const CompanyDashboard = lazy(() => import("./pages/CompanyDashboard"));
// const YourHires = lazy(() => import("./components/YourHires"));
// const YourProjects = lazy(() => import("./components/YourProjects"));
// const Profile = lazy(() => import("./pages/Profile"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const SignupPage = lazy(() => import("./pages/SignupPage"));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/ourteam" element={<OurTeam />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/company-dashboard" element={<CompanyDashboard />} />
//           <Route path="/company-dashboard/your-hires" element={<YourHires />} />
//           <Route
//             path="/company-dashboard/your-projects"
//             element={<YourProjects />}
//           />
//           <Route path="/company-dashboard/profile" element={<Profile />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

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
            <Route
              path="/set-password"
              element={<PrivateRoute element={SetPasswordPage} />}
            />
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
