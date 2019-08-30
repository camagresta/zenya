import React from 'react'

class Shop extends React.Component {
  render() {
    return (
      <div className="shopPage">
        <h2 className="text-center"> our products </h2>
        <img src="/images/line.png" width="100%" />
        <div>
          <div>
            <div>
              <div id="product-component-1567034919011"></div>
              <div id="product-component-1567035453018"></div>
              <script type="text/javascript">
                {(function() {
                  var scriptURL =
                    'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
                  if (window.ShopifyBuy) {
                    if (window.ShopifyBuy.UI) {
                      ShopifyBuyInit()
                    } else {
                      loadScript()
                    }
                  } else {
                    loadScript()
                  }
                  function loadScript() {
                    var script = document.createElement('script')
                    script.async = true
                    script.src = scriptURL
                    ;(
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByTagName('body')[0]
                    ).appendChild(script)
                    script.onload = ShopifyBuyInit
                  }
                  function ShopifyBuyInit() {
                    var client = ShopifyBuy.buildClient({
                      domain: 'getzenya-com.myshopify.com',
                      storefrontAccessToken: 'fcc0a50ef899f8f8dd6607fa83b2efc6'
                    })
                    ShopifyBuy.UI.onReady(client).then(function(ui) {
                      ui.createComponent('product', {
                        id: '2196759904307',
                        node: document.getElementById(
                          'product-component-1567035453018'
                        ),
                        moneyFormat: '%24%7B%7Bamount%7D%7D',
                        options: {
                          product: {
                            styles: {
                              product: {
                                '@media (min-width: 601px)': {
                                  'max-width': '100%',
                                  'margin-left': '0',
                                  'margin-bottom': '50px'
                                },
                                'text-align': 'left'
                              },
                              title: {
                                'font-family': 'Montserrat, sans-serif',
                                'font-size': '26px',
                                color: '#4f6d8c'
                              },
                              button: {
                                'font-family': 'Montserrat, sans-serif',
                                ':hover': {
                                  'background-color': '#47627e'
                                },
                                'background-color': '#4f6d8c',
                                ':focus': {
                                  'background-color': '#47627e'
                                },
                                'border-radius': '6px'
                              },
                              price: {
                                'font-family': 'Montserrat, sans-serif',
                                'font-size': '18px',
                                color: '#4f6d8c'
                              },
                              compareAt: {
                                'font-family': 'Montserrat, sans-serif',
                                'font-size': '15.299999999999999px',
                                color: '#4f6d8c'
                              },
                              description: {
                                'font-family': 'Montserrat, sans-serif',
                                color: '#4f6d8c'
                              }
                            },
                            layout: 'horizontal',
                            contents: {
                              img: false,
                              imgWithCarousel: true,
                              button: false,
                              buttonWithQuantity: true,
                              description: true
                            },
                            width: '100%',
                            text: {
                              button: 'Add to cart'
                            },
                            googleFonts: ['Montserrat']
                          },
                          productSet: {
                            styles: {
                              products: {
                                '@media (min-width: 601px)': {
                                  'margin-left': '-20px'
                                }
                              }
                            }
                          },
                          modalProduct: {
                            contents: {
                              img: false,
                              imgWithCarousel: true,
                              button: false,
                              buttonWithQuantity: true
                            },
                            styles: {
                              product: {
                                '@media (min-width: 601px)': {
                                  'max-width': '100%',
                                  'margin-left': '0px',
                                  'margin-bottom': '0px'
                                }
                              },
                              button: {
                                'font-family': 'Montserrat, sans-serif',
                                ':hover': {
                                  'background-color': '#47627e'
                                },
                                'background-color': '#4f6d8c',
                                ':focus': {
                                  'background-color': '#47627e'
                                },
                                'border-radius': '6px'
                              }
                            },
                            googleFonts: ['Montserrat'],
                            text: {
                              button: 'Add to cart'
                            }
                          },
                          cart: {
                            styles: {
                              button: {
                                'font-family': 'Montserrat, sans-serif',
                                ':hover': {
                                  'background-color': '#47627e'
                                },
                                'background-color': '#4f6d8c',
                                ':focus': {
                                  'background-color': '#47627e'
                                },
                                'border-radius': '6px'
                              }
                            },
                            text: {
                              total: 'Subtotal',
                              button: 'Checkout'
                            },
                            googleFonts: ['Montserrat']
                          },
                          toggle: {
                            styles: {
                              button: {
                                'font-family': 'Montserrat, sans-serif'
                              },
                              toggle: {
                                'background-color': '#4f6d8c',
                                ':hover': {
                                  'background-color': '#47627e'
                                },
                                ':focus': {
                                  'background-color': '#47627e'
                                }
                              }
                            },
                            googleFonts: ['Montserrat']
                          }
                        }
                      })
                    })
                  }
                })()}
                ;
              </script>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Shop
