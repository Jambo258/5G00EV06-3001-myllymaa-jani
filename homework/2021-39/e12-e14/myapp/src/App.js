import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Person from "./Person";
import People from "./People";


class App extends React.Component {
  render() {
    return (

      //e12-e13

      <div>
        <Person id={3} />
        <People />
      </div>


    );
  }
}

export default App;
