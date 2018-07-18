### Description of the problem domain

Create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

```
gimme([2, 3, 1]) => 0
```

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

```
gimme([5, 10, 14]) => 1
```

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

### Link to the challenge

[Find the middle element](https://www.codewars.com/kata/545a4c5a61aa4c6916000755/solutions/javascript/me/best_practice 'Find the middle element')

### Overview of the process for solving the challenge

1.  [Taylor](https://github.com/Madjas00 'Taylor') and I created our [whiteboard](whiteboard.jpg 'whiteboard').
1.  We first needed to create a copy of the input array. We couldn't just write let `newArr = inputArray;` because that doesn't create a copy. Both of these variables reference the same variable.

- We decided to use the [slice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to create the copy.

2.  Then we used the [sort method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to put the copy in numerical order. From the linked page we learned that we needed a function expression to compare numbers instead of strings.
3.  Finally, we took the second value (i.e. index 1) of the sorted array and used the [indexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the location of that number in the original array.
