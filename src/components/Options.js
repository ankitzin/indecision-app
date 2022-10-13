import React, { Component } from "react";
import Option from "./Option";

export default class Options extends Component {
  
  
  render() {
    return (
      <>
        <div>Options</div>
        <button onClick={this.props.handleDelete}>remove All Option</button>
        {this.props.data.map((ele) => {
          return <Option key={ele} value={ele}></Option>;
        })}
      </>
    );
  }
}
