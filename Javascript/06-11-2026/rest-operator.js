// rest operator example
// function logDiscussionComments(d1,d2,d3,d4,d5) {
//   console.log("Discussion comment 1: " + d1);
//   console.log("Discussion comment 2: " + d2);
//   console.log("Discussion comment 3: " + d3);
//   console.log("Discussion comment 4: " + d4);
//   console.log("Discussion comment 5: " + d5);
// }

// logDiscussionComments("Hello", "World", "This", "is", "a", "test");


function logDiscussionComments2 (...comments) {
 console.log("Discussion comments: " + comments.length);
 console.log("Discussion array " + comments);
 comments.forEach((decision, index) => {
    console.log("Discussion comment " + (index + 1) + ": " + decision);
  });
}

logDiscussionComments2("APPROVED", "REJECTED", "PENDING");


function processBatch(batchName, region, ...claimIds) {
  console.log("Batch: " + batchName);
  console.log("Region: " + region);
  console.log("Claims to process:");

  claimIds.forEach((claimId, index) => {
    console.log(" " + (index + 1) + ". " + claimId);
  });

  console.log("Total: " + claimIds.length + " claims");
}

processBatch("Batch 1", "Region 1", "1234567890", "1234567891", "1234567892");