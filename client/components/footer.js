import React from 'react'
const Footer = () => (
  <div className="footerContainer">
    <div id="contact" className="footer">
      <div>
        <img className="footerLogo" src="./images/navLogoWhite.png" />
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <a className="a footerText" href="/#aboutUs">
            about us
          </a>
          <a className="a footerText" href="/#ingredients">
            our ingredients
          </a>
          <a className="a footerText" href="/#learnAboutCBD">
            learn about cbd
          </a>
          <a className="a footerText" href="/#contact">
            contact
          </a>
        </div>
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <a className="a footerText" href="#">
            privacy policy
          </a>
          <a className="a footerText" href="#">
            terms of use
          </a>
        </div>
      </div>
      <div className="footerTextCont">
        <div className="footerP">
          <p className="a footerText">stay in touch</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input"
              placeholder="email"
              aria-label="email address"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="button btn btn-sm btn-outline-light"
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
          <p className="a footerText copyright">
            Copyright © 2019 Zenya. All rights reserved. These statements have
            not been evaluated by the food and drug administration. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default Footer
