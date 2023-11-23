// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router
import "../style.css"
import { useAuth } from './Auth';


const navLinkStyles = ({isActive}) => {
    return {
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none": "underline",
      }
    }
    
  const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink style={navLinkStyles} to="/" className="navbar-logo">
          Your Logo
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink style={navLinkStyles} to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} to="/products" className="nav-links">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} to="/users" className="nav-links">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={navLinkStyles} to="/profile" className="nav-links">
              Profile
            </NavLink>
          </li>
          {console.log(!auth.user)}
          {!auth.user && (
            
            <li className="nav-item">
            <NavLink style={navLinkStyles} to="/login" className="nav-links">
              Login
            </NavLink>
          </li>
          )

          }
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
