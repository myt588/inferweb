import React, { Component } from 'react'
import mediaCenter from '../../images/media-center.svg'
import './styles.scss'

class MediaCenter extends Component {
  render () {
    return (
      <div className='row media-center-wrapper'>
        <div className='col-md-5 offset-md-1'>
          <img src={mediaCenter} alt='Media' width='600' />
        </div>
        <div className='col-md-5 media-wrapper'>
          <div className='media-title'>Media Center</div>
          <div className='media-subtitle'>updated. Oct 3. 2018</div>
        </div>
      </div>
    )
  }
}

export default MediaCenter
