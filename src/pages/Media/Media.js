import React, { Component } from 'react'
import { MediaCenter, MediaNav } from '../../components'

class Media extends Component {
  render () {
    return (
      <div className='page-wrapper'>
        <MediaCenter />
        <MediaNav />
      </div>
    )
  }
}

export default Media
