import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => (
  <nav className="fixed-top navbar navbars navbar-light fixed-top navbar-expand-md">
    <div className="container">
      <Link to="/">
        <img className="navLogo" src="./images/navLogo.png" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link navLinks" href="#">
              About Us
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link navLinks" href="#">
              Our Ingredients
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navLinks" href="#">
              Learn About CBD
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navLinks" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Link to="/shop">
        <button type="button" className="shopBtn nav-link">
          Shop
        </button>
      </Link>
    </div>
  </nav>
  // <div className="pos-f-t fixed- navbar-expand-md">
  //   <div className="collapse collapsed" id="navbarToggleExternalContent">
  //     <div>
  //       <a className="nav-link navLinks" href="#">
  //         About Us
  //       </a>
  //       <a className="nav-link navLinks" href="#">
  //         Our Ingredients
  //       </a>
  //       <a className="nav-link navLinks" href="#">
  //         Learn About CBD
  //       </a>
  //     </div>
  //     <img className="navLogo" src="./images/navLogo.png" />
  //   </div>
  //   <nav className="navbars">
  //     <button
  //       className="navbar-toggle"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarToggleExternalContent"
  //       aria-controls="navbarToggleExternalContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <a className="navLinks">Menu</a>
  //     </button>
  //     <Link to="/shop">
  //       <button type="button" className="shopBtn">
  //         Shop
  //       </button>{' '}
  //     </Link>
  //   </nav>
  // </div>
)

export default Navbar
