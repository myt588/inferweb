import React, { Component } from 'react'
import honors from '../../images/honors.svg'
import './styles.scss'

class AboutHonors extends Component {
  render () {
    return (
      <div className='about-honors-wrapper row'>
        <div className='offset-md-1 col-md-10 text-center'>
          <img src={honors} alt='border' width={1388} height={700} />
        </div>
      </div>
    )
  }
}

export default AboutHonors
