import React from 'react'
import styles from "./Verifyuser.module.css";
// import Register from './Register';
import { useState } from 'react';

function Verifyuser() {
    const [showOTPInputnum, setShowOTPInputnum] = useState(false);
    const enterOTPnum = () => {
        setShowOTPInputnum(true);
      };
      const handleSubmitOTPnum = () => {
        console.log('OTP submitted');
      };

      const [showOTPInput, setShowOTPInput] = useState(false);
      const enterOTP = () => {
          setShowOTPInput(true);
        };
        const handleSubmitOTP = () => {
          console.log('OTP submitted');
        };

  return (
    <div className={styles.verifyusercontainer}>
      <h1>Verify Yourself !</h1>
      <input type="text" placeholder='Phone Number' />
      <button type='text' onClick={enterOTPnum}>Send Otp</button>
      {showOTPInputnum && (
          <div>
            <input type="text" name="otp" placeholder="Enter OTP" required />
            <button type="button" onClick={handleSubmitOTPnum}>Submit OTP</button>
          </div>
        )}

<input type="text" placeholder='Email' />
      <button type='text' onClick={enterOTP}>Send Otp</button>
      {showOTPInput && (
          <div>
            <input type="text" name="otp" placeholder="Enter OTP" required />
            <button type="button" onClick={handleSubmitOTP}>Submit OTP</button>
          </div>
        )}
    </div>
  )
}

export default Verifyuser;
