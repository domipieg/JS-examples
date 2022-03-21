const accountNumbers = ["GE12345", "PL54321", "PL76543", "GE87654"];

// for(let i = 0; i < accountNumbers.length; i++) {
//     const each = accountNumbers[i];
//     console.log(each);
// }


accountNumbers.forEach(each => {
    console.log(each);
});


// const accountsAndCountries = [];
// for(let i = 0; i < accountNumbers.length; i++) {
//     const each = accountNumbers[i];
//     if (each.startsWith("PL")) {
//         accountsAndCountries.push({country: "Poland", accountNumber: each});
//     } 
//     if (each.startsWith("GE")) {
//         accountsAndCountries.push({country: "Georgia", accountNumber: each});
//     }
// }

const accountsAndCountries = accountNumbers.map(each => {
    if (each.startsWith("PL")) {
        return {country: "Poland", accountNumber: each};
    } 
    if (each.startsWith("GE")) {
        return {country: "Georgia", accountNumber: each};
    }
})

accountsAndCountries.forEach(each => {
    console.log(each);
});


const numbers = [1, 20, -3, -4, 200, -100, 1000];

const biggerThanZero = numbers.filter(each => {
    if (each > 0) {
        return true;
    } else {
        return false;
    }
})

// const biggerThanZero = numbers.filter(each => each > 0);

console.log(biggerThanZero);


const elBiggerThanZero = numbers.find(each => {
    if (each > 100) {
        return true;
    } else {
        return false;
    }
})


console.log(elBiggerThanZero);

//------------------------------------------------------

