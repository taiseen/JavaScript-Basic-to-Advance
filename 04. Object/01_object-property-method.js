// 5 - Feb - 2021 
// Module 25

const personObject = {
    firstName: 'Taiseen',
    lastName: 'Azam',
    salary: 50000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;

        // if you not return this, 
        // then at the function calling time, 
        // result become undefined
        return this.salary;
    }
}
// console.log( personObject );
// console.log( personObject.firstName );
// console.log( personObject.getFullName );
// console.log( personObject.getFullName() );

// console.log( personObject.salary );
// console.log( personObject.chargeBill(1000) );
// console.log( personObject.chargeBill(2500) );
// console.log( personObject.chargeBill(500) );