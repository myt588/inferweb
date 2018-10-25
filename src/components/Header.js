import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <ul>
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
        </ul>
      </div>
    )
  }
}

export default Header
