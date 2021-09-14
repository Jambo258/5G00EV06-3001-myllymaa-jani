function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

function onSuccess() {
  console.log("Positiivinen");
}

function onError() {
  console.log("Negatiivinen");
}

isPositiveInteger(5, onSuccess, onError);
isPositiveInteger(-5, onSuccess, onError);
