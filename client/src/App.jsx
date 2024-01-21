import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Verifyuser from "./Pages/Verifyuser";
import Register from "./Pages/Register";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

      <Route path="/verify" element={<Verifyuser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
