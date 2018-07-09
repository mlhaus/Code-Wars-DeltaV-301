function abbrevName(name){
  var result = name.split(' ');
  var firstName = result[0];
  var lastName = result[1];
  var firstInitial = firstName.charAt(0);
  var secondInitial = lastName.charAt(0);
  return firstInitial.toUpperCase() + '.' + secondInitial.toUpperCase();
}