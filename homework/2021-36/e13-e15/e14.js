function doIt(a) {
  function doIt2() {
    if (a == true) {
      console.log("world");
    } else {
      console.log("hello");
    }
  }
  return doIt2;
}

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
