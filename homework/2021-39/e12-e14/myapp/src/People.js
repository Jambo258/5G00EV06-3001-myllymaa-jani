import React from "react";

class People extends React.Component {
  state = { character_names: [] };

  // e13
  /*
  async componentDidMount() {
    let hr = await fetch(`https://swapi.dev/api/people/`);
    let data = await hr.json();

    this.setState({ character_names: data.results });
  }
*/

  // e14

  async componentDidMount() {
    for (var i = 1; i < 10; i++) {
      let hr = await fetch(`https://swapi.dev/api/people/?page=${i}`);
      let data = await hr.json();

      this.setState({ character_names: data.results });

    }
  }

  render() {
    return (
      <ul>
        {this.state.character_names.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default People;
