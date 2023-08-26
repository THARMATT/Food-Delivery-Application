import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";// can cross check
const Login = (props) => {
    let navigate = useNavigate();
    const [credentials,setCredentials]=useState({email:"",password:""})
  
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // fetch("http://localhost:5000/api/auth/login")
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            
          },

          body: JSON.stringify({email:credentials.email,password:credentials.password}),});
const json=await response.json()
console.log(json)
if(json.success){
    // redirect and sasve authtoken
    localStorage.setItem('token',json.authtoken)
  alert("login successfuly")
    // props.showAlert("invalid credentials","danger")
       navigate("/")
}
else{
    alert("invalid credentials")
}
    }
    const onChange = (e) => {
        setCredentials({ ...credentials , [e.target.name]: e.target.value });
      };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="form-group my-2">
    <label htmlFor="enter your Email my-2">Email address</label>
    <input type="email" className="form-control my-2" name="email" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control my-2" value={credentials.password} name="password" id="password" placeholder="Password" onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Login</button>
</form>
    </div>
  )
}

export default Login
