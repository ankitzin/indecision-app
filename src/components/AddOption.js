import React, { Component } from 'react'

export default class AddOption extends Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error:undefined
    }
  }

  handleAddOption = (event)=>{
    event.preventDefault();
    const opt = event.target.elements.option.value.trim();
    const error = this.props.addOption(opt)
    this.setState(()=>{
      return {
        error
      }
    })
    document.forms.valueOf()[0][0].value = ""
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form action="submit" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button >Add Option</button>
        </form>
      </div>
    )
  }
}
