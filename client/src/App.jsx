import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Verifyuser from "./Pages/Verifyuser";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/Spinner";
import Teacher from "./Route/TeacherRoute";
import Student from "./Route/StudentRoute";
import Profile from "./Pages/Teacher/Profile";
import { useAuth } from "./Context/Auth";
import StudentProfile from "./Pages/Student/StudentProfile";

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {auth?.user?.role === "Teacher" ? (
          <Route path="/dashboard" element={<Teacher />}>
            <Route path="" element={<HomePage />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
        ) : (
          <Route path="/dashboard" element={<Student />}>
            <Route path="" element={<HomePage />} />
            <Route path="/dashboard/profile" element={<StudentProfile />} />
          </Route>
        )}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verifyuser />} />
        <Route path="/spinner" element={<Spinner />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
