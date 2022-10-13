import React, { Component } from 'react'

export default class Option extends Component {
  render() {
    return (
        <p className="card-text">{this.props.value}</p>
    )
  }
}
