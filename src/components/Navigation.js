import React from 'react'
import Middlenavigation from './Navigation/Middlenavigation'
import Topnavigation from './Navigation/Topnavigation'

const Navigation = () => {
  return (
    <div className='container'>
        <Topnavigation />
        <Middlenavigation />
    </div>
  )
}

export default Navigation