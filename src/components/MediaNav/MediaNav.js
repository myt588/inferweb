import React, { Component } from 'react'
import { MediaList } from '../index'
import navBorder from '../../images/nav-border.svg'
import './styles.scss'

class MediaNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      onTop: false
    }
  }

  render () {
    const items = ['2018.04', '2018.02', '2018.01', '2017.12', '2017.07', '2017.03', '2017.01']
    return (
      <React.Fragment>
        <div className='about-nav-wrapper'>
          <div className='d-flex justify-content-between'>
            {items.map((item, index) => (
              <div
                onClick={() => this.setState({ selected: index })}
                className='about-nav-item d-flex justify-content-between flex-column align-items-center'
                key={index}>
                <div className='about-nav-title'>{item}</div>
                {this.state.selected === index &&
                <img className='about-nav-border' src={navBorder} alt='border' />
                }
              </div>
            ))}
          </div>
        </div>
        {items.map((item, index) => (
          <div className={this.state.selected === index ? '' : 'd-none'}><MediaList /></div>
        ))}
      </React.Fragment>
    )
  }
}

export default MediaNav
