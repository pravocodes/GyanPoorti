import React, { useState } from "react";
import styles from "./Register.module.css"; 
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



//firstname /lastname/ phone number /nationality/ email /password
const Register = () => {
const [firstname,setFirstname]=useState("");
const [lastname,setLastname]=useState("");
const [phonenumber,setPhonenumber]=useState("");
const [nationality,setNationality]=useState("Indian");
const [role,setRole]=useState("Teacher");
const [email,setEmail]=useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();
const handleSubmit= async(e)=> {
    e.preventDefault();
    const requestData = {
      FirstName: firstname,
      LastName: lastname,
      PhoneNumber: phonenumber,
      Nationality: nationality,
      Role: role,
      Email: email,
      Password: password,
    };
    console.log('Request Data:', requestData);
    try {
      const res =await axios.post("/api/v1/auth/register", requestData)
    if(res && res.data && res.data.success){
      navigate("/verify",{
      state: {
        phone: phonenumber,
        email: email,
      },
    });
    }
    else{
      console.log(res.data.message);
    }

      
    } catch (error) {
      console.log(error);
    }
}

  return (
    <div className={styles.registercontainer}>
      <h1>Register Yourself !</h1>
      <div >
       <input type="text" name="firstname" placeholder="Enter your firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value) } required></input>
       <input type="text" name="lastname" placeholder="Enter your lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} required></input>
       <input type="text" name="phonenumber" placeholder="Enter your number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} required></input>
       <p>Choose Your Nationality :</p>
            <select name="language" id="register-nationality" value={nationality} onChange={(e)=>setNationality(e.target.value)}>
                <option value="Indian">Indian</option>
                <option value="Others">Others</option>
            </select>
            <p>Choose Your Role :</p>
            <select name="language" id="register-role" value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
            </select>
        
        <input type="text" name="emailid" placeholder="Enter your Email Id" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
        <input type="text" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>

       <button type="submit" onClick={handleSubmit}>Submit</button>
      
      </div>
      
    </div>
  );
};

export default Register;
