/**
 * what is class
 * properties variables and methods
 *
 * What is an object in object oritented programming
 * - object is real world entity
 *   - Car, Laptop,
 *
 * - What is non-object oriented programming
 *
 *
 * vairables, methods, functions, object, array, loops, if else, switch case,
 * 12 functions, 9 for loops, 2 while loops, 5 if statements, 1 switch case, 3 objects, 1 array.
 * dashboard -
 *
 * multiple files - login.js, dashboard.js, employee.js
 *
 * HRMS - Employee, HR Team, Managers, Policy, Compliance, Appraisals,
 *  Everything about Employee in a single area, object/class
 * Class, and objects
 *
 */

//What is a class
// -  blueprint, design of how that object behaves and what it is made up of.
// Employee - EmpID, Name, Address, DoB,
//    Emp behaviour - changeAddress(newAddress), getEmpProjectDetails()

class EmployeeManager {}

class Visit {
  //this.name, this.priority, this.status, this.notes are instance variables of Visit class
  constructor(name, priority = "MEDIUM") {
    this.name = name; //this refers the object
    this.priority = priority;
    this.status = "SCHEDULED";
    this.notes = [];
  }

  checkIn() {
    console.log(`  Checking in: ${this.name} (${this.priority} priority)`);
    this.status = "IN_PROGRESS";
  }
}

let myVisit = new Visit("Cardiology", "HIGH"); // function call - special function - constructor
let mySecondVisit = new Visit("General");
myVisit.checkIn();
mySecondVisit.checkIn();
