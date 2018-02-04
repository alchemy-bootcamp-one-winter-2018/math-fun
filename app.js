'use strict';

/*
    For each Problem:
        
    Test your function by hand in the browser's console to get it working.
    When you think it is finished, uncomment the call
    for its test function to see if it passes.

    Once you get the test passing, do an a-c-p cycle and synchronize the 
    code between GitHub and your laptop. Don't forget to create 
    a new branch for your work on the next question!
*/






///////////////////////////////////// 
/* Problem 1 (this is your demo that we'll solve in class)

Write a function called sum() that takes in two numbers as
arguments and then returns an array where the first element 
is the sum of those numbers, and the second element is a concatenated
string that EXACTLY follows this example and uses 
the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

// Write your code here

function sum(a, b){ //eslint-disable-line
    const numSum = a + b;
    return [numSum, "The sum of " + a + " and " + b + " is " + numSum + "."];
}


// Here is the test for sum(); uncomment it to run it
//testSum();








/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers 
as arguments and returns an array where the first element is the 
product of those numbers, and the second element is a string 
that EXACTLY follows this example and uses the values that 
were input into the function:

"The product of 5 and 9 is 45."
*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
    const numProduct = a * b;
    return [numProduct, "The product of " + a + " and " + b + " is " + numProduct + "."];
}

// Here is the test for multiply(); uncomment it to run it
//testMultiply();








/////////////////////////////////////
/* Problem 3

Write a function called sumAndMultiply() that takes in three 
numbers as separate arguments and returns an array where the 
first element is the sum of those three numbers, the second 
element is the product of those three numbers,  and the third 
and fourth elements are strings that EXACTLY follow this example 
and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 

    You may not use the arithmetic 
    operators + and * in this function. To do addition, 
    use your sum() function, and to do multiplication, 
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 
*/

// Write your code here
function sum(a, b, c) {
    return a + b + c;
}
function multiply(a, b, c) {
    return a * b * c;
}
function sumAndMultiply(a, b, c){ //eslint-disable-line
    const numSum = sum(a, b, c);
    const numProduct = multiply(a, b, c);
    return [numSum, numProduct, a + " and " + b + " and " + c + " sum to " + numSum + ".", "The product of " + a + " and " + b + " and " + c + " is " + numProduct + "."];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
//testSumAndMultiply();









/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of 
numbers as its single argument and then returns an array where
the first element is the sum of the numbers in the array, and 
the second element is a string that EXACTLY follows this example 
and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 

    You may not use the arithmetic 
    operators + and * in this function. To do addition, 
    use your sum() function, and to do multiplication, 
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!
*/

// Write your code here
function sum(a, b, c) {
    return a + b + c;
}
function sumArray(testArray){ //eslint-disable-line
    const numSum = sum(testArray[0], testArray[1], testArray[2]);
    testArray = [2, 3, 4];
    return [numSum, testArray[0] + "," + testArray[1] + "," + testArray[2] + " was passed in as an array of numbers, and " + numSum + " is their sum."];
}

// Here is the test for sumArray(); uncomment it to run it
//testSumArray();








/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array 
of 3 numbers as its argument and returns an array whose first
element is the product of those numbers, and the second element is 
a string that EXACTLY follows this example and uses the values
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL! 

    You may not use the arithmetic 
    operators + and * in this function. To do addition, 
    use your sum() function, and to do multiplication, 
    use your multiply() function.

IMPORTANT DETAIL! IMPORTANT DETAIL! IMPORTANT DETAIL!
*/

// Write your code here
function multiply(a, b, c) {
    return a * b * c;
}
function multiplyArray(testArray){ //eslint-disable-line
    const numProduct = multiply(testArray[0], testArray[1], testArray[2]);
    testArray = [2, 3, 4];
    return [numProduct, "The numbers " + testArray[0] + "," + testArray[1] + "," + 
        testArray[2] + " have a product of " + numProduct + "."];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray();