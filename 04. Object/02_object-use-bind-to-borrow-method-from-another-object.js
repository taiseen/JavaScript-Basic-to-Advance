// 5 - Feb - 2021 
// Module 25

// Borrowing method have ===> 3 types.
// 1) Bind  ==> its return a function 
// 2) Call
// 3) Apply 


const taiseenObject = {
    firstName: 'Taiseen',
    lastName: 'Azam',
    salary: 50000,
    chargeBill: function (amount) {
        console.log('inside taiseen >>>>>>>>>>>>>>>>> :', this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const shawonObject = {
    firstName: 'Shawon',
    lastName: 'Mahmud',
    salary: 60000,
}

const ayshaObject = {
    firstName: 'Aysha',
    lastName: 'Anjum',
    salary: 45000,
}

const taka = taiseenObject.chargeBill(500);
console.log(taka);

// একটা Object থেকে function() ধার করে নিয়ে এনে কাজে লাগানো, অন্য এক Object এর জন্য, ইহাই => Bind
// একটা Object এর function() কে, অন্য একটা Object এর function() হিসেবে ব্যাবহার করার system কেই Bind বলে।
// Bind ==> মানে অন্য Object থেকে ধার করে নিয়ে আনা বা চেয়ে আনা। 
// Bind ==> system return a function 

const shawonChargeBill = taiseenObject.chargeBill.bind(shawonObject);
const forShawon = shawonChargeBill(3000); // function 
console.log(forShawon);

const ayshaChargeBill = taiseenObject.chargeBill.bind(ayshaObject);
const forAysha = ayshaChargeBill(2000); // function 
console.log(forAysha);
