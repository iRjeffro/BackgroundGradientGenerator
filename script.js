var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementsByClassName("btnStyle")[0];

function startingGradient () {
    colorGradient();
}

startingGradient();
console.log(btn);

function colorGradient() {
    var backgroundColor = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    body.style.background = backgroundColor;
    btn.style.background = backgroundColor;
    css.textContent = body.style.background;
}

function rgbRandomize(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        var options = '0123456789abcdefABCDEF';
        var createColor1 = '#';
        var createColor2 = '#';
        for (let i=0; i < 6; i++) {
            createColor1 += options[Math.floor(Math.random() * 22)]
            createColor2 += options[Math.floor(Math.random() * 22)]
        }
        color1.value = createColor1;
        color2.value = createColor2;
    }
    colorGradient();
}

color1.addEventListener("input", colorGradient);

color2.addEventListener("input", colorGradient);

body.addEventListener("click", rgbRandomize);