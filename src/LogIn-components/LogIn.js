import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../LogIn-components/LogIn.css'


function LogIn() {

    const navigate = useNavigate()
    function handleclick () {
        navigate("/OrderingApp");
    }
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="bgImage-container">
          <img src="./login-images/bg1.webp" />
        </div>
        <div className="bgImage2-container">
          <img src="./login-images/bg2.webp" />
        </div>
        <div className="loginform-container">
          <input type="text" placeholder="TABLE NUMBER" />
          <input type="password" placeholder="PASSWORD" />
          <button onClick={handleclick}>
            <p>LOG IN </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn