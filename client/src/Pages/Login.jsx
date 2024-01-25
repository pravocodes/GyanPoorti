import React, { useState } from 'react'
import styles from "./Login.module.css";
import { useNavigate,useLocation ,Link} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/Auth';
import { toast } from "react-toastify";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const {auth,setAuth} = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const handleSubmit =async (e) =>{
    
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { Email, Password });
      console.log(res);
      if (res) {
        toast.success(res.data && res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data));
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        navigate(location.storage || '/dashboard');
      } else {
        toast.error(res.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message); // Access the error message directly
    }
    
  }

  return (
    <>
    {/* <img src="./wave.png"></img> */}
    <div className={styles.container}>
      <img src="https://i.postimg.cc/zX8Zbg5P/avatar.png" alt="" />
      <form action='#' onSubmit={handleSubmit}>
       <input type="text" name="username" placeholder="Username" value={Email} onChange={(e)=> setEmail(e.target.value)} required></input>

       <input type="text" name="password" placeholder="Password" value={Password} onChange={(e)=> setPassword(e.target.value)} required></input>
       <Link to="/forgotpassword">Forgot Password</Link>
       <button type="submit" >Login</button>
      
      </form>
    </div>
    
    </>
  )
}

export default Login;