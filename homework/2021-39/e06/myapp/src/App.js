//import logo from './logo.svg';
import "./App.css";
import Greeting from "./components/Greetings";
import Clock from "./Clock";

import React from "react";
import Randome08 from "./Randome08";
import Random from "./Random";

/* //ep06
function App() {
  //return <h1>Hello World</h1>;
  return (
    <div>
      <Greeting />
    </div>
  );
}
*/
//ep07
/*
function App() {
  //return <h1>Hello World</h1>;
  return (
    <div>
      <Random/>
      <Clock locale="fi" />
    </div>
  );
}
*/
//ep08
/*
function App() {
  //return <h1>Hello World</h1>;
  return (
    <div>
      <Randome08 min={1} max={10}/>
      <Clock locale="fi" />
    </div>
  );
}
*/
//e09-e11

class App extends React.Component {
  state = { toggle: true };

  clicked = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div>
        {this.state.toggle ? <Randome08 min={1} max={10} /> : null}
        <button onClick={this.clicked}>toggle</button>
        <p>{this.state.random}</p>
      </div>
    );
  }
}

export default App;
