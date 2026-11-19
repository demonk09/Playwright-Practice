/**
 * revision:
 * - instance variables
 * - constructor
 * - methods
 * - creating objects
 * - this keyword
 * - private instance variables
 * - abstraction
 * - private methods
 * - new keyword
 * - getter (returns the value of a instance variable) and setter (changes the value of an instance variable) methods
 */
class ClinicConfiguration {
  constructor() {
    this._slotDuration = 30;
    this._reminderCount = 2;
    this._defaultDepartment = "general medicine";
  }

  // Getter - computed property
  get slotDuration() {
    console.log(`  Getting slot duration: ${this._slotDuration}min`);
    return this._slotDuration;
  }

  // Setter - with validation
  set slotDuration(value) {
    if (value < 10) {
      console.log(`  ❌ Slot too short! Minimum is 10min`);
      this._slotDuration = 10;
    } else if (value > 120) {
      console.log(`  ❌ Slot too long! Maximum is 120min`);
      this._slotDuration = 120;
    } else {
      console.log(`  ✓ Setting slot duration to: ${value}min`);
      this._slotDuration = value;
    }
  }

  get reminderCount() {
    return this._reminderCount;
  }

  set reminderCount(value) {
    if (value < 0) {
      console.log(`  ❌ Reminder count cannot be negative!`);
      this._reminderCount = 0;
    } else if (value > 5) {
      console.log(`  ⚠️  Too many reminders! Setting to maximum: 5`);
      this._reminderCount = 5;
    } else {
      console.log(`  ✓ Setting reminder count to: ${value}`);
      this._reminderCount = value;
    }
  }

  // Getter with computation
  get slotDurationInHours() {
    return this._slotDuration / 60;
  }

  // Read-only property (getter without setter)
  get defaultDepartment() {
    return this._defaultDepartment.toUpperCase();
  }
}

let config = new ClinicConfiguration();
console.log(config._slotDuration);
console.log("*********************");
console.log(config.slotDuration);
config._slotDuration = 40;
console.log(config.slotDuration);
console.log("*********************");
config.slotDuration = 60;
console.log(config.slotDuration);
