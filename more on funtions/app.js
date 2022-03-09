const person1 = {

} // empty object

const person2 = {
    name: "Keti",
    age: 24,
    hairLength: "long"
} 

// IN THIS WAY, IS NOT A SHAPE - EVERYONE CAN CHANGE THIS
const person3 = {
    name: "Dominik",
    age: 28,
    showAge: function showAge() {
        alert(this.name + " has age " + this.age);
    },
    someotheProp: "6"
}

//person3.showAge();


// HERE IS SHAPE (HEART SHAPE FOR COOKIES)
class Person {
    age;
    name;

    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    showAge = () => {
        alert(this.name + " has age " + this.age);
    }
}

const person4 = new Person(29, "Vaxo");
const person5 = new Person(21, "Michał");

// person4.showAge();
// person5.showAge();


// CLASS IS A CONTRACT BETWEEN A CLASS (COOKIE SHAPE) CREATOR AND PEOPLE WHO WILL BE USING CLASS
// SO THE CONTRACT IS: YOU CAN USE THIS CLASS (SHAPE) BUT YOU CANNOT CHANGE IT. YOU CAN PUT
// SOMETHING INSIDE BUT YOU CANNOT CHANGE THE SHAPE

console.log(person3);
console.dir(person4);
console.error(person5);


const myFunction = function myFunc(a, b) {
    console.log(a + b);
}

myFunction(1, 2)

console.dir(myFunction);

const myFunction = (a, b) => {
    console.log(a + b);
}