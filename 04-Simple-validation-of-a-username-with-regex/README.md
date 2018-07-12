### Description of the problem domain

Write a simple regex to validate a username. Allowed characters are:

- lowercase letters,
- numbers,
- underscore

Length should be between 4 and 16 characters (both included).

#### Sample Tests
- validateUsr('asddsa') ==> true
- validateUsr('a') ==> false
- validateUsr('Hass') ==> false
- validateUsr('Hasd_12assssssasasasasasaasasasasas') ==> false
- validateUsr('') ==> false
- validateUsr('____') ==> true
- validateUsr('012') ==>  false
- validateUsr('p1pp1') ==> true
- validateUsr('asd43 34') ==> false
- validateUsr('asd43_34') ==> true

### Link to the challenge

[Simple validation of a username with regex](https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/solutions/javascript/me/best_practice "Simple validation of a username with regex")

### Overview of the process for solving the challenge

1. [Nathan](https://github.com/cashmann "Nathan") and I planned our [whiteboard](whiteboard.jpg "whiteboard").
1. From our [notes](https://github.com/DeltaVCode/cr-301-2018/blob/master/04-templating/demos/regex/regex.txt "notes") we decided we needed the following parts combined together in one block:
- ^[ ... ]$ ==> Does any part match
- [a-z] ==> includes a lowercase letter
- [0-9] ==> includes a number
- [_] ==> includes an underscore
- {4, 16} ==> Has between 4 and 16 characters, inclusive