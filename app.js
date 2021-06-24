'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
let result = a + b;
console.log('The sum of '+a+' and '+b+' is '+result+'.');

let finalResult ='The sum of '+a+' and '+b+' is '+result+'.';
return [result,finalResult];

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
function multiply(a, b) { //eslint-disable-line
    let mResult = a*b;
    console.log('The product of '+a+' and '+b+' is '+mResult+'.');
    let finalmResult ='The product of '+a+' and '+b+' is '+mResult+'.';
    return [mResult,finalmResult];

}
//multiply(5, 3);
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
function sumAndMultiply(a, b, c) { //eslint-disable-line
    let adSum = sum(a,b);
    //console.log(adSum[0]);
    let adSum2 = sum(adSum[0],c);
    //console.log(adSum2[0]);
    
    let ma = multiply(a, b);
    //console.log(ma[0]);
    let ma2 = multiply(ma[0], c);
   // console.log(ma2[0]);

    let rOut =[adSum2[0],ma2[0],
        a+' and '+b+' and '+c+' sum to '+adSum2[0]+'.',
        'The product of '+a+' and '+b+' and '+c+' is '+ma2[0]+'.'
    ]
   console.log('the result', rOut);
   return rOut;
}

// Here is the test for sumAndMultiply(); uncomment it to run it

//sumAndMultiply(4, 7, 5);  // when i call this function no problem happened

testSumAndMultiply(4, 7, 5); // if i call this function an error show in the consol

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
 let n1 = testArray[0];
 let n2 = testArray[1];
 let n3 = testArray[2];

 //console.log('the numbers are : ',n1,n2,n3);
 let sumN1=sum(n1,n2);

 //console.log(sumN1[0]);

 let sumN2=sum(sumN1[0],n3);

 //console.log('the total sum is ', sumN2[0]);

let rrOut = n1+','+n2+','+n3+' was passed in as an array of numbers, and '+sumN2[0]+' is their sum.';

// console.log('sum array', sumN2[0], rrOut);

return [sumN2[0], rrOut] ;


}



//sumArray(testArray);
// Here is the test for sumArray(); uncomment it to run it

 testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
    let w1 = testArray[0];
    let w2 = testArray[1];
    let w3 = testArray[2];
   
    //console.log('the numbers are : ',n1,n2,n3);
    let mltiW1=multiply(w1,w2);
   
    //console.log(sumN1[0]);
   
    let mltiW2=multiply(mltiW1[0],w3);
   
    //console.log('the total sum is ', sumN2[0]);
   
   let mmOut = 'The numbers '+ w1+','+w2+','+w3+' have a product of '+mltiW2[0]+'.';
   
    //console.log('multi array', mltiW2[0], mmOut);
   
   return [mltiW2[0], mmOut] ;
}


//multiplyArray(testArray);

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(testArray);

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
let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

  let multiEx =[1] ;
  for (let i = 0; i < testDynamicArray.length; i++) {

    //console.log(i);
    //console.log(testDynamicArray[i]);
      multiEx = multiply(multiEx[0],testDynamicArray[i]);
      //console.log('the final example is ' ,multiEx[0]);
          
  }
          return [multiEx[0],'The numbers 1,2,3,4,5 have a product of '+multiEx[0]+'.'];

}

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.