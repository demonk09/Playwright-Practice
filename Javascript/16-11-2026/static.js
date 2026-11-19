class AppointmentScheduler {
  // Static property
  static totalScheduled = 0;
  static completedCount = 0;
  static cancelledCount = 0;

  constructor(name) {
    this.name = name;
    this.status = "SCHEDULED";
  }

  // non-static method
  run(completes) {
    console.log(`  Running: ${this.name}`);
    AppointmentScheduler.totalScheduled++; // Access static property

    this.status = completes ? "COMPLETED" : "CANCELLED";

    if (this.status === "COMPLETED") {
      AppointmentScheduler.completedCount++;
    } else {
      AppointmentScheduler.cancelledCount++;
    }

    console.log(`    Result: ${this.status}`);
  }

  // Static method - Utility function
  // Tricky: what happens if you call appt1.getCompletionRate() instead of
  // AppointmentScheduler.getCompletionRate()?
  // Answer: TypeError: appt1.getCompletionRate is not a function.
  // Static methods belong to the class, not to the objects made from it,
  // so appt1 doesn't have it. Same idea as the patient1.peek() TRY IT below.
  static getCompletionRate() {
    if (AppointmentScheduler.totalScheduled === 0) return 0;
    return (
      (AppointmentScheduler.completedCount /
        AppointmentScheduler.totalScheduled) *
      100
    ).toFixed(1);
  }

  // Static method - Report
  static printReport() {
    console.log(`\n  📊 Schedule Report:`);
    console.log(`    Total: ${AppointmentScheduler.totalScheduled}`);
    console.log(`    Completed: ${AppointmentScheduler.completedCount}`);
    console.log(`    Cancelled: ${AppointmentScheduler.cancelledCount}`);
    console.log(
      `    Completion Rate: ${AppointmentScheduler.getCompletionRate()}%`,
    );
  }

  // Static method - Factory method
  static createWalkIn(name) {
    console.log(`  Factory: Creating walk-in appointment "${name}"`);
    return new AppointmentScheduler(`[WALK-IN] ${name}`);
  }

  // Static method - Reset
  static reset() {
    AppointmentScheduler.totalScheduled = 0;
    AppointmentScheduler.completedCount = 0;
    AppointmentScheduler.cancelledCount = 0;
    console.log(`  Reset all schedule counters`);
  }
}

let app1 = new AppointmentScheduler("Dental Checkup");

console.log("Total Scheduled:" + AppointmentScheduler.totalScheduled);
console.log("Total Scheduled:" + app1.totalScheduled);
AppointmentScheduler.createWalkIn("General");
