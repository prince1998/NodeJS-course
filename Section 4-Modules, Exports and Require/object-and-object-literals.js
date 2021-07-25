var person = {
    firstname: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log("Hello, " + this.firstname + ' ' + this.lastName);
    }
};

person.greet();
// Hello, John Doe

console.log(person['firstname']);
// John