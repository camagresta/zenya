import React from 'react'
import {Ingredients} from './ingredients'
import {Quotes} from './quotes'
import {WhyCBD} from './whyCBD'
/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div className="wrapper">
      <div className="bgimg1"></div>
      <div className="bgimg2">
        <div className="whyZenyaCont">
          <div className="whyZenyaHeader">
            <h4 className="whyZenyaHeader">Why Zenya </h4>
          </div>
          <div className="whyZenyaP">
            <p className="whyZenyaContent">
              Zenya was created in New York, with the whole world in mind. While
              we love our city, it can sometimes be hectic AF, and feel like the
              most stressful place that exists. Stress and anxiety should not
              trash your day or consume you. That’s why we created Zenya – a
              healthy, small drink infused with broad spectrum hemp extract to
              help you relax, improve focus and simplify your life. So when the
              boss gets salty, have a Zenya and say Bye Felicia to that.
            </p>
          </div>
        </div>
      </div>
      <Ingredients />
      <Quotes />
      <WhyCBD />
    </div>
  )
}

export default UserHome
