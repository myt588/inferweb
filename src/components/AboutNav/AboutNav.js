import React, { Component } from 'react'
import { AboutInfervision, AboutLeader, AboutTeams, AboutHonors, AboutPartners } from '../index'
import navBorder from '../../images/nav-border.svg'
import './styles.scss'

class AboutNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      onTop: false
    }
  }

  render () {
    const items = ['Infervision', 'Leader', 'Teams', 'Honors', 'Parters']
    return (
      <React.Fragment>
        <div className='about-nav-wrapper'>
          <div className='row'>
            <div className='offset-md-1' />
            {items.map((item, index) => (
              <div
                onClick={() => this.setState({ selected: index })}
                className='col-md-2 d-flex justify-content-between flex-column align-items-center'
                key={index}>
                <div className='about-nav-item'>{item}</div>
                {this.state.selected === index &&
                <img className='about-nav-border' src={navBorder} alt='border' />
                }
              </div>
            ))}
            <div className='offset-md-1' />
          </div>
        </div>
        <div className={this.state.selected === 0 ? '' : 'd-none'}><AboutInfervision /></div>
        <div className={this.state.selected === 1 ? '' : 'd-none'}><AboutLeader /></div>
        <div className={this.state.selected === 2 ? '' : 'd-none'}><AboutTeams /></div>
        <div className={this.state.selected === 3 ? '' : 'd-none'}><AboutHonors /></div>
        <div className={this.state.selected === 4 ? '' : 'd-none'}><AboutPartners /></div>
      </React.Fragment>
    )
  }
}

export default AboutNav
