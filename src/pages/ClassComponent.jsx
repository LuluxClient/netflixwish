import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  render() {
    return (
      <div>
        <p>Compteur: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Augmenter
        </button>
      </div>
    );
  }
}
export default ClassComponent;