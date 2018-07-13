function capitalize(s){
  let version1 = '', version2 = '';
  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 0) {
      version1 += s.charAt(i).toUpperCase();
      version2 += s.charAt(i);
    }
    else {
      version1 += s.charAt(i);
      version2 += s.charAt(i).toUpperCase();
    }
  }
  return [version1, version2];
};