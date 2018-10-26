import React, { Component } from 'react'
import { ShortBio } from '../index'
import homeAbout1 from '../../images/home-about-1.svg'
import './styles.scss'

class HomeAbout extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-md-6'>
            <img className='home-about-img' src={homeAbout1} alt='About' />
          </div>
          <div className='col-md-6'>
            <div className='home-about-bio'>
              <ShortBio />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeAbout
