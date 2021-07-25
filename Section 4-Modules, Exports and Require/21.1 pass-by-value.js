// pass by value 
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a); //1 since primitive values are passed by value in JS (values are copied)

