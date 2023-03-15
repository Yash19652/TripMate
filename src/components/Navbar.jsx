import React, { useState } from 'react'
import "./NavbarStyles.css"
import { NavLink } from "react-router-dom"
import { MenuItems } from './MenuItems'

const Navbar = () => {

  const [Icon,setIcon] = useState(false);
  
  function handleToggle(){
    setIcon(!Icon);
  }

  return (
    <div className='NavbarItems'>
      <NavLink className="navbar-link" to="/"><h1 className='navbar-logo'>TripMate</h1>
      </NavLink>
      
      <div className="menu-icons" onClick={handleToggle}>
      {Icon ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}

      </div>

      <ul className={Icon ? `nav-menu active` : `nav-menu`}>
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <NavLink className={item.cName} to={item.url}>
              <i className={item.icon}></i>{item.title}
            </NavLink>
          </li>
      
        )
      })}
      <button>Sign Up</button>
      </ul>
    </div>
  )
}

export default Navbar