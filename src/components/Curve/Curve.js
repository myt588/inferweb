import React, { Component } from 'react'
import './styles.scss'
import curve from '../../images/curve.svg'

class Curve extends Component {
  render () {
    return (
      // <div className='hander-banner' />
      <img className='curve' src={curve} alt='Curve' />
    )
  }
}

export default Curve
