import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = (props) => {
  console.log(props)
  return (
    <ul className="nav-links">
      <li onClick={props.onClick}>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink to="/places/new">Add place</NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
