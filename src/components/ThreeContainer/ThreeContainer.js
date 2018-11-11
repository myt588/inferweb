import React, { Component } from 'react'
import threeEntryPoint from './threejs/threeEntryPoint'
import './styles.scss'

class ThreeContainer extends Component {
  componentDidMount () {
    threeEntryPoint(this.threeRootElement)
  }

  render () {
    return (
      <React.Fragment>
        <div id='container' ref={element => { this.threeRootElement = element }} />
        <div id='menu'>
          <button id='grid'>GRID</button>
          <button id='helix'>HELIX</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ThreeContainer
