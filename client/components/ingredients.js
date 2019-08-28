import React from 'react'

/**
 * COMPONENT
 */
export const Ingredients = props => {
  return (
    <div id="ingredients" className="ingrMain">
      <h1 className="sectionHeader">Ingredients That Work</h1>
      <img src="/images/line.png" width="100%" />
      <div className="ingrdContainer">
        <div className="ingrSection">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/fruit.png"
              alt="hemp extract"
            />
          </div>
          <div className="ingrTextCont">
            <h2 className="ingrHeader">Organic Hemp Extract</h2>
            <p className="smallerP ingrContent">
              Safe non-intoxicating broad-spectrum hemp extract with CBD to help
              you relax.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection reverse">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/greenTea.png"
              alt="green tea"
              height="100px"
              width="auto"
            />
          </div>
          <div className="textLeft ingrTextCont">
            <h2 className="ingrHeader">L-Theanine from Green Tea Extract</h2>
            <p className="smallerP ingrContent">
              Promotes cognitive health, relaxation, healthy sleep and focus.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/leafExtract.png"
              alt="leaf extract"
              height="100px"
              width="auto"
            />
          </div>
          <div className="ingrTextCont">
            <h2 className="ingrHeader">Rafuma Leaf Extract</h2>
            <p className="smallerP ingrContent">
              Used in China for 100s of years to alleviate occasional stress,
              promote a positive outlook, and improve focus and sleep quality.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection reverse">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/seeds.png"
              alt="griffonia seed extract"
              height="100px"
              width="auto"
            />
          </div>
          <div className="textLeft ingrTextCont">
            <h2 className="ingrHeader">Griffonia Seed Extract</h2>
            <p className="smallerP ingrContent">
              Benefits mood and lowers anxiety.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/leafExtract.png"
              alt="leaf extract"
              height="100px"
              width="auto"
            />
          </div>
          <div className="ingrTextCont">
            <h2 className="ingrHeader">L-tryptophan</h2>
            <p className="smallerP ingrContent">
              Aids your body in making serotonin to improve mood and sleep.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection reverse">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/seeds.png"
              alt="griffonia seed extract"
              height="100px"
              width="auto"
            />
          </div>
          <div className="textLeft ingrTextCont">
            <h2 className="ingrHeader">Gaba</h2>
            <p className="smallerP ingrContent">
              Helps relieve anxiety, benefit mood and reduce symptoms of PMS.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
      </div>
      <div className="ingrButton">
        <button className="button" type="button">
          Have a look at our full list of ingredients by clicking here
        </button>
      </div>
    </div>
  )
}

export default Ingredients
