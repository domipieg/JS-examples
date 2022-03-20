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


const EURPLN = 2.0;
const PLNEUR = 3.0;
const EURUSD = 2.0;
const USDEUR = 4.0;
const GELEUR = 5.0;
const EURGEL = 6.0;
const PLNUSD = 2.0;
const USDPLN = 7.0;
const GELPLN = 9.0;
const PLNGEL = 8.0;
const PLNPLN = 1.0;
const GELGEL = 1.0;
const USDUSD = 1.0;
const EUREUR = 1.0;


const onValueChange = (event) => {
  if (fromInput.value === "EUR" && toInput.value === "PLN") {
    resultEl.innerHtml = event.target.value * EURPLN;
  }
  if (fromInput.value === "PLN" && toInput.value === "EUR") {
    resultEl.innerHtml = event.target.value * PLNEUR;
  }
  if (fromInput.value === "EUR" && toInput.value === "USD") {
    resultEl.innerHtml = event.target.value * EURUSD;
  }
  //....
}

const onFromInputChange = (event) => {
  if (fromInput.value === "EUR" && toInput.value === "PLN") {
    resultEl.innerHtml = amountInput.value * EURPLN;
  }
  if (fromInput.value === "PLN" && toInput.value === "EUR") {
    resultEl.innerHtml = amountInput.valuevalue * PLNEUR;
  }
  if (fromInput.value === "EUR" && toInput.value === "USD") {
    resultEl.innerHtml = evvalue * EURUSD;
  }
  //....
}

const onValueChange = (event) => {
  if (fromInput.value === "EUR" && toInput.value === "PLN") {
    resultEl.innerHtml = event.target.value * EURPLN;
  }
  if (fromInput.value === "PLN" && toInput.value === "EUR") {
    resultEl.innerHtml = event.target.value * PLNEUR;
  }
  if (fromInput.value === "EUR" && toInput.value === "USD") {
    resultEl.innerHtml = event.target.value * EURUSD;
  }
  //....
}