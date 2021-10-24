import React from "react";
/*
 // Tehtävä 5
function Person() {
  let [name, setName] = React.useState("");

  React.useEffect(() => {
    async function fetchCharacter() {
      let hr = await fetch("https://swapi.dev/api/people/1/");
      let data = await hr.json();
      console.log(data.name);
      setName(data.name);
    }
    fetchCharacter();
  }, []);

  return <p>{name}</p>;
}

export default Person;
*/
/*
 // Tehtävä 6
function Person(props) {
  let [name, setName] = React.useState("");

  React.useEffect(() => {
    async function fetchCharacter() {
      let hr = await fetch(`https://swapi.dev/api/people/${props.id}/`);
      let data = await hr.json();
      console.log(data.name);
      setName(data.name);
    }
    fetchCharacter();
  }, [props.id]);

  return <p>{name}</p>;
}

export default Person;
*/
