import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";
import React from "react";
/*
 // Tehtävä 5
function App() {
  return (
    <div>
      <Person />
    </div>
  );
}

export default App;
*/
/*
 // Tehtävä 6
function App() {
  let[number,setNumber] = React.useState("");

  return (
    <div>
      <Person id={number} />
      <input
        type="number"
        name="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
*/
// Tehtävä 7

function Input(props) {
  let [name, setName] = React.useState("");
  function clicked() {
    props.clicked(name);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={clicked}>Click</button>
    </div>
  );
}
function Output(props) {
  return <p>{props.name}</p>;
}
function App() {
  let [name, setName] = React.useState("");

  function doIt(props) {
    setName(props);
  }

  return (
    <div>
      <Input clicked={doIt} />
      <Output name={name} />
    </div>
  );
}

export default App;

