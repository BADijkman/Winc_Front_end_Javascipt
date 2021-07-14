let ageCheck = function(number){
    // console.log("inside function ageTest");
    // console.log ("input is",number)
    if (number >= 18){
      let age= true;
      // console.log ("output is",age)
      return age;
    }
    let age= false;
    // console.log ("output is", age)
    return age;
  };
  
  
  let adultCheck = function(number){
    // console.log("inside function adultCheck");
    let check = ageCheck(number);
    // console.log("input is", check)
    if (check === true){
      let result = "Hello there";
      return result;
    }
    let result= "Hey kiddo";
    return result;
  }
  
  
  
  console.log (adultCheck(12));
  
  console.log (adultCheck(19));
  
  console.log (adultCheck(8));
  
  
  // deel 2
  
  
  
  // VAT exercise 1
  
  let calculateVat = function(number){
    let priceIncVat = number * 1.21;
    return priceIncVat;
  }
  
  let calculatePriceInclVat = function(numbers){
    let totalExVat = 0;
    for (i=0 ; i<numbers.length ; i++){
      totalExVat = totalExVat + numbers[i];
    }
    console.log(totalExVat, "ex btw");
    let totalPriceInclVat = calculateVat(totalExVat);
    return totalPriceInclVat;
  }
  
  calculatePriceInclVat([500, 500]);
  
  
  
  // VAT exercise 2
  
  let calculatePriceExBtw = function(numbers){
    // console.log ("je zit in exbtw funct");
    let priceEx =   Math.round(numbers[0] / ( numbers[1]/100 +1));
    let vat = Math.round(numbers[0] - numbers[0] / ( numbers[1]/100 +1));
    let array = [priceEx,vat];
    return array;
    
  }
  
  
  let price = function (numbers){
    if (numbers[1] === 0 || numbers[1] ===21 || numbers[1]===9){
     calculation = calculatePriceExBtw(numbers);
     return calculation;
    }else{
      return "wrong btw input";
    }
  }
  
  
  let input = price ([500,21]);
  console.log ("de uitkomst is" , input);
  