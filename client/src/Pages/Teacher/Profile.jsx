import React, { useEffect } from 'react';
import styles from "./Profile.module.css";

function Profile() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.background = '#linear-gradient(to right, #7a6cde, #4d43b4)';

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <main className={styles.main}>
        <h1>Teacher Profile</h1>
    </main>
  )
}

export default Profile;
