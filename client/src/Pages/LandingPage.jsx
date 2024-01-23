import React from 'react'
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
  <>
    <div className={styles.Homecontainer}>
      <h2>HOME PAGE</h2>
      <img src="https://i.postimg.cc/sDwFDRNy/332-3322688-download-studying-icon-clipart-computer-icons-study-student-studying-icon-removebg-previ.png" alt="" />
      
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>SignUp</button></Link>
    </div>
    </>
  )
}

export default LandingPage
