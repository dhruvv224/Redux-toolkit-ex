import React from 'react'
import './Navbar.css';
import carticon from '../Assets/shopping-cart.png'
import brand from './Brand/logo-no-background.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" href="#"><img className='brand-icon' src={brand}></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><h6 className='nav-texts' style={{fontSize:'22px',color:''}}>Home</h6></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#"><h6 className='nav-texts'  style={{fontSize:'22px',color:''}}>Categories</h6></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Products"><h6 className='nav-texts'  style={{fontSize:'22px',color:''}}>Products</h6></Link>
            </li>
        
            <li>
              <Link to='/Cart' className='nav-link'><img src={carticon}  className='cart-icon'></img>cart({items.length})</Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
export default Navbar;