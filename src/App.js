
import './App.css';
import Action from './components/Action';
import Header from './components/Header';
import Counter from './components/Counter';
import React, { Component } from 'react'

export default class App extends Component {
  title="Indecision App"
  subtitle = "Daily Routine"
  render() {
    return (
      <>
      <Header title={this.title}></Header>
      <div className="container">
          <Action subtitle={this.subtitle}>
          </Action>
          
      </div>
      <Counter></Counter>
    </>
    )
  }
}
