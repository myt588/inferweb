import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Waypoint from 'react-waypoint'
import Curve from '../Curve/'
import logo from '../../images/logo.svg'
import './styles.scss'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onTop: true
    }
  }

  onEnter () {
    this.setState({
      onTop: true
    })
  }

  onLeave () {
    this.setState({
      onTop: false
    })
  }

  render () {
    const style = this.props.location.pathname === '/about' ? {} : { backgroundColor: 'black' }
    return (
      <nav style={style} id='HEADER'>
        <div className={this.state.onTop ? 'header' : 'header-fixed'}>
          <div className='row'>
            <div className='col-md-3 offset-md-1'>
              <Link to='/'><img src={logo} alt='Logo' width='180' /></Link>
            </div>
            <div className='col-md-7'>
              <ul>
                <li>
                  <Link to='/request'>
                    <div className='nav-button'>
                      <div>Request</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/cases'>Cases</Link>
                </li>
                <li>
                  <Link to='/media'>Media</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link className='caption1' to='/about'>日本</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={this.state.onTop ? 'header-curve-long' : 'header-curve-short'}>
            <Curve />
          </div>
        </div>
        <Waypoint
          onEnter={() => this.onEnter()}
          onLeave={() => this.onLeave()} />
      </nav>
    )
  }
}

export default withRouter(Header)
