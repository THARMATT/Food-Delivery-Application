import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Modal from '../Modal';
import { useCart, useDispatchCart } from '../Components/ContextReducer';
import Cart from '../screens/Cart';
const Navbar = () => {
 
  const[cartView,setCartView]=useState(false)
  let data = useCart();
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('authtoken');
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
          <Link className="nav-link active" to="/about">About</Link>
        </li>
         
        {localStorage.getItem('authtoken')?<li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/myorders">My Orders</Link>
        </li>:""}
      </ul>
      <div className="d-flex" role="">
      {/* <Link className="btn btn-success" to="/signup">SignUp</Link>
        <Link className="btn btn-success" to="/login">Login</Link> */}

     {!localStorage.getItem('authtoken')? <div className="d-flex">
      
      <Link className='btn btn-success mx-2' to="/login" role="button">Login</Link>
      <Link className='btn btn-success mx-2'to='/signup' role="button">Signup</Link>
    </div>: <div className='d-flex'>
    <div ><Link  className='btn btn-success mx-2'to='/myorders' role="button"  onClick={()=>{setCartView(true)}}>Cart {" "}
    <span className="badge badge-danger m-1" style={{"backgroundColor":"red"}}>{data.length}</span></Link></div>{cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal> :"null"}
    
   <div> <Link onClick={handleLogout}className='btn btn-success mx-2'to='/signup' role="button">Logout</Link></div>
    </div>
    
    }

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
