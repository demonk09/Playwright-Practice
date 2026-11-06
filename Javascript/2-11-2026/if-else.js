let leavestatus="approved";
if(leavestatus=="approved"){
    console.log("Leave approved");
}else if(leavestatus=="pending"){
    console.log("Leave pending");
}

let employeeid = "";

if (employeeid === "12345") {
    console.log("Employee ID is valid");
} else if (employeeid === "67890") {
    console.log("Employee ID is valid");
} else {
    console.log("Employee ID is invalid");
}

let email = "employee@gmail.com";
if (email.includes("@")) {  
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}   


let status = "RIJECTED";
switch (status)
{
    case "active":
        console.log("Status is active");
        break;
    case "RIJECTED":
        console.log("Status is rejected");
        break;  
    case "pending": 
        console.log("Status is pending");   
        break;
    default:
        console.log("Status is unknown");
}

let experience = 5;

switch(true) {
    case (experience < 2):
    console.log("Junior level");
    break;
    case (experience >= 2 && experience < 5):
    console.log("Mid level");
    break;  
    case (experience >= 5):
    console.log("Senior level");
    break;
    default:
    console.log("Experience level unknown");
}