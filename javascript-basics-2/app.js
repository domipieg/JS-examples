const add = (a, b) => {
  return a + b;
}

const add2 = (a, b) => a + b;

const add3 = function(a, b) {
  return a + b;
}

function add4(a, b) {
  return a + b;
}

//==========================================================================

const car = {
  brand: "Audi",
  old: true,
  hybrid: false,
  beautiful: true,
  dangerousForDriverAndPassengers: true,
  whatPassengersSay: function whatPassengersSay() {
    if (this.dangerousForDriverAndPassengers === true) {
      alert("AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaa");
    } else {
      alert("oh it is a nice ride");
    }
  }
}

// car.whatPassengersSay();
// car.dangerousForDriverAndPassengers = false;
// car.whatPassengersSay();

//==========================================================================

let someValue = undefined;

if (!someValue) {
  console.log("This will be printed");
}

someValue = null;

if (!someValue) {
  console.log("This will be printed");
}

someValue = "";

if (!someValue) {
  console.log("This will be printed");
}

someValue = 0;

if (!someValue) {
  console.log("This will be printed");
}

someValue = "ASDASFASDASD";

if (!someValue) {
  console.log("This will NOT be printed");
}

someValue = 1;

if (!someValue) {
  console.log("This will NOT be printed");
}


//==========================================================================


