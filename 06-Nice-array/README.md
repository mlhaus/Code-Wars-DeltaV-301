### Description of the problem domain

A &quot;Nice array&quot; is defined to be an array where for every value `n` in the array, there is also an element `n-1` or `n+1` in the array.

example:

```
[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
```

Write a function named `isNice` that returns `true` if its array argument is a Nice array, else `false`. You should also return `false` if input array has no elements.

#### Sample Tests
- isNice([2,10,9,3]) ==> true
- isNice([3,4,5,7]) ==> true

### Link to the challenge

[Nice Array](https://www.codewars.com/kata/59b844528bcb7735560000a0/solutions/javascript/me/best_practice "Nice Array")

### Overview of the process for solving the challenge

1. [John](https://github.com/JohnMV13 "John") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. We decided to use a nested for loop to run through our array.
1. We compared the value of the inner loop with the value of the outer loop. 
  - If they were within 1 of each other we broke out of the inner loop to continue the outer loop.
  - If no values were within 1 we would return false
  - If all loops completed then we would return true because all values found a match.
