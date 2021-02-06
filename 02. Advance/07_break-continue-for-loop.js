// 02 - Feb - 2021 
// Milestone 5 ==> 23-9

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < numbers.length; i++) {

    const singleElement = numbers[i];

    if (singleElement > 5) {

        //console.log('inside if statement : ',singleElement); 
        // inside if statement :  6

        break;
        // code OR loop going to stope here...

    }
    //console.log('outside if statement : ',singleElement);
    // outside if statement :  1
    // outside if statement :  2
    // outside if statement :  3
    // outside if statement :  4
    // outside if statement :  5

}

// #####################################################################################

const evenNumbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15]

for (let i = 0; i < evenNumbers.length; i++) {

    const singleElement = evenNumbers[i];

    if (singleElement < 0) {

        // skip these "true" condition OR ignore these 
        continue;
        // code OR loop going to continue & skip the tru condition

    }
    console.log('outside if statement : ', singleElement);
    // outside if statement :  2
    // outside if statement :  4
    // outside if statement :  6
    // outside if statement :  8
    // outside if statement :  10
    // outside if statement :  12
    // outside if statement :  14

}