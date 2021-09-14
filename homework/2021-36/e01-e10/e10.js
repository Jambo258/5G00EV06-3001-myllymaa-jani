function doIt() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
