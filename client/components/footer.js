import React from 'react'
const Footer = () => (
  <div className="footerContainer">
    <div className="footer">
      <div>
        <img className="footerLogo" src="./images/navLogoWhite.png" />
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <a className="footerText" href="#">
            about us
          </a>
          <a className="footerText" href="#">
            our ingredients
          </a>
          <a className="footerText" href="#">
            learn about cbd
          </a>
          <a className="footerText" href="#">
            contact
          </a>
        </div>
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <a className="footerText" href="#">
            privacy policy
          </a>
          <a className="footerText" href="#">
            terms of use
          </a>
        </div>
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <span className="footerText">stay in touch</span>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="email"
              aria-label="email address"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-light"
                type="button"
                id="button-addon2"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerTextCont">
        <div className="footerP copyright">
          <span className="footerText copyright">
            Copyright © 2019 Zenya. All rights reserved. These statements have
            not been evaluated by the food and drug administration. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
          </span>
        </div>
      </div>
    </div>
  </div>
)
export default Footer
