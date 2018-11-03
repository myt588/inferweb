import React, { Component } from 'react'
import honors from '../../images/honors.svg'
import './styles.scss'

class AboutHonors extends Component {
  render () {
    return (
      <React.Fragment>
        <img src={honors} alt='border' width={1388} height={700} />
      </React.Fragment>
    )
  }
}

export default AboutHonors
