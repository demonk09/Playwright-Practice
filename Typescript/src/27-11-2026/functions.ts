function ScheduleMeeting(
    patientName: string,
    doctorName: string,
    isUrgent: boolean,
) {
    return `Meeting scheduled for ${patientName} with ${doctorName} on ${isUrgent ? "urgent" : "regular"}`;
}

let appointment = ScheduleMeeting("John Doe", "Dr. Smith", true);
console.log(appointment);

function sum(a: number, b: number): number {
    return a + b;
}

let secondAppointment = ScheduleMeeting("Anya", "Wilson", true);
console.log(secondAppointment);
ScheduleMeeting("Mohan", "Patel", false);

console.log(sum(2, 3));

// If a function does not specify a return type, TypeScript infers it
// from the value the function returns.
function multiply(a: number, b: number) {
    return a * b;
}

let firstName = "ABC";
let mult = multiply(4, 6);

// firstName is a string, so it cannot be assigned the number returned by multiply.
console.log(firstName, mult);

const getPriorityLabel = (isUrgent: boolean): string =>
    isUrgent ? "URGENT" : "ROUTINE";
console.log(getPriorityLabel(true));

// Default parameter example
function bookFollowUp(patientName: string, daysAhead: number = 7): string {
    return `${patientName}'s follow-up in ${daysAhead} days`;
}

console.log(bookFollowUp("John"));
console.log(bookFollowUp("Jane", 14));


function admitPatient(name: string, ward: string, notes?: string):string {
    let isProgreess : boolean = false;
    if (notes) {
        return `Patient ${name} admitted to ${ward} with notes: ${notes}`;
    } else {
        return `Patient ${name} not admitted to ${ward} `;
    }
}
console.log(admitPatient("John", "Ward 101", "Patient has a fever"));
console.log(admitPatient("Jane", "Ward 102"));

function processEachVital(
    readings: number[],
    onReading: (value: number) => void,
  ): void {
    for (const reading of readings) {
      onReading(reading);
    }
  }
  processEachVital([120, 130, 140], (value) => {
    console.log(`Vital reading: ${value}`);

  });

  let mycall =(value: string) => console.log(`Vital reading: ${value}`);
// mycall is a function that takes a string and returns void
// so it can be used as the onReading parameter
// in the processEachVital function
// because the processEachVital function takes a function that takes a number and returns void
// and mycall is a function that takes a string and returns void
// so it can be used as the onReading parameter
// in the processEachVital function
// because the processEachVital function takes a function that takes a number and returns void
// and mycall is a function that takes a string and returns void
// so it can be used as the onReading parameter
// in the processEachVital function
// because the processEachVital function takes a function that takes a number and returns void
  //processEachVital([120, 130, 140], mycall);

  let mycall2 =(value: number) => value*2;
  processEachVital([120, 130, 140], mycall2);
  // mycall2 is a function that takes a number and returns a number
  // so it cannot be used as the onReading parameter
  // in the processEachVital function
  // because the processEachVital function takes a function that takes a number and returns void
  // and mycall2 is a function that takes a number and returns a number
  // so it cannot be used as the onReading parameter
  // in the processEachVital function
  // because the processEachVital function takes a function that takes a number and returns void
  

