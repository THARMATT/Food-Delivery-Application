import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import video from '../assets/video2.mp4'
const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const { name, email, password, } = credentials;
    const response = await fetch("http://localhost:5000/api/createuser", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name, email, password
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect and sasve authtoken
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    }
    else {
      alert("signup not done yet")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (

  
      <div class="overlay">
        <video  className="video" src={video} autoPlay muted loop playsInline />
        <div className="logincontainer">
          <div className='container' >
            <form onSubmit={handleSubmit}>
              {/* <div className="form-row"> */}
                <div className="form-group my-2">
                  <label className="mx-1" htmlFor="NAME">Name</label>
                  <input
                    onChange={onChange}
                    type="text"
                    name="name"
                    className="form-control my-2"
                    placeholder="Enter Your Name"
                  />
                {/* </div> */}
              </div>
              <div className="form-row">
                <div className="form-group  ">
                  <label className="mx-1" htmlFor="inputEmail4">Email</label>
                  <input
                    onChange={onChange}
                    type="email"
                    name="email"
                    className="form-control my-2"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group  ">
                  <label className="mx-1" htmlFor="inputPassword4">Password</label>
                  <input
                    onChange={onChange}
                    type="password"
                    name="password"
                    className="form-control my-2"
                    id="password"
                    placeholder="Password"
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group  ">
                  <label className="mx-1" htmlFor="cpassword4">Confirm Password</label>
                  <input
                    onChange={onChange}
                    type="password"
                    name="cpassword"
                    className="form-control my-2"
                    id="cpassword"
                    placeholder="Confirm your Password"
                  />
                </div>
              </div>
              <button type="submit my-2 " className="btn btn-success my-1">
                Sign in
              </button>
              <Link className="btn btn-success m-1" to="/login"> Already a User?</Link>
            </form>
          </div> </div> </div> 
  );
};

export default Signup;
