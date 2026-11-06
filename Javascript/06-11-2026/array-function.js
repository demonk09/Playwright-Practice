let clamApproverScore = [75, 80, 85, 90, 95];

// find(): returns the first element that matches the condition, or undefined if none match.
// Use it when you need one matching value, not a list of all matches.
let firstLoweScore = clamApproverScore.find((score) => score < 80);
console.log(firstLoweScore);

// every(): returns true only if ALL elements pass the condition; otherwise false.
// Use it to validate that a whole array meets a rule (e.g. every score is above 70).
let allScores = clamApproverScore.every((score) => score > 70);
console.log(allScores);

// some(): returns true if AT LEAST ONE element passes the condition; otherwise false.
// Use it to check whether any item qualifies (e.g. any score is above 90).
let someScores = clamApproverScore.some((score) => score > 90);
console.log(someScores);

// reduce(): walks the array and builds a single result using an accumulator.
// Start value is 0; each score is added to the accumulator, so the result is the total.
let totalScore = clamApproverScore.reduce(
  (accumulator, score) => accumulator + score,
  0,
);
console.log(totalScore);
