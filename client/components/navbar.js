import React from 'react'
const Navbar = () => (
  <nav className="nav">
    <img className="navLogo" src="./images/navLogo.png" />

    <ul className="mainNav">
      <li>
        <a className="navLinks">About Us</a>
      </li>
      <li>
        <a className="navLinks">Shop</a>
      </li>
    </ul>
  </nav>
)

export default Navbar
