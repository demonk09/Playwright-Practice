// Custom Error Class
// class CustomError extends Error {
//     constructor(message, code) {
//         super(message);
//         this.code = code;
//     }
// }

// throw new CustomError("This is a custom error", 404);

// console.log(error.message);
// console.log(error.code);



class customProcessingError extends Error   {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
} 

class PloicyNotFoundException extends customProcessingError {
    constructor(policyId,agentName){
        super(`Policy with ID ${policyId} not found`);
        this.policyId = policyId;
        this.agentName = agentName;
    }
}

function confirmClaimAction(actionType, PolicyId){
    if (actionType === "Policy Error"){
        throw new PloicyNotFoundException(PolicyId, "John Doe");
    }
}

try {
    confirmClaimAction("Policy Error", "POL-123321");
} catch (error) {
    // throw error;
    console.log(error.message);
    console.log(error.policyId);
    console.log(error.agentName);
    // console.log(error.stack);
}