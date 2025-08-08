import React from 'react'
import './SiteContainer.css'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'

const SiteContainer = () => {
  return (
    <div className='site-container'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default SiteContainer