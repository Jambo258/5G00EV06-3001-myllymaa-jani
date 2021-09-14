function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.call(object, 5, 5);

doIt.apply(object, [5], [5]);
doIt.apply(object, [5, 5]);
// apply tarvitsee argumentit arrayna
