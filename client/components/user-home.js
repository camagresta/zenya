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
      <div id="aboutUs" className="bgimg2">
        <div className="whyZenyaCont">
          <div className="whyZenyaHeader">
            <h1 className="whyZenyaHeader">Why Zenya?</h1>
          </div>

          <div className="whyZenyaP">
            <p className="smallerP whyZenyaContent">
              Zenya was created in New York, with the whole world in mind. While
              we love our city, it can sometimes be hectic AF, and feel like the
              most stressful place that exists. Stress and anxiety should not
              trash your day or consume you. That’s why we created Zenya – a
              healthy, small drink infused with broad spectrum hemp extract to
              help you relax, improve focus and simplify your life. So when the
              boss gets salty, have a Zenya and say Bye Felicia to that.
            </p>
          </div>
          <div className="whatsflex">
            <div>
              <div className="whatsZenyaHeader">
                <h1 className="whatsZenyaHeader">What's Zenya </h1>
              </div>

              <div className="whatsZenyaP">
                <p className="smallerP whatsZenyaContent">
                  Zenya is a special blend of hemp extract, medicinal herbs and
                  mood-enhancing ingredients. Have one and bring a bit of calm
                  to your crazy day, without any buzz or caffeine jitters. Great
                  for when you need a respite but can’t stop yet- like at work
                  or with the little ones.
                </p>
                <p className="smallerP whatsZenyaContent">
                  We’re here to help make your life a little calmer – and
                  fairer. We know you’ve got a ton on your plate, you’re
                  stressed and sometimes don’t get what you deserve. That’s why
                  we support Paradigm for Parity, the National Organization of
                  Women and the Anxiety and Depression Association of America.
                  Because we believe a girl should reach her goals, and
                  sometimes you just need a little helping hand.
                </p>
              </div>
            </div>
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
