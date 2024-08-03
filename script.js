function sayHello() {
    document.getElementById("message").innerText = "Hello, World!";
}

function showSum(a, b) {
    document.getElementById("message").innerText = "The sum of " + a + " and " + b + " is " + (a + b);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("message").innerText = "Background color changed to light blue!";
}
