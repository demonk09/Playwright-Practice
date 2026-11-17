class Visit {
  name = "General";
  #priority = "MEDIUM";
  #fees = 0; //# makes the instance variable private to the class
  //this.name, this.priority, this.status, this.notes are instance variables of Visit class
  constructor(name, priority = "MEDIUM") {
    let count = 5;
    this.name = name; //this refers the object
    this.priority = priority;
    this.status = "SCHEDULED";
    this.notes = [];
  }

  //setter
  changeName(name) {
    this.name = name;
    this.changePriority();
  }

  //getter method
  getName() {
    return this.name;
  }

  changePriority() {
    if (this.name === "Cardiology") {
      this.#priority = "HIGH";
    } else {
      this.#priority = "LOW";
    }
  }
  calculateFees() {
    this.#fees = 250;
  }
  checkIn() {
    console.log(`  Checking in: ${this.name} (${this.priority} priority)`);
    this.status = "IN_PROGRESS";
  }

  cancel(reason) {
    this.notes.push(reason);
    this.status = "CANCELLED";
    console.log(`  ✗ ${this.name} CANCELLED: ${reason}`);
  }
  complete() {
    this.status = "COMPLETED";
    this.calculateFees();
    console.log(`  ✓ ${this.name} COMPLETED`);
  }

  getSummary() {
    return {
      name: this.name,
      priority: this.priority,
      status: this.status,
      noteCount: this.notes.length,
    };
  }
}

let myVisit = new Visit("Cardiology", "HIGH"); // function call - special function - constructor
let mySecondVisit = new Visit("General");
let myThirdVisit = new Visit();

myVisit.checkIn();
//myVisit.#fees = 400000; //Cannot use private fields/private instance variables outside the class
mySecondVisit.checkIn();
myVisit.cancel("Patient got some emmergency and cannot visit the clinic");
console.log("***************");
console.log(myThirdVisit.getSummary());
myVisit.name = "Genenral"; //setting the value
myVisit.changeName("Genenral");
console.log(myVisit.name); //getting
console.log(myVisit.getName());
console.log("###");
console.log(myVisit.name);
//What all thing class can contain
//instance variables, methods, constructor
//to refer instance variables inside the class we use this keyword
//this keyword refers to the object with which method is called.
//Instance variables should be private and their values can be changed via public methods which implements business logic

//To change the value of instance variables the standard term we use for that method is setter method
// to read the value of private instance variables the standard term we use for that method is getter method.
