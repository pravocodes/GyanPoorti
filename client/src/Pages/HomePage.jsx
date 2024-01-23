import React from 'react'
import styles from "./HomePage.module.css";
import { useAuth } from '../Context/Auth';

function HomePage() {
  const {auth} = useAuth();
  return (
    <div>
      {JSON.stringify(auth)}
    </div>
  )
}

export default HomePage
