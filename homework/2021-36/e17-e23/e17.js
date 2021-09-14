function doIt() {
  globalThis.x = 5;
  console.log(this);
  console.log(this == global);
}

doIt();
console.log(globalThis.x);
//ensimmäinen console.log tulostaa pääolion metodit/funktiot
//toinen console.log vertaa this ja global ja node js this == global joten true
