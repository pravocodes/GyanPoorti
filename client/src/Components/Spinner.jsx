import { ThreeCircles } from 'react-loader-spinner'
import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Spinner() {
    const [count, setCount]=useState(3);
    const navigate =useNavigate();
    const location=useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
          navigate("/login", {
            state: location.pathname,
          });
        return () => {
          clearInterval(interval);
        };
      }, [count, navigate, location]);

  return (<>
    <div style={{position: 'absolute',
    top: '50%', left: '50%', transform:'translate(-50%,-50%)'
    }}>
        <ThreeCircles
  visible={true}
  height="150"
  width="130"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  
    </div>
    <h2 style={{
    position:'absolute',
    top: '58%', left: '39%',
    }}>Redirecting you in {count} seconds</h2>
    </>
  )
}

export default Spinner
