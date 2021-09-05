var readlineSync = require("readline-sync");
var asciitable = require("asciitable");

let db = [];

function add(Student) {
  db.push(Student);
}

function remove() {
  var rname = readlineSync.questionInt("May i have id? ");
  db.splice(rname, 1);
}

function display() {
  var options = {
    skinny: true,
    intersectionCharacter: "o",
    columns: [
      { field: 0, name: "Student ID Number" },
      { field: "b", name: "Student Name" },
    ],
  };

  var data = [];

  let i = db.length - 1;

  var table1 = asciitable(options, data);

  if (i < 0) {
    console.log(table1);
  } else {
    for (let i = 0; i < db.length; i++) {
      data.push({ 0: db[i].id, b: db[i].name });
      //console.log(db[i]);
    }

    var table = asciitable(options, data);

    console.log(table);
  }
}

var ID = 0;
while (choice != 0) {
  console.log(`[1] Add
[2] Remove
[3] Display
[0] Cancel `);

  var choice = readlineSync.questionInt("Choice? [1,2,3,0]: ");

  if (choice == 1) {
    var sname = readlineSync.question("May i have student name? ");

    const student = { id: ID, name: sname };
    ID++;
    add(student);
  } else if (choice == 3) {
    display();
  } else if (choice == 2) {
    remove();
  }
}
