function capitalize(s,arr){
  arr.forEach(index => {
    if(index < s.length) {
      s = s.substring(0, index) + s.charAt(index).toUpperCase() + s.substring(index + 1);
    }
  });
  return s;
};