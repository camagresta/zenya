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
            <h2 className="ingrHeader">Broad Spectrum Hemp Extract</h2>
            <p className="smallerP ingrContent">
              Hemp oil is derived from the hemp plant. Hemp plants are a form of
              cannabis sativa, that does not contain any THC, the extracted oil
              does not contain either. Full spectrum hemp oil also contains
              essential vitamins, minerals, Omega fatty acids, flavonoids,
              chlorophyll and terpenes. Zenya is infused with natural, safe
              extract from organically grown hemp from Colorado.
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
            <h2 className="ingrHeader">L-Theanine Green Tea Extract</h2>
            <p className="smallerP ingrContent">
              L-theanine, an amino acid found in green tea, reduces anxiety by
              blocking excitatory stimuli at glutamate receptors in the brain.
              The tea leaves and fungi benefit your cognitive health, promoting
              relaxation, healthy sleep and focus.
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
            <h2 className="ingrHeader">Luobuma Leaf Extract</h2>
            <p className="smallerP ingrContent">
              Apocynum venetum, called luobuma in China, is a small shrub whose
              leaves make a popular herbal tea. Luobuma has been used for
              hundreds of years in Chinese medicine and Uighur traditional
              medicine near Tibet. Modern research has discovered many
              physiological effects of Luobuma, including antidepressant and
              anti-anxiety properties.
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
              The seeds of Griffonia simplicifolia Baill, a shrub native to West
              Africa, are rich in 5-hydroxy-l-tryptophan (5-HTP) which is
              important in the synthesis of serotonin, a chemical messenger that
              sends signals in your brain. Low serotonin levels are associated
              with anxiety, depression, sleep disorders, weight gain and other
              health problems. Studies indicate that Griffonia seed extract has
              anti-anxiety effects.
            </p>
          </div>
        </div>
        <img src="/images/line.png" width="100%" />
        <div className="ingrSection" id="finalSection">
          <div className="ingrPhoto">
            <img
              className="responsive"
              src="/images/fruit.png"
              alt="fruit"
              height="100px"
              width="auto"
            />
          </div>
          <div className="ingrTextCont">
            <h2 className="ingrHeader">Natural Flavors</h2>
            <p className="smallerP ingrContent">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
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
