import React from "react";

class Person extends React.Component {
  state = { name: "" };

  async componentDidMount() {
    let hr = await fetch(`https://swapi.dev/api/people/${this.props.id}/`);
    let data = await hr.json();
    this.setState({ name: data.name });
  }

  render() {
    return <p>{this.state.name}</p>;
    
  }
}

export default Person;
