const age = 19;
const isFemale = true;
const driverStatus = "bob";

if (age >= 25){
    console.log("Qua leeftijd mag deze persoon naar binnen.")
}else{
    console.log("Qua leeftijd mag deze persoon NIET naar binnen.")
}

if (isFemale){
    console.log("Deze persoon is een vrouw.")
    }
    else{
        console.log("Deze persoon is geen vrouw.")
}

if (driverStatus == "bob"){
    console.log("Deze persoon heeft de status van bob en mag rijden.")
    }
    else{
        console.log("Deze persoon heeft NIET de status van bob en mag NIET rijden.")
} 
    
if(age >= 25 &&  isFemale && driverStatus == "bob"){
    console.log("Deze persoon mag naar binnen.");
} else{
    console.log("Deze persoon mag NIET naar binnen.");
}


//  Deel 1("Je krijgt 50% korting!") 
if (age  >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}else{
    console.log("Je krijgt geen korting!");
}


// Deel 2 
// Je kroeg bestaat 50 jaar! Daarom krijgt iedereen die "Sarah" of "Abraham" heet een gratis biertje! Oke niemand heet tegenwoordig meer Abraham, dus laten we er "Bram" van maken.
const firstName = "Sarah";

if (firstName === "Sarah" || firstName === "Bram"){
   console.log("Jij krijgt het eerste biertje gratis");
}else{
    console.log("Jij krijgt het eerste NIET biertje gratis");
}


// Deel 3
// Bestel je voor meer dan 25 euro aan drankjes? Dan krijg je gratis (vega)bitterballen.  Bestel je voor meer dan 50 euro aan drankjes? Dan krijg je gratis portie nachos.
// Bestel voor 100 euro of meer? Dan krijg je een gratis flesje champagne. 
const totalAmout = 50;

if (totalAmout > 25 && totalAmout <=50){
    console.log( "Jij krijgt gratis (vega) bitterballen");
}else
if(totalAmout > 50 && totalAmout <=100){
    console.log( "Jij krijgt gratis portie nachos");
}else
if(totalAmout > 100){
    console.log( "Jij krijgt gratis gratis flesje champagne.");
}

