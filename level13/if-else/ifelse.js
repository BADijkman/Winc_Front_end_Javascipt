const age = 26;
const isFemale = true;
const driverStatus = "bob";

if (age >= 25){
    console.log("Qua leeftijd mag deze persoon naar binnen.");
}else{
    console.log("Qua leeftijd mag deze persoon NIET naar binnen.");
}

if (isFemale){
    console.log("Deze persoon is een vrouw.");
    }
    else{
        console.log("Deze persoon is geen vrouw.");
}

if (driverStatus === "bob"){
    console.log("Deze persoon heeft de status van bob en mag rijden.");
    }
    else{
        console.log("Deze persoon heeft NIET de status van bob en mag NIET rijden.");
} 
    
if(age >= 25 &&  isFemale && driverStatus == "bob"){
    console.log("Deze persoon mag naar binnen.");
} else{
    console.log("Deze persoon mag NIET naar binnen.");
}




