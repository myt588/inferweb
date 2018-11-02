import React, { Component } from 'react'
import { Carousel, HomeAbout, HomeProduct, Curve } from '../../components'

const itemsAbout = [
  {
    component: <HomeAbout />,
    key: 'HomeAbout1'
  },
  {
    component: <HomeAbout />,
    key: 'HomeAbout2'
  },
  {
    component: <HomeAbout />,
    key: 'HomeAbout3'
  }
]

const itemsProduct = [
  {
    component: <HomeProduct />,
    key: 'HomeProduct1'
  },
  {
    component: <HomeProduct />,
    key: 'HomeProduct2'
  },
  {
    component: <HomeProduct />,
    key: 'HomeProduct3'
  }
]

class About extends Component {
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

export default About
