'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
// store input numbers

function sum(a,b) { //eslint-disable-line

let x = a +b ;
return [x, "The sum of " + a + " and " + b + " is " + x + "."];
console.log(x, 'The result of the  sum');
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply(q, w) { //eslint-disable-line

    let m = q*w ;
    
    console.log(m, 'The result of the  multiply');
    return [m, "The product of " + q + " and " + w + " is " + m + "."];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here


function sumAndMultiply(n, g, f)
{ //eslint-disable-line
let sum1 = sum(n, g)[0];
let sum2 = sum(sum1, f)[0];
let multi1 = multiply(n, g)[0];
let multi2 = multiply(multi1, f)[0];
console.log(multi2, 'The result of the  multiply');
console.log(sum2, 'The result of the  sum');

return [sum2, multi2, +n + " and " + g + " and " + f + " sum to " + sum2 + ".", "The product of " + n + " and " + g + " and " + f + " is " + multi2 + "."];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!





/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument
 and then returns an array where the first element is the sum of the numbers in the array,
  and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here

let testArray = [2,3,4]; //eslint-disable-line

function sumArray([a,s,d]) { 
    //eslint-disable-line
    var x = sum(a,s)[0];
    var y = sum(x,d)[0];
   console.log([a,s,d],'Sum of array')

return [ a + "," + s + "," + d + " was passed in as an array of numbers, and " + y + " is their sum."];
}

// // // Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////




/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

let testArray = [2, 3, 4]; //eslint-disable-line

function multiplyArray([a,s,d])
{ //eslint-disable-line
let p = multiply(a,s)[0];
let t = multiply(p,d)[0];
return [t ,"The numbers " + a + "," + s + "," + d + " have a product of " + t + "." ];
console.log([a,s,d],'Multiplay of array')
}
testMultiplyArray(testArray);


// // Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray1);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
// let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

// function multiplyAnyArray(dynamicArray) { //eslint-disable-line

// }

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.