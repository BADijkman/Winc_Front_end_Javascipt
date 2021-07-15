
//oudes stijl

let colorList = [ "yellow" , "blue" ,"red", "orange"];

let counter = 0;
while (counter < colorList.length){
  console.log(colorList[counter]);
  counter++;
}
console.log("----------------")

for (i=0 ; i< colorList.length ;i++){
  console.log (colorList[i]);
}
console.log("----------------")




// nieuwe stijl

// Array methods
// Array.prototype.forEach()

colorList.forEach (element => console.log(element));
console.log("----------------")
// while loop 4 lines
// for loop 2 lines
// for Each methode 1 line

// voordelen makkelijke leesbaar, minder kans op schrijffouten

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// for ...in.  gebruiken

var obj = {
  name: "Simon",
  age: 20,
  haircolor: "brown",
  eyecolor: "blue",
  shoemate: 41
}

for(let item in obj){
  console.log(item + ': ' + obj[item]);

}