let school = {
    name: "Citlali",
    "average class size": 3,
    mascot: "dragon",
};

let string = "${school.name} has an average class size of ${school[average class size]} an their mascot is ${school.mascot}";
document.getElementById("result").innerHTML = string;

//should assign the innerHTML of the HTML element with
// the id result to the  string "${name} has an 
// average class size of ${average class size} and 
// their mascot is a ${mascot}"