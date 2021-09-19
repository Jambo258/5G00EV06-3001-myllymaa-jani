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

  function max(numbers) {
    console.log("Max = " + Math.max.apply(Math, numbers));
  }

  function min(numbers) {
    console.log("Min = " + Math.min.apply(Math, numbers));
  }

  max(numbers);
  min(numbers);
}

export default cmdline;
