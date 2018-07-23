### Description of the problem domain

Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined if any of the values aren't numbers.

#### Example

- cubeOdd([1, 2, 3, 4]) ==> 28
- cubeOdd([-3,-2,2,3]) ==> 0
- cubeOdd(["a",12,9,"z",42]) ==> undefined

### Link to the challenge

[Sum of Odd Cubed Numbers](https://www.codewars.com/kata/580dda86c40fa6c45f00028a/solutions/javascript/me/best_practice 'Sum of Odd Cubed Numbers')

### Overview of the process for solving the challenge

1.  [Ben](https://github.com/vanmeterx 'Ben') and I planned our [whiteboard](whiteboard.jpg 'whiteboard').
2.  First we filtered the array down to only numeric values. Then we compared the length of the returned array with the length of the original array. If they were different that means the original array contained non-numeric values and thus should return undefined.
3.  Next, we filtered the new array down to only odd values. We used Math.abs to include negative odd numbers.
4.  Finally, we reduced this array down to a sum of each number's cube.
