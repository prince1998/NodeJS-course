// function constructor
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

// Prototypal inheritance - used to give additional properties and methods to all objects 
Person.prototype.greet = function() {
    console.log("Hello, from prototype greet, " + this.firstname + " " + this.lastname);
};

var priyansh = new Person('Priyansh','Ramnani');
console.log(priyansh.firstname);
//Accessible by prototypal inheritance
priyansh.greet();

var manju = new Person('Manju','Ramnani');
manju.greet();

//prints prototype object
console.log(priyansh.__proto__);
console.log(manju.__proto__);

//since both prototype objects are same, it will print true
console.log(priyansh.__proto__ === manju.__proto__);