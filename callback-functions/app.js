// const btn = document.getElementById("btn");

// ////-----------ANONYMOUS LAMBDA FUNCTION---------------
btn.addEventListener('click', () => {
    alert("I am a callback function");
});


const htmlElement = {
    addEventListener: function addEventListener(event, callbackFn) {
        if (event === "click") {
            callbackFn();
        }
    }
}

htmlElement.addEventListener("click", () => {
    alert("I am a callback function");
});



function print(...params) {
    for(let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}

print(100, 200, 300, 1, 2, 4);