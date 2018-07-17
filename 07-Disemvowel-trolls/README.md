### Description of the problem domain

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls&apos; comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string `"This website is for losers LOL!"` would become `"Ths wbst s fr lsrs LL!"`.

Note: for this kata `y` isn't considered a vowel.

#### Sample Tests
- disemvowel("This website is for losers LOL!") ==> "Ths wbst s fr lsrs LL!"

### Link to the challenge

[Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript/me/best_practice"Disemvowel Trolls")

### Overview of the process for solving the challenge

1. [Ethan](https://github.com/RebelFlesh "Ethan") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. We decided to use the [replace function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) from the String class. 
1. We knew we had to include 2 parameters: (a) a regular expression and (b) an empty string.
1. In our regular expression we selected vowels using `[aeiou]`. We used `g` to look globally through the entire string. We used `i` so the search was not case sensitive.