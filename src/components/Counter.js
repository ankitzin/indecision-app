import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetthis = this.resetthis.bind(this);

        this.state = {
            count:0
        }
    }

    addOne(){
        console.log("addone")
        this.setState((preVal)=>{
            return{
                count : preVal.count +1
            }
        })
    }
    minusOne(){
        console.log("minusone")
        this.setState((preVal)=>{
            return {
                count:preVal.count - 1
            }
        })
    }
    resetthis(){
        console.log("resetthis")
        this.setState(()=>{
            return {
                count:0
            }
        })
    }

  render() {
    return (
        <>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.resetthis}>Reset</button>
        </>
    )
  }
}
