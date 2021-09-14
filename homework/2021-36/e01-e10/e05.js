function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

isPositiveInteger(
  -5,
  function () {
    console.log("Positiivinen");
  },
  function () {
    console.log("Negatiivinen");
  }
);
