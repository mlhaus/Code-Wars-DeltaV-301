### Description of the problem domain

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

#### Example Tests

fixTheMeerkat(["tail", "body", "head"]) ==> ["head", "body", "tail"]
fixTheMeerkat(["tails", "body", "heads"]) ==> ["heads", "body", "tails"]
fixTheMeerkat(["bottom", "middle", "top"]) ==> ["top", "middle", "bottom"]
fixTheMeerkat(["lower legs", "torso", "upper legs"]) ==> ["upper legs", "torso", "lower legs"]
fixTheMeerkat(["ground", "rainbow", "sky"]) ==> ["sky", "rainbow", "ground"]

### Link to the challenge

[My head is at the wrong end!](https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/solutions/javascript/me/best_practice "My head is at the wrong end!")

### Overview of the process for solving the challenge

1. [Craig](https://github.com/tektechnologies "Craig") and I each took turns writing pseudocode on our [whiteboard](whiteboard.jpg "whiteboard").
1. Craig said he found the [array reverse method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse "array reverse method"). 
1. I suggested storing the first and last values of the array as variables and swapping them using a temporary variable.
1. Since Craig&apos;s code abstracted the process of swapping the values we decided to use his solution. I suggested returning the value right away rather than storing it as a variable then returning it.