import React, { Component } from 'react'
import parnters from '../../images/parnters.svg'
import './styles.scss'

class AboutPartners extends Component {
  render () {
    return (
      <div className='about-partners-wrapper row'>
        <div className='offset-md-1 col-md-10 text-center'>
          <img src={parnters} alt='border' width={1388} height={700} />
        </div>
      </div>
    )
  }
}

export default AboutPartners
