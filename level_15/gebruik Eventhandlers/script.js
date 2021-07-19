// const button = document.getElementById("mybutton");
const button = document.querySelector("#mybutton");
const backgroundButton = document.querySelector("#backgroundButton");
const body = document.querySelector("body");

const message = () => {
    alert("button clicked");
};

const toggleColor = () =>{
    body.classList.toggle ("red-background");  
};

button.addEventListener("click", message);
backgroundButton.addEventListener("click", toggleColor);