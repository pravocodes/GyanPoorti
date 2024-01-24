import {BrowserRouter,Route,Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Verifyuser from "./Pages/Verifyuser";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./Components/Spinner";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/verify" element={<Verifyuser/>}/>
      <Route path="/spinner" element={<Spinner/>}/>
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
    
  )
}

export default App
