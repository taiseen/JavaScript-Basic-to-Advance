// 02 - Feb - 2021 
// Milestone 5 ==> 23-5


let numbers = [2, 4, 6, 8, 10];
let squireNum = []; // an Empty array 
for (let i = 0; i < numbers.length; i++) {
    const singleNumber = numbers[i];
    const result = singleNumber * singleNumber;

    // full this Empty array by result... 
    squireNum.push(result);
}
//console.log( squireNum ); // [4, 16, 36, 64, 100]

// let squireNumber = numbers.map((value, index, array) => {
//     // console.log(value, index, array);
//     // return console.log(value * value); 
//     return value * value; 
// });

let squireNumber = numbers.map(value => value * value);
//console.log(squireNumber); // [4, 16, 36, 64, 100]

let bigger = numbers.filter( value => value > 5 );
// console.log(bigger); // [6, 8, 10]
// console.log(typeof(bigger)); // object

let isThere = numbers.find( value => value >= 5 );
// console.log(isThere); // 6 ====> its return a single pice of Value
// console.log(typeof(isThere)); // number
