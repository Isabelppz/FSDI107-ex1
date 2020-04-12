var mathLib = require('./myMath');
// "./"look for a file called in the same folder

//function homework(){
    //print the first 20 even numbers
    //for loop : print name 1 to 10;


//Exe 1
console.log('Hello world!');

let age=90;
console.log(age);

let name="Isabel P. Perez";
console.log("My name is:"+ name);


//Exe 2
function init() {
    console.log('Hello world!');

    let age=90;
    console.log(age);
    
    let name="Isabel P. Perez";
    console.log("My name is:"+ name);
}
//exec the fn on the module
mathLib.sayHello("a parameter val"); 
var res= mathLib.sum(21,21);
console.log(res);

var g= mathLib.greater(897123, 89123);
console.log(g);

console.log(mathLib.greater(-1,-2));
console.log("Is even:"+ mathLib.isEven(42));
console.log("Is even:"+ mathLib.isEven(333));
console.log("Is even:"+ mathLib.isEven(0)); 
 
init();