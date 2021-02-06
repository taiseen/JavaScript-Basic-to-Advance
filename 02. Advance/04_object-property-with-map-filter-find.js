// 02 - Feb - 2021 
// Milestone 5 ==> 23-6

let human = [
    { name: 'Taiseen', age: 28 },
    { name: 'Shawone', age: 27 },
    { name: 'Jhankar', age: 34 },
]
let names = [];
let ages = [] ;

for (let i = 0; i < human.length; i++) {
    const singleObject = human[i];
    const name = singleObject.name;
    const age = singleObject.age;

    names.push(name);
    ages.push(age);
}
//console.log("Names are :",names ); 
// Names are : [ 'Taiseen', 'Shawone', 'Jhankar' ]

//console.log("Ages are :",ages); 
// Ages are : [ 28, 27, 34 ]


let n = human.map( person => person.name )
//console.log('Return an array :',n); 
// Return an array : [ 'Taiseen', 'Shawone', 'Jhankar' ]

let a = human.map( person => person.age )
//console.log(a); 
// [ 28, 27, 34 ]

let bigger = human.filter( p => p.age > 27 )
//console.log(bigger); 
// [ { name: 'Taiseen', age: 28 }, { name: 'Jhankar', age: 34 } ]

let big = human.find( p => p.age > 27 )
//console.log(big); 
// { name: 'Taiseen', age: 28 }
