import React from 'react'
import {Ingredients} from './ingredients'
/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div className="section home">
      <div className="section bgimg1"></div>
      <div className="section bgimg2"></div>
      <div className="section bgimg3"></div>
      <Ingredients />
    </div>
  )
}

export default UserHome
