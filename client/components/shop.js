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
        <h1 className="text-center"> our products </h1>
        <img src="/images/line.png" width="100%" />
        <div className="shopCont">
          <div className="product"></div>
          <div className="checkoutCont">
            <div className="checkoutContent">
              <div className="checkoutCon">
                <h2 className="shopHeader">Lemon Lime Relax </h2>
                <img src="/images/line.png" width="100%" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>$7.99</p>
                <div className="shopButtons">
                  <div>
                    <button className="shopButtons2 button" type="button">
                      2oz Single Shot
                    </button>
                    <button className=" shopButtons2 button" type="button">
                      {' '}
                      2oz / 6 pack
                    </button>
                  </div>
                  <div>
                    <button
                      className="shopButtons2 button"
                      type="button"
                      onClick={this.decrease}
                    >
                      -
                    </button>
                    <span> {this.state.quantity} </span>
                    <button
                      className="shopButtons2 button"
                      type="button"
                      onClick={this.increase}
                    >
                      +
                    </button>
                  </div>
                  <button className="shopButtons2 button" type="button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Shop
