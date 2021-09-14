function doIt() {
  function doIt2() {
    console.log("Hello World");
  }
  return doIt2;
}

let f = doIt();
f();
