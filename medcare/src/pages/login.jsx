import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import registerimg from "../registerimg.png"

export default function LoginForm() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [err, setErr] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleformchange(event) {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }
  async function handleLogin(event) {
    event.preventDefault();
    const response= await fetch('http://localhost:3000/api/login',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),
    })
    const data=await response.json();
    console.log(data);
    if(data.user)
  {
    alert('Login Successful')
    navigate("/bookApp")
  }
  else
  {
    alert('Please check your username and password')
  }
  }
  
 

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="formpage">
       <img className="registerimg" src={registerimg} alt="Profile" />
      <div className="formbox">
        <div className="pageinfo">
          <span className="logo">MedCare</span>
          <span className="info">Welcome to a all in one HealthCare App</span>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <input type="email" onChange={handleformchange} name="email" placeholder="Your Email" />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleformchange}
              name="password"
              placeholder="Your Password"
            />
            {/* FontAwesome eye icon for password visibility toggle */}
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="alreadylogin">
            <div>
              Do not have an account?<Link to="/">Register-Here</Link>
            </div>
          </div>
          {err && <span>No account detected</span>}
          <button className="registerbutton">Login</button>
        </form>
      </div>
    </div>
  );
}
