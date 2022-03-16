# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

<!-- Explain why line 4 and line 6 output different numbers.
The variable x on line 1 is in the global scope.
and the variable x on line 5 is within the scope of the f1() function. 
This means the variables are in different scopes.  -->

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
<!-- The console.log(x) on line 31 will print 10. The console.log(f1()) will print 
undefined because there is no return statement in the function.
The console.log(y) will give an error message because the console.log(y)
is outside of the function scope.   -->
 
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
<!-- The variable x is a number datatype. This value gets passed to the f1() function so the the output is still 9. The variable y has an object assigned to it which gets passed to the f2() function. In JS, objects are passed by reference and so changing the value inside the function affects the variable passed from the outside function making x to now be 10. -->
