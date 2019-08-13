import React from 'react'

/**
 * COMPONENT
 */
export const Quotes = props => {
  return (
    <div className="quotesContain">
      <img
        src="/images/quotesBg.png"
        className="bgimg3"
        width="100%"
        height="100px"
      />
      <div className="centered">Quote goes here</div>
      <div className="centerTop">
        <img src="/images/healthline.png" width="85px" />
      </div>
    </div>
  )
}
