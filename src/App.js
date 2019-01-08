import React, { Component } from 'react';
import './App.css';
const svgson = require('svgson-next')

//const svgson2 = require('svgson')

class App extends Component {
  constructor() {
		super()
    this.inputHandler= this.inputHandler.bind(this)
    this.getJson= this.getJson.bind(this)
    this.svg=''
  }

  inputHandler(e) {
    console.log('-->', e.currentTarget.value)
    this.setState({svg: e.currentTarget.value, json: {}})
  }
  getJson() {
    // ----------------------------
    // Convert SVG to JSON AST
    // ----------------------------
    svgson
    .parse(
      `${this.state.svg}`
    )
    .then(function(json) {
      console.log(JSON.stringify(json, null, 2))
  // -------------------------------
  // Convert JSON AST back to SVG
  // -------------------------------
//  mysvg = svgson.stringify(json)
  /* returns the SVG as string */
})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea name='svgText' onChange={this.inputHandler}/>
          <button onClick={this.getJson}>Get Json</button>
        </header>
      </div>
    );
  }
}

export default App;
