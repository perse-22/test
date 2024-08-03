function sayHello() {
    document.getElementById("formResult").innerText = "Hello, World!";
}

function showSum(a, b) {
    document.getElementById("formResult").innerText = "The sum of " + a + " and " + b + " is " + (a + b);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("formResult").innerText = "Background color changed to light blue!";
}


