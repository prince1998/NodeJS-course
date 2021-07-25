// pass by reference - objects are passed by reference in JS
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
//function call will directly modify c and will replace prop1 with function prop1 
console.log(c); //{prop1: ƒ, prop2: {…}} 