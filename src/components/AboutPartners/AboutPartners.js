import React, { Component } from 'react'
import parnters from '../../images/parnters.svg'
import './styles.scss'

class AboutPartners extends Component {
  render () {
    return (
      <React.Fragment>
        <img src={parnters} alt='border' width={1388} height={700} />
      </React.Fragment>
    )
  }
}

export default AboutPartners
