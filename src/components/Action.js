import React, { Component } from "react";
import Options from "./Options";
import AddOption from "./AddOption";

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.handleWork = this.handleWork.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: ["one", "two", "three"],
    };
  }

  handleWork() {
    const random = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[random]
    alert(option)
  }

  handleDelete(){
    this.setState(()=>{
      return {
        options: []
      }
    })
  }

  addOption(option){
    

    if(!option){
      return 'Enter A valid Option.'
    }else if (this.state.options.indexOf(option)>-1){
      return 'This option already exist.'
    }
    this.setState((prevData)=>{
      return {
        options: prevData.options.concat([option])
      }
    })
    
    
  }
  render() {
    return (
      <>
        {/* <div className="d-flex justify-content-between"> */}
        <div className="card text-center">
          <div className="card-header card-title">
            <h4> {this.props.subtitle} </h4>
          </div>
          <div className="card-body">
            <div className="card-text">
              <button
                className="btn btn-primary"
                disabled={!this.state.options.length > 0}
                onClick={this.handleWork}
              >
                What should I do?
              </button>
              <Options handleDelete = {this.handleDelete} data={this.state.options}></Options>
            </div>
          </div>
          <div className="card-footer text-muted">
            <div className="btn btn-primary">
              <AddOption addOption = {this.addOption}></AddOption>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}
