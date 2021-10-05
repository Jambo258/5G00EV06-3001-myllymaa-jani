import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props); // this.props = props
  }

  render() {
    return <p>Clock {this.props.locale}</p>;
  }
}

export default Clock;
