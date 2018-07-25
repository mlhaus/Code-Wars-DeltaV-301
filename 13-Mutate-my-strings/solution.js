function mutateMyStrings(stringOne, stringTwo){
  let result = '';
  result += stringOne + '\n';
  for(let i = 0; i < stringOne.length; i++) {
    let ch1 = stringOne.charAt(i);
    let ch2 = stringTwo.charAt(i);
    let temp = '';
    if(ch1 !== ch2) {
      temp += stringOne.substring(0, i);
      temp += ch2;
      temp += stringOne.substring(i + 1);
      result += temp + '\n';
      stringOne = temp;
    }
  }
  return result;
}

mutateMyStrings('bubble gum', 'turtle ham');
// Expecting : 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n');