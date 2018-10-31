import React, { Component } from 'react'
import './styles.scss'
import curve from '../../images/curve.svg'
import curveReversed from '../../images/curve-reversed.svg'

class Curve extends Component {
  render () {
    if (this.props.reversed) {
      return (
        <img className='curve' src={curveReversed} alt='Curve' />
      )
    } else {
      return (
        // <div className='hander-banner' />
        <img className='curve' src={curve} alt='Curve' />
      )
    }
  }
}

export default Curve
