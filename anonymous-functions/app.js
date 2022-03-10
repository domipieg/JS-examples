const btn = document.getElementById("btn");


////-----------NORMAL FUNCTION---------------
// btn.addEventListener('click', onClick);


// function onClick() {
//     alert("You clicked the button");
// }

////-----------ANONYMOUS FUNCTION---------------
// btn.addEventListener('click', function() {
//     alert("You clicked the button");
// });


////-----------ANONYMOUS LAMBDA FUNCTION---------------
btn.addEventListener('click', () => {

    const myText = "this is my text";

    alert(myText.toUpperCase());
});

//// USE CASE
// if ("ABC".toUpperCase() === "abc".toUpperCase()) {
//     alert("equal")
// }


const add = (a, b) => {
    return a + b;
}

alert(add(5, 10));