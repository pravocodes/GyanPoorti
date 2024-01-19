import React from "react";
// import "./styles.css";

//firstname /lastname/ phone number /nationality/ email /password
const Register = () => {
  return (
    <div className="register-container">
      <h1>Register Page</h1>
      <form action='#'>
       {/* <label for="fullname">Fullname: </label> */}
       <input type="text" name="firstname" placeholder="Enter your firstname" required></input>

       {/* <label for="emaiid">Email Id:</label> */}
       <input type="text" name="lastname" placeholder="Enter your lastname" required></input>

       <input type="text" name="phonenumber" placeholder="Enter your number" required></input>

       <p>Choose Your Nationality :</p>
            <select name="language" id="register-nationality">
                <option value="indian">Indian</option>
                <option value="others">Others</option>
            </select>
      
            <input type="text" name="emailid" placeholder="Enter your Email Id" required></input>
            <input type="text" name="password" placeholder="Enter your password" required></input>

      
      
       <button type="submit">Register Now</button>
      
      </form>
    </div>
  );
};

export default Register;
