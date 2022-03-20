const names = ["Dominik", "Keti", "Michał"];


names.length - 1 // 2

console.log("Michał");
console.log(names[names.length - 1]);

const anotherNames = ["Bill", "Tom", "Donald"];

const concated = names.concat(anotherNames); // we join two arrays together

console.log(concated);

console.log(concated.reverse());



names.push("Janusz"); // adds element to the ent of an array
names.unshift("Andrzej");   // adds element to the front of an array
console.log(names);


names.pop(); // removes last element from array
names.shift(); // removes first element from array
console.log(names);


//+++++++++++++++++++++++++++++Truthy and Falsy values++++++++++++++++++++++++++++

// Falsy - only these values are falsy
const value = null;
const value2 = 0;
const value3 = undefined;
const value4 = "";
const value5 = NaN;
const value6 = false;

// Every other value is truthy, so for example
const value7 = 2;
const value8 = 200;
const value9 = -10;
const value10 = "Text";
const value11 = {};
const value12 = {name: "Keti"};

// if (value5) {
//     alert("truthy");
// } else {
//     alert("flsy");
// }

const person = {
    name: "Kate",
    surname: "Ivanidze",
    age: null
}

fetch("facebook.com/123123").then(response => response.json()).then(data => {

    if (!person.data.age) {
        person.data.age = "no data"
    }

});

// Age: no data

////////////////////Ternary/////////////////////

const val = 1 > 0;

val ? console.log("Yes") : console.log("No");

if (val) {
    console.log("Yes");
} else {
    console.log("No");
}

/////////////////////Global////////////////////////


const a = 10; // global scope

function add(x, y) {
    const w = 20; // local scope
    return x + y + w + a;
}


