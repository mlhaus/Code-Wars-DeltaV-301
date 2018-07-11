### Description of the problem domain

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

#### Sample Tests
- insertDash(454793,'4547-9-3')
- insertDash(123456,'123456')
- insertDash(1003567,'1003-567')

### Link to the challenge

[Insert dashes](https://www.codewars.com/kata/55960bbb182094bc4800007b/solutions/javascript/me/best_practice "Insert dashes")

### Overview of the process for solving the challenge

1. [Ben](https://github.com/vanmeterx "Ben") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. We decided to find the last digit using `% 10`.
1. If the number was a single digit we wouldn't have to continue. We used `/ 10` to determine if there are any more digits to compare.
1. If there were more digits we determined if the last digit was odd using `% 2 === 1`.
1. If the last digit is odd we'd find the next digit using `% 10`.
1. We determined if the next digit is odd using `% 2 === 1`. 
1. If both digits were odd we would concatenate a dash followed by the last digit followed by the previous result.
1. In all other cases we would concatenate the last digit followed by the previous result.