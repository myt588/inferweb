import React, { Component } from 'react'
import ceo from '../../images/ceo.svg'
import './styles.scss'

class AboutLeader extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='about-leader-wrapper row'>
          <div className='col-md-6'>
            <div className='about-leader-bio'>
              <div className='headline40'>CHEN Kuan</div>
              <div className='body3'>Infervision Founder & CEO</div>
              <div className='body3'>
                CK is a graduate of the University of Chicago, where he studied under four Nobel Prize winners, Gary Becker, Robert Fogel, James Heckman and Lars Hansen. He studied financial modeling and intelligent modeling in the Double Doctor Degrees Program of Economics and Finance. In 2014, he founded Beijing Infervision, and in 2017 he launched the world’s first “artificial intelligence precision healthcare platform” with three products AI-CT, AI-DR, and AI-Scholar.
              </div>
            </div>
          </div>
          <div className='col-md-6 about-leader-photo'>
            <img src={ceo} alt='border' width={623} height={812} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AboutLeader
