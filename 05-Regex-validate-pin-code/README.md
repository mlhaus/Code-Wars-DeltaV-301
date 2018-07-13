### Description of the problem domain

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

#### Sample Tests
- validatePIN("1234") === true
- validatePIN("12345") === false
- validatePIN("a234") === false

### Link to the challenge

[Regex validate PIN code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/javascript/me/best_practice "Regex validate PIN code")

### Overview of the process for solving the challenge

1. [Dylan](https://github.com/DylanSchroeder "Dylan") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. We decided we needed the following parts regex parts:
- [0-9] ==> includes a number
- {4} or {6} ==> limits to 4 or 6 digits
- We used a [Regex Tester](https://regexr.com/, "Regex Tester") to build our solution
- We learned that \d references digits rather than [0-9]
- We learned about non-capturing groups using (?: xxx)?