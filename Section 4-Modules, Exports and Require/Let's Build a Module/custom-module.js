var greet = function () {
    console.log("Hello");
}; 

// The modules are self-contained ie. the variables and functions cant be accessed by another file by default
// To make the module functions accessible to other files use module.exports = variable name
module.exports = greet; 