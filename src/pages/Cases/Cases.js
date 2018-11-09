import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Carousel } from '../../components'
import marker from '../../images/map-marker.svg'
import caseIcon from '../../images/case-icon.svg'
import close from '../../images/close.svg'
import cvic from '../../images/cvic.svg'
import './styles.scss'

const Case = () => (
  <div className='case-modal-body row'>
    <div className='col-md-4 offset-md-1'>
      <img className='case-modal-image' src={cvic} alt='CVIC' width='560' />
    </div>
    <div className='case-modal-bio col-md-6 d-flex justify-content-between'>
      <div className='case-modal-bio-title'>
        <div>Organization</div>
        <div>Date</div>
        <div>Product</div>
        <div>Feedback</div>
      </div>
      <div className='case-modal-bio-content'>
        <div>CVIC Medical Corporation</div>
        <div>Mar. 9th, 2017</div>
        <div>InferRead CT Lung</div>
        <div>We are looking forward to its performance in our country.</div>
      </div>
    </div>
  </div>
)

const cases = [
  {
    component: <Case />,
    key: 'Case1'
  },
  {
    component: <Case />,
    key: 'Case2'
  },
  {
    component: <Case />,
    key: 'Case3'
  }
]

class Cases extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  openModal () {
    this.setState({ showModal: true })
  }

  closeModal () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className='case-wrapper'>
        <img className='map-marker' src={marker} alt='Marker' width='40' onClick={() => this.openModal()} />
        <ReactModal
          className='case-modal'
          contentLabel='marker-modal'
          overlayClassName='case-modal-overlay'
          isOpen={this.state.showModal}>
          <div>
            <div className='case-banner d-flex justify-content-center'>
              <img className='close-modal' src={close} alt='close' width='50' onClick={() => this.closeModal()} />
              <div className='case-product d-flex align-items-center justify-content-around'>
                <div>
                  <div className='case-banner-title'>
                    InferRead
                  </div>
                  <div className='case-banner-subtitle'>
                    CT Lung
                  </div>
                </div>
                <div>
                  <img className='case-icon' src={caseIcon} alt='Marker' width='200' />
                </div>
              </div>
            </div>
            <Carousel items={cases} />
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default Cases
