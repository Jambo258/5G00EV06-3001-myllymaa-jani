import readlineSync from "readline-sync";
import fetch from "node-fetch";

const fetchTitle = async (value) => {
  var b = new URL("https://swapi.dev/api/people/1/");
  var c = b.pathname.replace("1", value);

  var d = "https://swapi.dev";
  var e = d.concat(c);

  let hr = await fetch(e);
  let data = await hr.json();
  console.log(data.name);
  let hr2 = await fetch(data.films[0]);
  let data2 = await hr2.json();

  //console.log(data2.title);
  return data2.title;
};

var character_id = readlineSync.questionInt("Give id:");

fetchTitle(character_id).then((title) => console.log("first movie: " + title));
