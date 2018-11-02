import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Curve from '../Curve/'
import logo from '../../images/logo.svg'
import './styles.scss'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='nav-logo'>
            <Link to='/'><img src={logo} alt='Logo' width='180' /></Link>
          </div>
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
        <Curve />
      </nav>
    )
  }
}

export default Header
