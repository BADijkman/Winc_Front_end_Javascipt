let naam = prompt("Welkom! Wat is je naam?");
console.log("Hey "+naam);
alert("Hey "+naam);

let input = prompt("Voer een getal in van 0 tot 25 om te beginnen met raden....")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let teRadenGetal = (getRandomInt(26));
while (input != teRadenGetal){
  alert ("Dat is NIET correct probeer opnieuw");
  input = prompt("Voer opnieuw een getal in ...");
  if (input > 25){
    alert( "onder de 25");
    input = prompt("Voer opnieuw een getal in ...");
  }
}

alert ("Dat is correct");
console.log ('Gefeliciteerd je hebt gewonnen". Het spel is nu klaar.');
console.log('dag ' + naam + ' tot de volgende keer');

