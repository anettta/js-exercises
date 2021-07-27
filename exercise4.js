//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3); // 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // 31

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); //17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); //16

//What are the two elements of a pure function?
// 1. Pure function is deterministic. Always produces same results given the same input.

// 2. Pure function has no side effects. Doesn't depend on any state, data or change during program's execution. Must only depend on its input elements.
