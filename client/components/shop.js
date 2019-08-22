import React from 'react'

const Shop = props => {
  return (
    <div>
      <h4 className="sectionHeader"> Our Products </h4>
      <div className="shopCont">
        <div className="product">
          <img src="/images/product.png" alt="product" className="responsive" />
        </div>
        <div className="checkoutCont responsive">
          <h3 className="shopHeader">Lemon Lime Relax </h3>
        </div>
      </div>
    </div>
  )
}
export default Shop
