### Description of the problem domain

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

#### Sample Tests
- capitalize("abcdef") ==> ['AbCdEf', 'aBcDeF']
- capitalize("codewars") ==> ['CoDeWaRs', 'cOdEwArS']
- capitalize("abracadabra") ==> ['AbRaCaDaBrA', 'aBrAcAdAbRa']
- capitalize("codewarriors") ==> ['CoDeWaRrIoRs', 'cOdEwArRiOrS']

### Link to the challenge

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions/javascript/me/best_practice "Alternate capitalization")

### Overview of the process for solving the challenge

1. [Dylan](https://github.com/DylanSchroeder "Dylan") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. We decided we needed the following logic:
- create 2 variables to store our results
- Write a loop that tests if the string has more characters to look at
- Determine if the current character is an even or odd numbered character
  - If it&apos;s an even numbered character concatenate a matching capital letter to the first result variable. If it&apos; an odd numbered character concatenate a matching lowercase letter to the second result variable.
- When no more characters remain, insert the 2 result variables into an array and return it.