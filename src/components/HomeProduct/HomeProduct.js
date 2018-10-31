import React, { Component } from 'react'
import { ShortBio } from '../index'
import homeProductCube from '../../images/home-product-cube.svg'
import './styles.scss'

class HomeProduct extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='row section-padding'>
          <div className='col-md-7'>
            <div className='home-product-bio'>
              <ShortBio />
            </div>
          </div>
          <div className='col-md-5'>
            <img className='home-product-img' src={homeProductCube} alt='About' />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeProduct
