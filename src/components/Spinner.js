import React, { Component } from 'react'
import PropTypes from 'prop-types'
import spinner from '../Spinner.gif'

export default class Spinner extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading"/>
      </div>
    )
  }
}
