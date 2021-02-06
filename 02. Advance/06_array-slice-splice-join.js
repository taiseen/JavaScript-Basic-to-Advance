// 02 - Feb - 2021 
// Milestone 5 ==> 23-9

const numbers = [111, 112, 113, 114, 115, 116, 117, 118, 119];

// shortcut এক সিস্টেম, array তে প্রবেশ করে সকল elements কে read করা 
let index = numbers.map((v, i) => {
    return console.log(v, i);
})

/*
111 0
112 1
113 2
114 3
115 4
116 5
117 6
118 7
119 8
*/


// ####### slice (copy) ########################################################
const copy = numbers.slice(2, 6); // Start index to End index
// trick part is ===> (6-2 = 4) its mean total 4 element get & show from array 
// .slice() ==> return you -- your given custom command of array 
// regarding Not hamper that Original Array... 
console.log('Copy From Array', copy); // [ 113, 114, 115, 116 ]
console.log(numbers); // [111, 112, 113, 114, 115, 116, 117, 118, 119]


// Special Focus
// ####### splice (cut) ########################################################
const cut = numbers.splice(2, 5); 
// Start index to How many elements you want regarding the range of array.
console.log('Cut From Array', cut); 
// [ 113, 114, 115, 116, 117 ]

// Change Original Array
console.log(numbers); 
// [ 111, 112, 118, 119 ]

// ####### splice (cut & insert) ########################################################
const cutInsert = numbers.splice(2, 3, 55 , 66 , 77 ); 
console.log('Cut & Insert', cutInsert); 
// Cut & Insert [ 113, 114, 115 ]

// Change Original Array
console.log(numbers); 
// [ 111, 112,  55,  66, 77, 116, 117, 118, 119 ]


// ####### join ########################################################
let together1 = numbers.join('');
let together2 = numbers.join(',');
let together3 = numbers.join(' ');

console.log(together1);
// 111112113114115116117118119 ===> return as a string

console.log(together2);
// 111,112,113,114,115,116,117,118,119

console.log(together3);
// 111 112 113 114 115 116 117 118 119

