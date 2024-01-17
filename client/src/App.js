import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.js";
import Home from "./Pages/HomePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
