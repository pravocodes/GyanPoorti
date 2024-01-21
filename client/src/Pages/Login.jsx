import React from 'react'
import styles from "./Login.module.css";

const Login = () => {
  console.log(styles.container);
  return (
    <>
    {/* <img src="./wave.png"></img> */}
    <div className={styles.container}>
      <img src="https://i.postimg.cc/zX8Zbg5P/avatar.png" alt="" />
      <form action='#'>
       {/* <label for="username">Username: </label> */}
       <input type="text" name="username" placeholder="Username" required></input>

       {/* <label for="password">Password: </label> */}
       <input type="text" name="password" placeholder="Password" required></input>
       <a href="a">Forgot Password?</a>
       <button type="submit">Login</button>
      
      </form>
    </div>
    
    </>
  )
}

export default Login;