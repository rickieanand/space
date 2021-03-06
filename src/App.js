import React, { Component } from "react";
import "./App.css";
import svgson from "svgson-next";

//const svgson2 = require('svgson')

class App extends Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.getJson = this.getJson.bind(this);
    this.drawChairs = this.drawChairs.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      svgData: `<?xml version="1.0" encoding="UTF-8" ?>
	<svg xmlns="http://www.w3.org/2000/svg" width="580" height="400">
			<g id="group0">
				<rect id="svg_1" height="30" width="32" y="58.4375" x="73.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_3" height="30" width="32" y="95.4375" x="73.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_4" height="30" width="32" y="58.4375" x="110.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_5" height="30" width="32" y="95.4375" x="110.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_6" height="30" width="32" y="58.4375" x="148.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_7" height="30" width="32" y="95.4375" x="148.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_8" height="30" width="32" y="58.4375" x="185.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_9" height="30" width="32" y="95.4375" x="185.5" stroke-width="1.5" stroke="#000" fill="#fff" />
			</g>
			<g id="group1">
				<rect id="svg_18" height="30" width="32" y="58.4375" x="330.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_19" height="30" width="32" y="95.4375" x="330.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_20" height="30" width="32" y="58.4375" x="367.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_21" height="30" width="32" y="95.4375" x="367.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_22" height="30" width="32" y="58.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_23" height="30" width="32" y="95.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_24" height="30" width="32" y="58.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_25" height="30" width="32" y="95.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#ff0" />
			</g>
			<g id="group2">
				<rect id="svg_26" height="30" width="32" y="164.4375" x="330.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_27" height="30" width="32" y="201.4375" x="330.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_28" height="30" width="32" y="164.4375" x="367.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_29" height="30" width="32" y="201.4375" x="367.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_30" height="30" width="32" y="164.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_31" height="30" width="32" y="201.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_32" height="30" width="32" y="164.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_33" height="30" width="32" y="201.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#fff" />
			</g>
			<g id="group3">
				<rect id="svg_10" height="30" width="32" y="164.4375" x="73.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_11" height="30" width="32" y="201.4375" x="73.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_12" height="30" width="32" y="164.4375" x="110.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_13" height="30" width="32" y="201.4375" x="110.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_14" height="30" width="32" y="164.4375" x="148.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_15" height="30" width="32" y="201.4375" x="148.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_16" height="30" width="32" y="164.4375" x="185.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_17" height="30" width="32" y="201.4375" x="185.5" stroke-width="1.5" stroke="#000" fill="#fff" />
			</g>
			<g id="group4">
				<rect id="svg_40" height="30" width="32" y="262.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_41" height="30" width="32" y="299.4375" x="405.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_42" height="30" width="32" y="262.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_43" height="30" width="32" y="299.4375" x="442.5" stroke-width="1.5" stroke="#000" fill="#fff" />
			</g>
			<g id="group5">
				<rect id="svg_36" height="30" width="32" y="265.4375" x="237.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_37" height="30" width="32" y="302.4375" x="237.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_38" height="30" width="32" y="265.4375" x="274.5" stroke-width="1.5" stroke="#000" fill="#fff" />
				<rect id="svg_39" height="30" width="32" y="302.4375" x="274.5" stroke-width="1.5" stroke="#000" fill="#fff" />
			</g>
	</svg>
    `
    };
  }

  inputHandler(e) {
    this.setState({ svgData: e.currentTarget.value, jsonData: {} });
  }
  getJson() {
    const that = this;
    svgson.parse(`${this.state.svgData}`).then(function(json) {
      that.setState({
        jsonData: json
      });
    });
  }

  onClickHandler(e) {
    const chair = e.currentTarget.id;
    document.getElementById(chair).style.fill = "#dd8";
  }
  drawChairs() {
    const bays =
      (this.state.jsonData &&
        this.state.jsonData.children &&
        this.state.jsonData.children) ||
      null;
    return (
      bays &&
      bays.map((bay, key) => (
        <g name={`group${key}`} key={key}>
          {bay.children.map((chair, key) => (
            <rect
              key={key}
              id={chair.attributes.id}
              fill={chair.attributes.fill}
              stroke={chair.attributes.stroke}
              width={chair.attributes.width}
              height={chair.attributes.height}
              x={chair.attributes.x}
              y={chair.attributes.y}
              onClick={this.onClickHandler}
            />
          ))}
        </g>
      ))
    );
  }
  render() {
    const drawChairs = this.drawChairs();
    return (
      <div className="App">
        <header className="App-header">
          <textarea
            name="svgText"
            onChange={this.inputHandler}
            defaultValue={this.state.svgData}
          />
          <button onClick={this.getJson}>Get Json</button>
        </header>
        <svg width="500" height="400">
          {drawChairs}
        </svg>
      </div>
    );
  }
}

export default App;
