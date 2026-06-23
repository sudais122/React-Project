import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className='detailsWrapper'>

      <div className='card'>
        <p className='number'>2+</p>
        <p className='label'>Years Coding</p>
      </div>

      <div className='card'>
        <p className='number'>6+</p>
        <p className='label'>Technologies</p>
      </div>

      <div className='card'>
        <p className='number'>3+</p>
        <p className='label'>Projects Shipped</p>
      </div>

    </div>
  )
}

export default Details