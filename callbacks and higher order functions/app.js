function asking() {
    console.log("Please give me icecream with taste of snickers");
}

function momGoesToTheShop(askTheSeller) {
    console.log("My daughter tells:");
    askTheSeller(); // callback
}

momGoesToTheShop(asking);


///---------------------------------------


function add(a, b) {
    const result = a + b;
    return () => {
        console.log("It is " + result);
    }
}

const printResult = add(100, 23);

console.log("Soon here will appear a result");

setTimeout(printResult, 5000);