import React from 'react'
const Navbar = () => (
  <div className="pos-f-t">
    <div className="collapse collapsed" id="navbarToggleExternalContent">
      <div>
        <a className="nav-link navLinks" href="#">
          About Us
        </a>
        <a className="nav-link navLinks" href="#">
          Our Ingredients
        </a>
        <a className="nav-link navLinks" href="#">
          What is CBD?
        </a>
      </div>
      <img className="navLogo" src="./images/navLogo.png" />
    </div>
    <nav className="navbars">
      <button
        className="navbar-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <a className="navLinks">Menu</a>
      </button>
      <button type="button" className="shopBtn">
        Shop
      </button>
    </nav>
  </div>
)

export default Navbar
