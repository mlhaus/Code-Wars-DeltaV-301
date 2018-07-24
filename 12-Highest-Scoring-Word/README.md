### Description of the problem domain

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

#### Example

- high('man i need a taxi up to ubud') => 'taxi'
- high('what time are we climbing up the volcano') => 'volcano'
- high('take me to semynak') => 'semynak'

### Link to the challenge

[Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript/me/best_practice 'Highest Scoring Word')

### Overview of the process for solving the challenge

1.  [Ben](https://github.com/vanmeterx 'Ben') and I planned our [whiteboard](whiteboard.jpg 'whiteboard').
2.  First we needed to create 3 variables to store the current score, highest score and highest scoring word
3.  Then we created an array from the string input split on spaces.
4.  Then we ran a forEach loop on the array, resetting the current word score so each word's score counts from 0.
5.  Then we created a traditional for loop that converts each letter to it&apos;s ascii equivalent and subtracted 96 to get a number between 1 and 26. That number gets added to the current word score.
6.  Once all letters have been scored we compare the current word score with the highest score. If the current word is the highest scoring word we replace it with the highest score and highest scoring word.
7.  When all words have been scored we return the word with the highest score.
