var readlineSync = require("readline-sync");
var asciitable = require("asciitable");

let db = [];

function add(Student) {
  db.push(Student);
}

function remove() {
  var rname = readlineSync.questionInt("May i have id? ");
  const r_id = db.findIndex((key) => key.id === rname);
  if (r_id != -1) {
    db.splice(r_id, 1);
  }
}

function display() {
  var options = {
    skinny: true,
    intersectionCharacter: "o",
    columns: [
      { field: "id", name: "Student ID Number" },
      { field: "name", name: "Student Name" },
    ],
  };

  var table = asciitable(options, db);

  console.log(table);
  //console.log(db);
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
