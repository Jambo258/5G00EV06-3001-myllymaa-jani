function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

isPositiveInteger(
  5,
  () => console.log("Positiivinen"),
  () => console.log("Negatiivinen")
);
