import React, { Component } from 'react'
import teams from '../../images/teams.svg'
import './styles.scss'

class AboutTeams extends Component {
  render () {
    return (
      <React.Fragment>
        <img src={teams} alt='border' width={1388} height={700} />
      </React.Fragment>
    )
  }
}

export default AboutTeams
