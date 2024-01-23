import {BrowserRouter,Route,Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Verifyuser from "./Pages/Verifyuser";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/verify" element={<Verifyuser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
