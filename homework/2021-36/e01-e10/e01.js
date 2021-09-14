const tina = { name: "Tina", age: 25 };

for (const key in tina) {
  if (tina.hasOwnProperty.call(tina, key)) {
    const element = tina[key];
    console.log(element);
  }
}
