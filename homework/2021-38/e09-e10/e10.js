import fetch from "node-fetch";

const fetchAllTitles = async (value) => {
  var b = new URL("https://swapi.dev/api/people/1/");
  var c = b.pathname.replace("1", value);

  var d = "https://swapi.dev";
  var e = d.concat(c);

  let hr = await fetch(e);
  let data = await hr.json();

  var promises = [];
  let datas = data.films;
  for (const key in datas) {
    let hr2 = await fetch(datas[key]);
    let data2 = await hr2.json();
    promises.push(data2.title);
  }

  return Promise.all([{ name: data.name, movies: promises }]);
};

const characters = async (characters) => {
  var promises = [];
  for (const key in characters) {
    let hr = await fetchAllTitles(characters[key]);
    promises.push(hr[0]);
  }
  return Promise.all(promises);
};

characters(cmdline()).then((titles) => console.log(titles));
function cmdline() {
  const argv = process.argv;
  const numbers = argv.slice(2, argv.length);

  for (var val in numbers) {
    if (Number.isInteger(Number(numbers[val]))) {
      //console.log(numbers[val]);
    } else {
      throw "Virhe";
    }
  }

  return numbers;
}
