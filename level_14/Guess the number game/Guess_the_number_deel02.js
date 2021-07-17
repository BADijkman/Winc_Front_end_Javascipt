
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let naam = prompt("Welkom! Wat is je naam?");
alert("Hey " + naam);
let minimum = prompt('voer het laagste getal in');
let maximum = prompt('voer het hoogste getal in');
let teRadenGetal = getRandomIntInclusive(minimum, maximum);

alert ('je hebt 5 pogingen')
let input = prompt("Voer een getal in van " + minimum + " tot " + maximum + " om te beginnen met raden....")
let counter = 1;
for (i=4; i>=0; i--){
  if (input == teRadenGetal ){
    alert("Gefeliciteerd");
    console.log('Gefeliciteerd je hebt gewonnen",  Het spel is nu klaar.');
    console.log ('Je hebt het getal in ' + counter + ' pogingen geraden');
    console.log('Kom nog eens terug ' + naam + ' tot de volgende keer');
    break;
  }else{
    counter++;
    if (i > 0){
      alert("Dat is NIET correct probeer opnieuw, je hebt nog " + i + " pogingen over" );
      input = prompt("Voer opnieuw een getal in ...");
    }else{
      alert('Helaas je hebt vijf pogingen gehad, het te raden getal was: ' + teRadenGetal);
      console.log('Kom nog eens terug');
      console.log('Dag ' + naam + ' tot de volgende keer');
    }
  }
}