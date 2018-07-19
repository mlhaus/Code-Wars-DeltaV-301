function solution(str){
  var result = "";
  for(var i=0 ; i<str.length ; i++) {
    result = str.charAt(i) + result;
  }
  return result;
}