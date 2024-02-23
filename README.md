# Boolean Expression Refactoring Kata 🥷🏻

Welcome to the Boolean Expression Refactoring Kata. The goal of this exercise is to practice refactoring skills, specifically focusing on boolean expressions. You will be given a set of functions with boolean expressions that can be simplified or improved for readability.

## Task ✅

Your task is to refactor the boolean expressions in the functions located in the `boolean-expressions.ts` file. You should make the code simpler, more readable, or more efficient, but it should still pass all the tests.

Here are some examples of the kind of refactorings you might consider:

- Simplifying complex logical expressions
- Removing redundant checks
- Using optional chaining and nullish coalescing
- Replacing nested ternary operators with if-else statements or switch-case statements
- Eliminating double negatives

Remember, the goal is not to change what the code does. The refactored code should produce the same results as the original code. To ensure this, you should run the tests after each change to make sure you haven't broken anything.

## Running the Tests 🧪

The tests are located in the `boolean-expressions.test.ts` file. You can run them using Jest:

```bash
npm run test
```

The tests use Jest's `expect` and `it` functions to define the test cases. Each function from `boolean-expressions.ts` has corresponding tests. If you've refactored correctly, all the tests should pass.

## Tips 🤙🏻

- Take small steps. Refactor one thing at a time, and run the tests after each change.
- Understand what the code is doing before you try to refactor it. If you're not sure, experiment with some examples or use a debugger.
- Keep the code clean. Follow good coding practices, like meaningful variable names and consistent indentation.
- If you get stuck, remember the principles of refactoring: Don't change behavior. Don't refactor and add functionality at the same time. If you find a bug, write a test.

Good luck! 🍀