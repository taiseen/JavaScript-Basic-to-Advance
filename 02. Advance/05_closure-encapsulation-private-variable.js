// 02 - Feb - 2021 
// Milestone 5 ==> 23-8

function serve() {

    let plate = 0;

    // closer --- concept work here.
    // encapsulation
    return function () {
        plate++
        return plate;
    }
}

let boy_1 = serve();
let boy_2 = serve();
//console.log(boy_2); //[Function (anonymous)]

console.log('Boy 1 :',boy_1());
console.log('Boy 1 :',boy_1());
console.log('Boy 1 :',boy_1());
console.log('Boy 1 :',boy_1());
console.log(boy_2());
console.log(boy_2());
console.log('Boy 1 :',boy_1());
console.log('Boy 1 :',boy_1());
console.log(boy_2());
console.log(boy_2());

/* 
Boy 1 : 1
Boy 1 : 2
Boy 1 : 3
Boy 1 : 4
1
2
Boy 1 : 5
Boy 1 : 6
3
4 
*/
