const myString = "Hi I am Dominik and my phone number is 333222111";


console.log(myString.length);

const contains = myString.includes("Dominik");

console.log(contains);


const startingPoint = myString.indexOf("Dominik")

console.log(startingPoint);

const replaced = myString.replace("Dominik", "Keti");

console.log(replaced);

myString.toLowerCase();
myString.toUpperCase();

const doesItStartWithHello = myString.startsWith("Hello");
console.log(doesItStartWithHello);

const doesItStartWithHi = myString.startsWith("Hi");
console.log(doesItStartWithHi);

myString.endsWith("333222111");

const trimResult = "         My text           ".trim();
console.log(trimResult);


function consoleLogUserDetails(user) {
  for(prop in user) {
    console.log(user[prop]);
  }
}

const user = {
  username: "domipieg", 
  email: "domi.pieg@gmail.com", 
  age: "27", 
  gender: "Male",
  city: "Wrocław"
}


consoleLogUserDetails(user);