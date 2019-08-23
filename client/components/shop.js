import React from 'react'

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singleShot: true,
      quantity: 1
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.setState({quantity: this.state.quantity + 1})
  }

  decrease() {
    if (!this.state.quantity) {
      return
    }
    this.setState({quantity: this.state.quantity - 1})
  }
  render() {
    return (
      <div className="shopPage">
        <h4 className="text-center"> our products </h4>
        <img src="/images/line.png" width="100%" />
        <div className="shopCont">
          <div className="product">
            <p>hi</p>
          </div>
          <div className="checkoutCont">
            <div className="checkoutContent">
              <h5 className="shopHeader">Lemon Lime Relax </h5>
              <div className="shopButtons">
                <div>
                  <button type="button">2oz Single Shot</button>
                  <button type="button"> 2oz / 6 pack</button>
                </div>
                <div>
                  <button type="button" onClick={this.decrease}>
                    -
                  </button>
                  <span> {this.state.quantity} </span>
                  <button type="button" onClick={this.increase}>
                    +
                  </button>
                </div>
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Shop
