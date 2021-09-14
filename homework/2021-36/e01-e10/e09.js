var myFunc = new Function("", 'console.log("hello")');
myFunc.call();
//tulostaa hello koska se on sama asia kuin

function funkkari() {
  console.log("hello");
}
funkkari();
