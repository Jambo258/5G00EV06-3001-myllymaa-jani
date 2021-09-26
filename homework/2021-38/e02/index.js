function sendStuffToBackend(result) {
  const random = Math.floor(Math.random() * 2);
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      if (random == 1) {
        console.log(`sending to backend ${result}`);
        resolve("done");
      } else {
        reject("failed to connect backend.");
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    if (b == 0) {
      reject("Cannot divide with zero.");
    } else {
      setTimeout(() => {
        console.log("calculating stuff");
        const division = a / b;

        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 5)
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
