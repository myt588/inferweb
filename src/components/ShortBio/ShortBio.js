import React, { Component } from 'react'
import './styles.scss'

class ShortBio extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='short-bio-title'>INFERVISION CASES</div>
        <div className='short-bio-hr' />
        <div className='short-bio-subtitle'>
          We have over 200 <br />
          wikiHow teaches
        </div>
        <div className='short-bio-body pc-pt-6 pc-pb-6'>
          This wikiHow teaches you<br />how to insert spaces and line breaks in HTML.<br />
          Since pressing the space bar more than once results in only
        </div>
        <div className='short-bio-footer pc-pb-6'>e bar more than once results in only</div>
        <div className='short-bio-button'>
          <div>Interesting</div>
          <div className='short-bio-button-icon'>>></div>
        </div>
      </React.Fragment>
    )
  }
}

export default ShortBio
