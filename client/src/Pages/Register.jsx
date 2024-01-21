import React from "react";
import styles from "./Register.module.css"; 
import { Link } from "react-router-dom";

//firstname /lastname/ phone number /nationality/ email /password
const Register = () => {


  return (
    <div className={styles.registercontainer}>
      <h1>Register Yourself !</h1>
      <div >
       <input type="text" name="firstname" placeholder="Enter your firstname" required></input>
       <input type="text" name="lastname" placeholder="Enter your lastname" required></input>
       <input type="text" name="phonenumber" placeholder="Enter your number" required></input>
       <p>Choose Your Nationality :</p>
            <select name="language" id="register-nationality">
                <option value="indian">Indian</option>
                <option value="others">Others</option>
            </select>
            <input type="text" name="emailid" placeholder="Enter your Email Id" required></input>
            <input type="text" name="password" placeholder="Enter your password" required></input>

       <Link to="/verify"><button type="submit">Submit</button></Link>
      
      </div>
      
    </div>
  );
};

export default Register;
