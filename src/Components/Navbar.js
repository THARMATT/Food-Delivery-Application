import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">foodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
         
       
      </ul>
      <form className="d-flex" role="search">
      <Link className="btn btn-success" to="/login">SignUp</Link>
        <Link className="btn btn-success" to="/login">Login</Link>

{/*         
     {!localStorage.getItem('token')? <form className="d-flex">
      
      <Link className='btn btn-success mx-2' to="/login" role="button">Login</Link>
      <Link className='btn btn-success mx-2'to='/signup' role="button">Signup</Link>
    </form>: <Link onClick={handleLogout}className='btn btn-primary mx-2'to='/signup' role="button">Logout</Link>} */}

      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar