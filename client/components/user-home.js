import React from 'react'
import {Ingredients} from './ingredients'
import {Quotes} from './quotes'
import {WhyCBD} from './whyCBD'
/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div className="section home">
      <div className="section bgimg1"></div>
      <div className="section bgimg2"></div>
      <Ingredients />
      <Quotes />
      <WhyCBD />
    </div>
  )
}

export default UserHome
