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
  var obj = { name: data.name, movies: promises };

  return Promise.all([obj]);
};

fetchAllTitles(3).then((titles) => console.log(titles));
