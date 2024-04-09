//function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) 

console.clear();
function multiply(a, b) {

    // if value of any param is not provided it resolves to undefined
    b = typeof b !== "undefined"? b : 1; 
    return a * b;
}


function greet(name, greeting, message = `${greeting} ${name}`){
    //erlier parameters are available to later default parameters
    return [name, greeting, message];
}


console.log(greet("amos", "Hi"));