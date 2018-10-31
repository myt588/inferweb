import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Curve } from '../index'
import footer from '../../images/footer.svg'
import logo from '../../images/logo.svg'
import grid from '../../images/footer-grid.svg'
import './styles.scss'

class Footer extends Component {
  render () {
    return (
      <footer>
        {/* <img style={{ width: '100%' }} src={footer} alt='Curve' /> */}
        <Curve reversed />
        <div className='row footer-wrapper'>
          <div className='col-md-2'>
            <img src={logo} alt='Logo' width='180' />
          </div>
          <div className='col-md-2'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='caption3'>Products</div>
              </div>
              <div className='col-md-8 footer-link-list'>
                <Link to='/products'>InferRead CT Lung</Link>
                <Link to='/products'>InferRead CT Stroke</Link>
                <Link to='/products'>InferRead CT Chest</Link>
                <Link to='/products'>InferRead CT Center</Link>
              </div>
            </div>
          </div>
          <div className='col-md-1'>
            <div className='caption3 pb-3'>Cases</div>
            <div className='caption3'>Media</div>
          </div>
          <div className='col-md-2'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='caption3'>About</div>
              </div>
              <div className='col-md-8 footer-link-list'>
                <Link to='/products'>Company</Link>
                <Link to='/products'>Team</Link>
                <Link to='/products'>Honors</Link>
                <Link to='/products'>Partners</Link>
              </div>
            </div>
          </div>
          <div className='col-md-2 d-flex justify-content-end'>
            <div>
              <div className='caption2'>N30, 3 Chome−7,Nishishinjuku,</div>
              <div className='caption2'>Shinjuku-ku, Tōkyō-to,</div>
              <div className='caption2'>Japan@infervision.com,</div>
              <div className='caption2'>03-5326-3419</div>
            </div>
          </div>
          <div className='col-md-3 pl-5'>
            <img className='footer-grid' src={grid} alt='Curve' />
            <img className='footer-grid' src={grid} alt='Curve' />
          </div>
        </div>
        <div className='copyright'>copyright@北京推想科技有限公司</div>
      </footer>
    )
  }
}

export default Footer
