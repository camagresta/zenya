import React from 'react'

/**
 * COMPONENT
 */
export const Ingredients = props => {
  return (
    <div className="ingrMain">
      <h4 className="sectionHeader">Ingredients That Work</h4>
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
            <h6 className="ingrHeader">Broad Spectrum Hemp Extract</h6>
            <p className="ingrContent">
              Hemp oil is derived from the hemp plant. Hemp plants are a form of
              cannabis sativa, that does not contain any THC, the extracted oil
              does not contain either. Full spectrum hemp oil also contains
              essential vitamins, minerals, Omega fatty acids, flavonoids,
              chlorophyll and terpenes. Zenya is infused with natural, safe
              extract from organically grown hemp from Colorado.
            </p>
          </div>
        </div>
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
            <h6 className="ingrHeader">L-Theanine Green Tea Extract</h6>
            <p className="ingrContent">
              L-theanine, an amino acid found in green tea, reduces anxiety by
              blocking excitatory stimuli at glutamate receptors in the brain.
              The tea leaves and fungi benefit your cognitive health, promoting
              relaxation, healthy sleep and focus.
            </p>
          </div>
        </div>
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
            <h6 className="ingrHeader">Luobuma Leaf Extract</h6>
            <p className="ingrContent">
              Apocynum venetum, called luobuma in China, is a small shrub whose
              leaves make a popular herbal tea. Luobuma has been used for
              hundreds of years in Chinese medicine and Uighur traditional
              medicine near Tibet. Modern research has discovered many
              physiological effects of Luobuma, including antidepressant and
              anti-anxiety properties.
            </p>
          </div>
        </div>
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
            <h6 className="ingrHeader">Griffonia Seed Extract</h6>
            <p className="ingrContent">
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
            <h6 className="ingrHeader">Natural Flavors</h6>
            <p className="ingrContent">
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
        <button type="button">
          Have a look at our full list of ingredients by clicking here
        </button>
      </div>
    </div>
  )
}

export default Ingredients
