//deel1
let numberAbove100 = function(number){
    if (number <= 100){
      return false;
    }else {
      return true;
    }
  }
  
  let answer = numberAbove100(108);
  console.log(answer);
  
  
  
  // this is a functions that produce something
  console.log("----------------------------------");
  //deel2
  let passCheck = function(age, maxNumber, currentNumber){
    console.log("age = " + age);
    console.log("maxnumber = " + maxNumber);
    console.log("currentnumber = " + currentNumber);
    if (age <= 21 ){
      return "this is a club for adults.";
    } else{
      if (currentNumber >= maxNumber){
      return "it's too busy now, come back later.";
      }
    }
     return "come in."; 
  } 
  
  let passThrough = passCheck( 4, 200, 200);
  console.log("Brenda says: " +passThrough);
  console.log("----------------------------------");
  
  
  passThrough = passCheck( 22, 200, 200);
  console.log("Brenda says: " +passThrough);
  console.log("----------------------------------");
  
  
  passThrough = passCheck( 22, 300, 200);
  console.log("Brenda says: " +passThrough);
  
  
  
  // this is  a functions that do and produce something
  
  
  
  console.log("----------------------------------");
  
  
  // deel3
  let calculateAverage = function(numbers){
    let average = Math.round (numbers.reduce((total,n) => total + n)/numbers.length);
    return average;
  }
  
  let grades = calculateAverage ([6,6,6,10,26,]);
  console.log("first average is :" + grades);
  
  
  let calculateAverage2 = function(numbers){
    let sum = 0;
    for (i=0 ; i< numbers.length ; i++){
      sum = sum + numbers[i];
      average2 = Math.round(sum / numbers.length);
    }
   return(average2);
  }
  
  
  let grades2 = calculateAverage2([6,6,6,10,26,4,6,7,8,6,5,2,4,5]);
  console.log("second average is :" + grades2);
  
  
  
  // this is a functions that produce something