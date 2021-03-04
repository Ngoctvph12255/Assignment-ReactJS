import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Seven",
    };
    console.log("LifecycleB Contructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDrivedStateFromProps ");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB  componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevSState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
