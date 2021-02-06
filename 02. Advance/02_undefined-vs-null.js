// 02 - Feb - 2021 
// Milestone 5 ==> 23-3

/* 

null is an assigned value. It means nothing. null is an object.
undefined means a variable has been declared but not defined yet OR has not assigned a value.

So, In JavaScript, undefined is a type, whereas null an object.

There are 2 features of (null) you should understand:
1) null is an empty or non-existent value.
2) null must be assigned.

*/

// undefined ==> concept 

// 1
let variable_1 ;
let variable_2 = null;

console.log("variable is :", variable_1);
// variable is : undefined

console.log("variable is :", variable_2);
// variable is : null

// =========================================================

// 2
function add(num1, num2) {

    console.log(num1 + num2);
    console.log(num1, num2);

    return
    // for empty return --> its become to undefined
}

console.log("No Return value : ", add(5, 10));
// No Return value :  undefined

console.log("One argument pass : ", add(5));
// One argument pass :  undefined

// =========================================================

// 3
let object = {
    property_1: "value_1",
    property_2: "value_2"
}

console.log("Object property is :", object.property_3);
// Object property is : undefined

// =========================================================

// 4
let numArray = [2, 4, 6];
console.log("Array value is :", numArray[8]);
// Array value is : undefined


function doSomething(x, y = 4)
{
    console.log(y);  
}
doSomething(3,2); //2
