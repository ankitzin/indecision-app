import React, { Component } from "react";
import Options from './Options';
import AddOption from './AddOption';



export default class Action extends Component {
  render() {
    return (
      <>
        {/* <div className="d-flex justify-content-between"> */}
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
              <Options></Options>
              </p>
              
            </div>
            <div className="card-footer text-muted">
              <a href="/" className="btn btn-primary">
                <AddOption></AddOption>
              </a>
            </div>
          </div>
        {/* </div> */}
      </>
    );
  }
}
