import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import registerimg from "../registerimg.png"

//now we make changes here
export default function Registerform() {
  const [formData, setFormData] = React.useState({ name: "", email: "", password: "" });
  const [err, setErr] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleformchange(event) {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response= await fetch('http://localhost:3000/api/register',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),
    })
    const data=await response.json();
    console.log(data);

    if (response.ok) { 
      console.log("this is working")
      navigate("/login"); 
    } else {
      setErr(true); 
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
          <span className="logo">Register</span>
          <span className="info">Welcome to a all in one HealthCare App</span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" onChange={handleformchange} name="name" placeholder="Name" />
          <input type="email" onChange={handleformchange} name="email" placeholder="Email" />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleformchange}
              name="password"
              placeholder="Password"
            />
           
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="alreadylogin">
            <div>
              Already have an account?<Link to="/login">Login-Here</Link>
            </div>
          </div>
          <button className="registerbutton">Register</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
}
