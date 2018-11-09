import React, { Component } from 'react'
import timeline from '../../images/timeline.svg'
import './styles.scss'

class AboutInfervision extends Component {
  render () {
    return (
      <div className='about-infer-wrapper'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='about-infer-bio body3'>
              <div>Beijing Infervision is an artificial intelligence high-tech</div>
              <div>company committed to applying deep learning technology to</div>
              <div>assist medical image diagnosis as efficient and accurate</div>
              <div>solutions.</div>
            </div>
          </div>
          <div className='col-md-7'>
            <img className='about-infer-timeline' src={timeline} alt='border' width={457} height={770} />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutInfervision
