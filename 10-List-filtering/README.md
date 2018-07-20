### Description of the problem domain

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

#### Example

- filter_list([1,2,'a','b']) ==> [1,2]
- filter_list([1,'a','b',0,15]) ==> [1,0,15]
- filter_list([1,2,'aasf','1','123',123]) ==> [1,2,123]

### Link to the challenge

[List Filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript/me/best_practice 'List Filtering')

### Overview of the process for solving the challenge

1.  [Nathan](https://github.com/cashmann 'Nathan') and I planned our [whiteboard](whiteboard.jpg 'whiteboard').
2.  Today we learned about the [array filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). For each value in the array we perform a boolean expression to determine whether or not a new array should contain the value. In this case we looked for values that are not of the string data type.
