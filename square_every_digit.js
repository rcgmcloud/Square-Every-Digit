function squareDigits(num){
  //may the code be with you
  var arr = num.toString().split("");
  for (var i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
  }
  return parseInt(arr.join(""));
}