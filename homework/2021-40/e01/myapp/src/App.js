import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";


 //tehtävä 1
function App() {
  let [result, setResult] = React.useState(Math.random());
  function Calculate() {
    //let result = 7;

    // ES6 style function, you can also use traditional approach
    const click = () => {
      setResult(Math.random());
    };

    return (
      <div>
        <button onClick={click}>Calculate</button>
        <p>Result = {result}</p>
      </div>
    );
  }
  return (
    <div>
      <Calculate />
    </div>
  );
}

export default App;


//Tehtävä 2

/*
function App() {

const [number, setNumber] = React.useState({ number1: 0, number2: 0 });
const [sum, setSum] = React.useState(0);

const summa = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  const newValues = {
    ...number,
    [name]: value,
  };
  setNumber(newValues);


  calc_sum(newValues);
};



const calc_sum = (newValues) => {
  const { number1,number2 } = newValues;
  setSum(Number(number1) + Number(number2));
};


  return (
    <div>
      <input type="number" name="number1" onChange={summa} />
      <input type="number" name="number2" onChange={summa} />

      <p>Sum = {sum}</p>
    </div>


  );
}

export default App;
*/
/*
 // Tehtävä 3
function App() {
  const [number, setNumber] = React.useState({ num1: "", num2: "" });
  const [result, setResult] = React.useState("");
  const [radio, setRadio] = React.useState("");

  const sum = function (e) {
    setNumber({
      ...number,
      [e.target.name]: e.target.value,
    });
  };

  const calc1 = function () {
    const { num1, num2 } = number;
    setResult(Number(num1) + Number(num2));
  };
  const calc2 = function () {
    const { num1, num2 } = number;
    setResult(Number(num1) - Number(num2));
  };
  const calc3 = function () {
    const { num1, num2 } = number;
    setResult(Number(num1) * Number(num2));
  };

  const choice = function () {
    if (radio === "plus") {
      calc1();
    } else if (radio === "minus") {
      calc2();
    } else if (radio === "kerto") {
      calc3();
    }
  };
  return (
    <div>
      <input
        type="radio"
        checked={radio === "plus"}
        value="plus"
        onChange={(e) => {
          setRadio(e.target.value);
        }}
        name="radio"
      />{" "}
      +
      <input
        type="radio"
        checked={radio === "minus"}
        value="minus"
        onChange={(e) => {
          setRadio(e.target.value);
        }}
        name="radio"
      />{" "}
      -
      <input
        type="radio"
        checked={radio === "kerto"}
        value="kerto"
        onChange={(e) => {
          setRadio(e.target.value);
        }}
        name="radio"
      />{" "}
      *
      <input type="number" name="num1" onChange={sum} />
      <input type="number" name="num2" onChange={sum} />
      <button onClick={choice}>Calculate</button>
      <p>Result = {result}</p>
    </div>
  );
}

export default App;
*/
//Tehtävä 4
/*
function App() {
  let [customers, setCustomers] = useState([
    { id: 0, name: "james" },
    { id: 1, name: "paul" },
  ]);
  let [name, setName] = useState();

  let [lastId, setLastId] = useState(2);

  const clicked = () => {

    setCustomers([...customers, { id: lastId, name: name }]);
    setLastId(lastId + 1);
  };

  const deleteById = (id) => {
    const arr = [...customers];
    setCustomers(arr.filter((item) => item.id !== id));
  };

  return (
    <>
      <ul aria-label="Id Name Action">
        {customers.map((item, i) => (
          <li key={i}>
            {item.id} {item.name}{" "}
            {<button onClick={() => deleteById(item.id)}>Delete</button>}
          </li>
        ))}
      </ul>
      <span>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={clicked}>Add</button>
      </span>
    </>
  );
}

export default App;
*/
