// let paintColor = function(){
//   console.log("the wall has been painted red")
// }
// paintColor();

let paintColor = function(color){
    console.log("the wall has been painted " + color +".")
  }
  
  paintColor("blue");
  paintColor("yellow");
  paintColor();
  // the wall has been painted undefined.
  
  let paintWall = function( color, position){
  console.log("The " +position  +"wall has been painted " +color+ ".")
  }
  
  paintWall("south-east", "grey");
  // does the order of the arguments matter when calling the function?
  paintWall( "grey","south-east");
  // YES