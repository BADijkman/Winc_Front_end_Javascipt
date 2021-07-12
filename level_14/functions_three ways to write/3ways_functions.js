//function declarations
function calculate( number1, number2){
    number1 = number1 * number1;
    number2 = number2 * number2;
    let number3 = number1 + number2;
    number3 =number3 * number3;
    return number3;
  }
  
  let way1 = calculate (2,4);
  console.log(way1);
  console.log("-------------");
  

  // function expressions
  let calculate2 = function(number1, number2){
    number1 = number1 * number1;
    number2 = number2 * number2;
    let number3 = number1 + number2;
    number3 =number3 * number3;
    return number3;
  };
  
  console.log(calculate2(2,4));
  console.log("-------------");
  
  
  // arrow functions
  let calculate3 = (number1, number2) =>{
    let number3 =((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
    return number3;
  }
  console.log(calculate3(2,4));
  console.log("-------------");
  
  // short
  let calculate4 = (number1, number2) =>{
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
  
  }
  console.log(calculate4(2,4));
  console.log("-------------");
  
  
  //shorter
  let calculate5 = (number1, number2) =>  ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
   
  
  console.log(calculate5(2,4));
  console.log("-------------");
  
