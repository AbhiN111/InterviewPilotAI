import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import InterviewSetup from "./pages/InterviewSetup/InterviewSetup";
import Interview from "./pages/Interview/Interview";
import ResumeAnalyzer from "./pages/ResumeAnalyzer/ResumeAnalyzer";
import Report from "./pages/Report/Report";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";   // ← ADD THIS
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/interview" element={<Interview />} />

        <Route
          path="/resume-analyzer"
          element={<ResumeAnalyzer />}
        />

        <Route path="/report" element={<Report />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />

        {/* ADD THIS */}
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;