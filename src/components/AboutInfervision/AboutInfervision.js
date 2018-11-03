import React, { Component } from 'react'
import timeline from '../../images/timeline.svg'
import './styles.scss'

class AboutInfervision extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='row about-infer-wrapper'>
          <div className='col-md-6 about-infer-bio body3'>
            <div>Beijing Infervision is an artificial intelligence high-tech</div>
            <div>company committed to applying deep learning technology to</div>
            <div>assist medical image diagnosis as efficient and accurate</div>
            <div>solutions.</div>
          </div>
          <div className='col-md-6 about-infer-timeline'>
            <img src={timeline} alt='border' width={457} height={770} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AboutInfervision
