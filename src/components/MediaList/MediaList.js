import React, { Component } from 'react'
import ReactModal from 'react-modal'
import mediaImage from '../../images/media-image.svg'
import close from '../../images/close.svg'
import './styles.scss'

const MediaItem = ({ date, source, title, imageUrl, openModal }) => (
  <div className='row'>
    <div className='col-md-2 media-item-date'> April 25. 2018 | Forbes </div>
    <div className='col-md-4 media-item-title' onClick={() => openModal()}>
      <div>The Amazing Ways Infervision Uses AI To Detect Strokes </div>
      <img className='media-item-img' src={mediaImage} alt='media' width='400' />
    </div>
  </div>
)

const MediaModal = ({ closeModal, showModal }) => (
  <ReactModal
    className='media-modal-wrapper'
    contentLabel='media-modal'
    overlayClassName='case-modal-overlay'
    isOpen={showModal}>
    <div className='row'>
      <img className='close-modal' src={close} alt='close' width='50' onClick={() => closeModal()} />
      <div className='offset-md-2 col-md-8'>
        <div className='media-modal-title'>The Amazing Ways Infervision Uses AI To Detect Strokes</div>
        <img className='media-modal-img' src={mediaImage} alt='media' />
        <div className='media-modal-body'>
          <p>
              Infervision is working on ground-breaking work to diagnose and treat strokes with the help of machine learning algorithms. The AI medical image specialists has already completed successful pilots of its Head CT Augmented Screening platform. It is hoped that the technology will soon go into widespread use and save lives, by allowing doctors to more quickly and accurately diagnose strokes and assess the damage they have caused.It is the second medical technology based around machine learning which Infervision have reported success with – I previously wrote about their platform which detects early signs of lung cancer in X-ray and CT scans.
          </p>
          <p>
              Over 100,000 annotated medical image scans were used to train the algorithms, which given more live data will become increasingly efficient at diagnosing the two main types of stroke, hemorrhagic and ischemic.
          </p>
          <p>
              Infervision founder and CEO Chen Kuan told me “X-ray is a very old type of medical check-up – in China, for example, no one had mentioned chest X-ray in academic conferences for more than 15 years. Until very recently with the arrival of AI. AI has helped radiologists discover problems they previously weren’t able to see. So we are very proud to see radiologists starting to discuss some very interesting and fantastic cases involving AI.”
          </p>
          <p>
              It’s certainly a fantastic example of the ways new technology can unlock value from data which has been around for a long time.
          </p>
          <p>
              One of the major problems it solves is how to measure the volume of blood lost in hemorrhagic (bleeding) strokes. When every second is critical following a stroke, doctors generally use a simple mathematical formula to “guesstimate” as best as possible how much blood is lost.
          </p>
        </div>
      </div>
    </div>
  </ReactModal>
)

class MediaList extends Component {
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
      <div className='media-wrapper'>
        <MediaItem openModal={() => this.openModal()} />
        <MediaModal showModal={this.state.showModal} closeModal={() => this.closeModal()} />
        <MediaItem openModal={() => this.openModal()} />
        <MediaModal showModal={this.state.showModal} closeModal={() => this.closeModal()} />
        <MediaItem openModal={() => this.openModal()} />
        <MediaModal showModal={this.state.showModal} closeModal={() => this.closeModal()} />
      </div>
    )
  }
}

export default MediaList
