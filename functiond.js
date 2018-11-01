/*Function in js*/

function msg() {
    console.log("Hello this is function");
}
msg();

/*with arugument*/

function msga(number) {
    console.log(number*number+number);
}
msga(10);

/*fuction with return value*/

function msgar() {
    return "Hellw this is return value function";    
}

console.log(msgar());

// function object with constructor

var add=new Function("num1","num2","return num1+num2");
console.log(add(10,20));


