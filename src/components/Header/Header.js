import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class Header extends Component {
  render () {
    return (
      <div>
        <nav>
          <li>
            <Link to='/'>Home</Link>
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
        </nav>
      </div>
    )
  }
}

export default Header
