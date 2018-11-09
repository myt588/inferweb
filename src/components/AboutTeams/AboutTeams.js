import React, { Component } from 'react'
import teams from '../../images/teams.svg'
import './styles.scss'

class AboutTeams extends Component {
  render () {
    return (
      <div className='about-team-wrapper row'>
        <div className='offset-md-1 col-md-10 text-center'>
          <img src={teams} alt='border' width={1388} height={700} />
        </div>
      </div>
    )
  }
}

export default AboutTeams
