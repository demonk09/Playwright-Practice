// ==========================================
// SET & MAP COLLECTIONS
// Topics: Set (unique values), Map (key-value pairs),
// iteration, union, intersection, bulk operations
// ==========================================

// ==========================================
// EXERCISE 1: TRACK UNIQUE CLAIM REGIONS
// ==========================================

let claimRegions = new Set();
claimRegions.add("north");
claimRegions.add("south");
claimRegions.add("north");
claimRegions.add("east");
claimRegions.add("south");
claimRegions.add("west");

console.log("Size (with duplicates ignored):", claimRegions.size);
console.log("Has 'north':", claimRegions.has("north"));
console.log("Has 'central':", claimRegions.has("central"));

let deletedWest = claimRegions.delete("west");
console.log("delete('west') returned:", deletedWest);

let deletedCentral = claimRegions.delete("central");
console.log("delete('central') returned:", deletedCentral);

console.log("Final claimRegions:", claimRegions);
console.log("Final size:", claimRegions.size);

// ==========================================
// EXERCISE 2: MERGE CLAIM BATCHES
// ==========================================

let autoClaims = new Set(["collision", "theft", "windshield", "fire"]);
let propertyClaims = new Set(["fire", "flood", "theft", "storm"]);

let fullBatch = new Set([...autoClaims, ...propertyClaims]);
console.log("\nFull batch (union):", fullBatch);
console.log("Total unique claim types:", fullBatch.size);

let sharedTypes = new Set([...autoClaims].filter((type) => propertyClaims.has(type)));
console.log("\nShared types (intersection):", sharedTypes);
console.log("Types in both batches:", sharedTypes.size);

let tempAutoClaims = new Set(autoClaims);
console.log("\nBefore clear:", tempAutoClaims);
tempAutoClaims.clear();
console.log("After clear: ", tempAutoClaims);

// ==========================================
// EXERCISE 3: CLAIMS STATUS MAP
// ==========================================

let claimStatus = new Map([
    ["CLM-2001", "UNDER_REVIEW"],
    ["CLM-2002", "REJECTED"],
    ["CLM-2003", "APPROVED"]
]);

claimStatus.set("CLM-2004", "APPROVED");

console.log("\nCLM-2002 status:", claimStatus.get("CLM-2002"));

claimStatus.set("CLM-2002", "UNDER_REVIEW");
console.log("After reopening:", claimStatus.get("CLM-2002"));

console.log("Has 'CLM-2005':", claimStatus.has("CLM-2005"));

let deleted2004 = claimStatus.delete("CLM-2004");
console.log("delete('CLM-2004') returned:", deleted2004);

let deleted9999 = claimStatus.delete("CLM-9999");
console.log("delete('CLM-9999') returned:", deleted9999);

console.log("Final size:", claimStatus.size);

for (let [claimId, status] of claimStatus) {
    console.log(claimId + " → " + status);
}

// ==========================================
// EXERCISE 4: BUILD A POLICY CONFIG MAP THREE WAYS
// ==========================================

let claimCodes = new Map([
    [1, "Filed"],
    [2, "Under Review"],
    [3, "Approved"],
    [4, "Rejected"]
]);

console.log("\n3 means:", claimCodes.get(3));

let renewalConfig = new Map()
    .set("region", "north")
    .set("gracePeriodDays", 30)
    .set("autoRenew", true)
    .set("reminderCount", 2);

console.log("\nRenewal config settings:", renewalConfig.size);

let policyDefaults = { premiumCycle: "monthly", coverageType: "comprehensive", autoRenew: true };
let policyDefaultsMap = new Map(Object.entries(policyDefaults));

console.log("\nPolicy defaults Map:", policyDefaultsMap);

// ==========================================
// CHALLENGE: CLAIM PROCESSING TRACKER
// ==========================================

function recordClaimUpdate(map, claimId, status, daysOpen) {
    if (!map.has(claimId)) {
        map.set(claimId, { status: status, daysOpen: daysOpen, reviews: 1 });
    } else {
        let entry = map.get(claimId);
        entry.status = status;
        entry.daysOpen = daysOpen;
        entry.reviews = entry.reviews + 1;
    }
}

let claimLog = new Map();

recordClaimUpdate(claimLog, "CLM-3001", "UNDER_REVIEW", 2);
recordClaimUpdate(claimLog, "CLM-3002", "REJECTED", 5);
recordClaimUpdate(claimLog, "CLM-3003", "APPROVED", 1);
recordClaimUpdate(claimLog, "CLM-3002", "UNDER_REVIEW", 7);
recordClaimUpdate(claimLog, "CLM-3002", "APPROVED", 9);

console.log("");
let approvedCount = 0;
let rejectedCount = 0;

for (let [claimId, entry] of claimLog) {
    console.log(
        claimId + " | " + entry.status + " | " + entry.daysOpen +
        " days | reviews: " + entry.reviews
    );
    if (entry.status === "APPROVED") {
        approvedCount = approvedCount + 1;
    }
    if (entry.status === "REJECTED") {
        rejectedCount = rejectedCount + 1;
    }
}

console.log("\nTotal claims:", claimLog.size);
console.log("Approved:", approvedCount);
console.log("Rejected:", rejectedCount);

// ==========================================
// TRICKY QUESTIONS
// ==========================================
// 1. Set uses SameValueZero, which treats NaN as equal to NaN.
//    So new Set([NaN, NaN, NaN]).size is 1 even though NaN === NaN is false.
// 2. map.set("region", "north") on an existing key updates the value in place.
//    The key stays where it was first inserted. It does not move to the end.
