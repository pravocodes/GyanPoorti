import React, {useState} from 'react'


function ForgotPassword() {
    // const [Emailotp,setEmailotp]=useState("");
  return (
    <div>
      <form action="" style={{border:"2px solid red"}}>
        <h2>Reset Password</h2>
        <input type="text" placeholder="Enter your email" required/>
        <button type='text' >Verify</button>
        {/* {showOTPInput && (
          <div>
            <input type="text" name="otp" placeholder="Enter OTP"  required />
            <button type="button" onClick={handleSubmitOTP}>Submit OTP</button>
          </div>
        )} */}
      </form>
    </div>
  )
}

export default ForgotPassword
