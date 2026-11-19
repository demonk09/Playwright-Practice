// let placeholder = null;
// console.log(placeholder.toUpperCase()); // TypeError: Cannot read properties of null (reading 'toUpperCase')

// try {
//     console.log(placeholder.toUpperCase());
// } catch (error) {
//     console.log(error);
// }
// let x = 10;
// let y = 0;
// try {
//     console.log(x / y);
// } catch (error) {
//     console.log(error);
// }
// // console.log(placeholder.toUpperCase()); // TypeError: Cannot read properties of null (reading 'toUpperCase')


function validateClaimData(data) {
    if (!data) {
        throw new Error("Claim data cannot be null or undefined");
    }

    if (!data.policyholderName) {
        throw new Error("Policyholder name is required");
    }

    if (!["APPROVED", "REJECTED", "UNDER_REVIEW"].includes(data.status)) {
        throw new Error("Status must be APPROVED, REJECTED or UNDER_REVIEW");
    }

    return true;
}

// validateClaimData();

let claimData = {
    policyholderName: "John Doe",
    status: "APPROVED"
};
validateClaimData(claimData);
console.log(validateClaimData(claimData));
