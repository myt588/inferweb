import React, { Component } from 'react'
import { Carousel, HomeAbout, HomeProduct, Curve } from '../../components/'

const itemsAbout = [
  <HomeAbout />,
  <HomeAbout />,
  <HomeAbout />
]

const itemsProduct = [
  <HomeProduct />,
  <HomeProduct />,
  <HomeProduct />
]

class Home extends Component {
  render () {
    return (
      <div>
        <Carousel items={itemsProduct} />
        <Curve />
        <Carousel items={itemsAbout} />
      </div>
    )
  }
}

export default Home
