import React from 'react'
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
  <>
    <div className={styles.Homecontainer}>
      <h2>HOME PAGE</h2>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>SignUp</button></Link>
    </div>
    </>
  )
}

export default Home
