import React, { Component } from 'react'
import './styles.scss'

class RadioInput extends Component {
  render () {
    const { text, id, checked } = this.props
    return (
      <label className='radio-container'>{text}
        <input id={id} type='radio' name='radio' checked={checked} onChange={this.props.onChange} />
        <span className='checkmark' />
      </label>
    )
  }
}

export default RadioInput
