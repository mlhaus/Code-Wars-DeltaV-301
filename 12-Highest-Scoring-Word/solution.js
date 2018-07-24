function high(x) {
  let highestWord = '',
    highestScore = 0,
    wordScore = 0;
  let wordArray = x.split(' ');
  wordArray.forEach(function (word) {
    wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      wordScore += word.charCodeAt(i) - 96;
    }
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestWord = word;
    }
  });
  return highestWord;
}