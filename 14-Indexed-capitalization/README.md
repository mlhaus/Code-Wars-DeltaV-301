### Description of the problem domain

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

#### Example

- capitalize("abcdef",[1,2,5]) => "aBCdeF"
- capitalize("abcdef",[1,2,5,100]) => "aBCdeF" --There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

### Link to the challenge

[Indexed capitalization](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/solutions/javascript/me/best_practice 'Indexed capitalization')

### Overview of the process for solving the challenge

1.  [Ben](https://github.com/vanmeterx 'Ben') and I planned our [whiteboard](whiteboard.jpg 'whiteboard').
2. We decided to use a forEach loop to go through each value in arr
3. Then we checked if the current value in the arr was smaller than the length of the string. For example if the number is 100 and the length of the string is 6 we would want to skip that number.
4. If the number validated as true we mutated the original string into 3 parts: (1) The characters from position 0 to the current index, (2) The character at the current index capitalized, and (3) The characters from the current index + 1 to the end.