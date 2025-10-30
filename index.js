let school = {
    name: "Bingooooo",
    "average class size": 4,
    mascot: "Caleb",
};

let string = `${school.name} has an average class size of ${school["average class size"]} and their mascot is a ${school.mascot}`;
document.getElementById('result').innerHTML = string;

//should assign the innerHTML of the HTML element with
// the id result to the  string "${name} has an 
// average class size of ${average class size} and 
// their mascot is a ${mascot}"