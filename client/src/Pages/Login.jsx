import React, { useState } from 'react'
import styles from "./Login.module.css";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const handleSubmit =async (e) =>{
    
    e.preventDefault();
    try {
      const res= await axios.post("/api/v1/auth/login", {Email,Password});
      if(res && res.data && res.data.success){
        localStorage.setItem("auth",JSON.stringify(res.data));
        navigate(location.storage || '/home');
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    {/* <img src="./wave.png"></img> */}
    <div className={styles.container}>
      <img src="https://i.postimg.cc/zX8Zbg5P/avatar.png" alt="" />
      <form action='#'>
       <input type="text" name="username" placeholder="Username" value={Email} onChange={(e)=> setEmail(e.target.value)} required></input>

       <input type="text" name="password" placeholder="Password" value={Password} onChange={(e)=> setPassword(e.target.value)} required></input>
       <a href="a">Forgot Password?</a>
       <button type="submit" onClick={handleSubmit}>Login</button>
      
      </form>
    </div>
    
    </>
  )
}

export default Login;