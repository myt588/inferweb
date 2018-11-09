import React, { Component } from 'react'
import { AboutUs, AboutNav } from '../../components/index'
import './styles.scss'

class About extends Component {
  render () {
    return (
      <React.Fragment>
        <AboutUs />
        <AboutNav />
      </React.Fragment>
    )
  }
}

export default About
