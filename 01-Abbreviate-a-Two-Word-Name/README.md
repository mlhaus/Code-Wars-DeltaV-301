### Description of the problem domain

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

### Link to the challenge

[Abbreviate a Two Word Name](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript/me/best_practice "Abbreviate a Two Word Name")

### Overview of the process for solving the challenge

1. [Taylor](https://github.com/Madjas00 "Taylor") and I used the &quot;Sketching out the tasks in a flowchart&quot; from page 23 of our JavaScript and jQuery book to help plan our [whiteboard](whiteboard.jpg "whiteboard").
1. We first decided that after the function gets a name passed to it we should check if it contains 2 words separated by a space. After re-reading the kata we saw that it said &quot;This kata strictly takes two words with one space in between them&quot;, therefore we didn&apos;t have to write an if statement.
1. We then decided to [split the string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "split the string") into an array by it&apos;s space. 
1. Now we had an array with two strings. We used the [charAt method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt "charAt method") on each string to pull out only the first letter.
1. We concatenated those two characters with a period in between and returned it&apos;s value. Even though it passed the sample tests, there were some final tests that weren&apos;t capitalized correctly.
1. We then chained the [toUpperCase method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase "toUpperCase method") to the string charAt method.
1. To make the code more readable I created variables to represent the first name, last name, first initial and last initial. 