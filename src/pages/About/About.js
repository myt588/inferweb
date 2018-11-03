import React, { Component } from 'react'
import { AboutUs, AboutNav } from '../../components/index'
import aboutBG from '../../images/about-bg.svg'
import './styles.scss'

class About extends Component {
  render () {
    return (
      <div className='page-wrapper'>
        <AboutUs />
        <div style={{ width: '100%', height: '800px' }} />
        <img className='about-background' src={aboutBG} alt='bg' />
        <AboutNav />
      </div>
    )
  }
}

export default About
