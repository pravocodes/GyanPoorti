import React from 'react'
import styles from "./Verifyuser.module.css";
// import Register from './Register';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



function Verifyuser() {
  const location = useLocation();
  
  if(location.state == null){
   var phone ="";
   var email = "";
  }
  else{
    var { phone, email } = location.state;
  }
    const [PhoneNumber,setPhoneNumber]=useState(phone);
const [Email,setEmail]=useState(email);
  

const [Numberotp,setNumberotp]=useState("");
const [Emailotp,setEmailotp]=useState("");

    const [showOTPInputnum, setShowOTPInputnum] = useState(false);
    const enterOTPnum = async (e) => {
      e.preventDefault();
      try {
        const res=await axios.post("/api/v1/auth/sendotp",{
          PhoneNumber,
        })
        if(res && res.data && res.data.success){
          alert('OTP sent to your number');
          setShowOTPInputnum(true);
        }
      } catch (error) {
        console.log(error);
      }
      };

      const handleSubmitOTPnum = async (e) => {
        e.preventDefault();
        const requestData={
          PhoneNumber: PhoneNumber,
          OTP: Numberotp,
        }
        try {
          console.log(PhoneNumber,Numberotp);
          const res=await axios.post("/api/v1/auth/verifyotp",requestData)
          if(res && res.data && res.data.success){
            alert('OTP verified');
          }
        } catch (error) {
          console.log(error);
        }
        
        console.log('OTP submitted');
      };

      const [showOTPInput, setShowOTPInput] = useState(false);
      const enterOTP =  async (e) => {
        e.preventDefault();
          
          try {
        const res=await axios.post("/api/v1/auth/sendmail",{
          Email,
        })
        if(res && res.data && res.data.success){
          alert('OTP sent to your Email');
          setShowOTPInput(true);
        }
      } catch (error) {
        console.log(error);
      }
        };
        const handleSubmitOTP =async (e) => {
          e.preventDefault();
          const requestData={
          Email: Email,
          OTP: Emailotp,
        }
        try {
          console.log(Email,Emailotp);
          const res=await axios.post("/api/v1/auth/verifymail",requestData)
          if(res && res.data && res.data.success){
            alert('OTP verified');
          }
        } catch (error) {
          console.log(error);
        }
        
        console.log('OTP submitted');
        };

  return (
    <div className={styles.verifyusercontainer}>
      <h1>Verify Yourself !</h1>
      <input type="text" placeholder='Phone Number' value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
      <button type='text' onClick={enterOTPnum}  >Send Otp</button>
      {showOTPInputnum && (
          <div>
            <input type="text" name="otp" placeholder="Enter OTP" value={Numberotp} onChange={(e)=>setNumberotp(e.target.value)} required />
            <button type="button" onClick={handleSubmitOTPnum}>Submit OTP</button>
          </div>
        )}

<input type="text" placeholder='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
      <button type='text' onClick={enterOTP}>Send Otp</button>
      {showOTPInput && (
          <div>
            <input type="text" name="otp" placeholder="Enter OTP" value={Emailotp} onChange={(e)=>setEmailotp(e.target.value)} required />
            <button type="button" onClick={handleSubmitOTP}>Submit OTP</button>
          </div>
        )}
    </div>
  )
}

export default Verifyuser;
