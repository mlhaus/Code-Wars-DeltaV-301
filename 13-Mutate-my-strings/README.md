### Description of the problem domain

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

#### Example

```
stringOne = 'bubble gum';
stringTwo = 'turtle ham';
```

Result:

```
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
```

### Link to the challenge

[Mutate My Strings](https://www.codewars.com/kata/59bc0059bf10a498a6000025/solutions/javascript/me/best_practice 'Mutate My Strings')

### Overview of the process for solving the challenge

1.  [Ben](https://github.com/vanmeterx 'Ben') and I planned our [whiteboard](whiteboard.jpg 'whiteboard').
2.  First, we created an empty string called result and immediately concatenated the original stringOne to it.
3.  Looping through each character of stringOne we compare the current characters with each other.

- If the characters are not the same we create a temporary string that includes all characters before that point, that current characteer, and all characters after that point.
- That temporary string is concatenated to the result string and replaces the old stringOne.

4.  We tried using a regular expression with a replace function but were unsuccessful.
