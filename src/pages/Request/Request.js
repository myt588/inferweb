import React, { Component } from 'react'
import { RadioInput } from '../../components/'
import './styles.scss'

class Request extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: 0
    }
  }

  onTextChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const id = target.id

    this.setState({
      [id]: value
    })
  }

  render () {
    return (
      <div className='row request-wrapper'>
        <div className='col-md-6 offset-md-3'>
          <form>
            <div className='d-flex align-items-center request-input-container'>
              <label htmlFor='name' className='col-sm-2 request-label'>* Name</label>
              <input type='text' className='col-sm-10 request-input' id='name' placeholder='Your Name' onChange={(e) => this.onTextChange(e)} />
            </div>
            <div className='d-flex align-items-center request-input-container'>
              <div className='col-sm-6 d-flex align-items-center'>
                <label htmlFor='name' className='request-label'>*</label>
                <div className='px-2'>
                  <RadioInput
                    text={'Organization'}
                    checked={this.state.checked === 0}
                    onChange={() => this.setState({ checked: 0 })} />
                </div>
                <div className='pl-4'>
                  <RadioInput
                    text={'Individual'}
                    checked={this.state.checked === 1}
                    onChange={() => this.setState({ checked: 1 })} />
                </div>
              </div>
              <input
                type='text'
                className='col-sm-6 request-input'
                placeholder={'Your' + (this.state.checked ? ' ' : ' Organization ') + 'Name'}
                id='organizationName'
                onChange={(e) => this.onTextChange(e)} />
            </div>
            <div className='d-flex align-items-center request-input-container'>
              <label htmlFor='jobTitle' className='col-sm-2 request-label'>Job Title</label>
              <input
                type='text' className='col-sm-10 request-input'
                id='jobTitle'
                placeholder='Your Job Title'
                onChange={(e) => this.onTextChange(e)} />
            </div>
            <div className='d-flex align-items-center request-input-container'>
              <label htmlFor='email' className='col-sm-2 request-label'>* Email</label>
              <input
                type='text'
                className='col-sm-10 request-input'
                id='email'
                placeholder='Your Email Address'
                onChange={(e) => this.onTextChange(e)} />
            </div>
            <div className='d-flex align-items-start request-input-container'>
              <label htmlFor='content' className='col-sm-2 request-label'>* Content</label>
              <textarea
                className='col-sm-10 request-area'
                id='content'
                placeholder='Write Down Your Content'
                rows='6'
                onChange={(e) => this.onTextChange(e)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Request
